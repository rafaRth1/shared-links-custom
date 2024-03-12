import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientAxios from "@/utils/client-axios";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        try {
          const {
            data,
          }: {
            data: {
              _id: string;
              email: string;
              token: string;
              name: string;
              lastname: string;
              nickname: string;
            };
          } = await clientAxios.post("/user/login", {
            email: credentials?.email,
            password: credentials?.password,
          });

          return {
            id: data?._id,
            firstname: data.name,
            lastname: data.lastname,
            nickname: data.nickname,
            email: data.email,
            token: data.token,
          };
        } catch (error: any) {
          throw new Error(error.response.data.msg);
        }
      },
    }),
  ],

  callbacks: {
    jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },

    session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
});

export { handler as GET, handler as POST };
