import { User } from "../../../models/User";
import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  /**
   * We can add different providers
   * such as Google, Github or even simple credentials
   * as used below.
   */

  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "abc" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        // Database connection to find user using email
        mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({ email });

        // Check for password
        if (user && bcrypt.compareSync(password, user.password)) {
          return user;
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
