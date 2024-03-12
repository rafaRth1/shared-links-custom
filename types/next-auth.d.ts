import NextAuth from "next-auth";
import { Session } from "inspector";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      firstname: string;
      lastname: string;
      nickname: string;
      token: string;
    };
  }

  interface User {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    nickname: string;
    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      email: string;
      firstname: string;
      lastname: string;
      nickname: string;
      token: string;
    };
  }
}
