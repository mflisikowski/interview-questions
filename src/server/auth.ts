import { type DefaultSession, type NextAuthOptions } from "next-auth";
import { type ILogObj, Logger } from "tslog";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";

import { prisma } from "@/server/prisma";

const log = new Logger<ILogObj>();

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
    };
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ( { session, user } ) => ( {
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    } ),
  },
  adapter: PrismaAdapter( prisma ),
  providers: [
    GithubProvider( {
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    } ),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  secret: process.env.NEXTAUTH_SECRET,
  logger: {
    error( code, metadata ) {
      log.error( code, metadata );
    },
    warn( code ) {
      log.warn( code );
    },
    debug( code, metadata ) {
      log.debug( code, metadata );
    },
  },
  pages: {
    signIn: "/auth/sign-in",
  }
};
