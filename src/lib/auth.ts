import NextAuth, { User } from "next-auth";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import config from "./config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: config.env.secret,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await db
          .select()
          .from(users)
          .where(eq(users.email, credentials.email.toString()))
          .limit(1);

        if (!user.length) return null;

        const isPasswordValid = await compare(
          credentials.password.toString(),
          user[0].password
        );

        if (!isPasswordValid) return null;

        return {
          id: user[0].id.toString(),
          email: user[0].email,
          role: user[0].role,
          name: `${user[0].lastName} ${user[0].firstName}`,
        } as User;
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        //@ts-expect-error add role to User & AdapterUser
        token.role = user.role;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        //@ts-expect-error add role to User & AdapterUser
        session.user.role = token.role as string;
        session.user.email = token.email as string;
        session.user.name = token.name;
      }
      return session;
    },
  },
});
