import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "./action";
import { UserProfile } from "@/common.type";
import { comparePassword } from ".";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { user } = (await getUserByEmail(credentials?.email ?? "")) as {
          user: UserProfile;
        };
        if (!user) return null;
        console.log(user);
        if (
          !user.password ||
          !(await comparePassword(user.password, credentials?.password ?? ""))
        )
          return null;
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials });
      return true;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
