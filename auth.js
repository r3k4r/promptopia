import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getUserById } from './data/user/index';
import { async } from './app/lib/action';

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    // async signIn({user}){
    //   const existingUser = await getUserById(user.id);

    //   if(!existingUser || !existingUser.emailVerified){
    //     return false
    //   }
    //   return true
    // },
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