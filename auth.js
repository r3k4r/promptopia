import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getUserById } from './data/user/index';


const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages :{
    signIn : "auth/login",
    error : "auth/error",
  },
  events :{ 
    async linkAccount({user}){
      await prisma.user.update({
        where : {id : user.id},
        data :{
          emailVerified : new Date()
        }
      })
    }
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

        session.user.emailVerified = token.verify;

      
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

       const verifiedEmail = await getUserById(token.sub);

      if (!verifiedEmail) return token;

      token.verify = verifiedEmail.emailVerified;

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});