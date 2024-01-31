import NextAuth, { type NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHub from "next-auth/providers/github";
import Apple from "next-auth/providers/apple";
import { prisma } from "@/prisma";

export const authOptions: NextAuthConfig = {
  callbacks: {
    // @ts-ignore
    session: ( { session, user } ) => ( {
      ...session,
      user: {
        ...session.user,
        id: user?.id
      },
    } ),
  },

  adapter: PrismaAdapter( prisma ),

  providers: [
    GitHub( {
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    } ),
    Apple( {
      clientId: process.env.APPLE_CLIENT_ID ?? '',
      clientSecret: process.env.APPLE_CLIENT_SECRET ?? '',
    } ),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/sign-error",
  }
}

export const { handlers, auth } = NextAuth( authOptions )