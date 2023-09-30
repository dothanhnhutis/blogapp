import NextAuth from "next-auth";
import { authOptions } from "@/lib/session";

export default NextAuth(authOptions);
