import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { prisma } from "./app/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getUserById } from './data/user/index';



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
    async signIn({user, account}){
      //allow oAuth without email verification
      if(account?.provider !== "credentials") return true;  

      const existingUser = await getUserById(user.id);

      //prevent sign in without email verification
      if(!existingUser.emailVerified){ return false; }

      //add 2fa check

      return trur
    },
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