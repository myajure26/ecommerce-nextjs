import prisma from '@/lib/prisma';
import NextAuth, { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from 'next-auth/providers/credentials';
import { compareSync } from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth( {
  adapter: PrismaAdapter( prisma ),
  providers: [
    Credentials( {
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      authorize: async ( credentials ) => {
        if ( credentials == null ) return null;

        const user = await prisma.user.findUnique( {
          where: { email: credentials.email as string },
        } );

        if ( user && user.password ) {

          const isMatch = compareSync( credentials.password as string, user.password );

          if ( isMatch ) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            };
          }
        }

        return null;

      },

    } )
  ],
  callbacks: {
    async session( { session, user, trigger, token } ) {

      session.user.id = token.sub as string;

      if ( trigger === 'update' ) {
        session.user.name = user.name;
      }

      return session;
    }
  }
} satisfies NextAuthConfig );