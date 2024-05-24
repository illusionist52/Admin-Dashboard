import NextAuth from "next-auth/next";
import { authConfig } from "./authconfig";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};