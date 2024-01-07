import { User } from "../../../models/User";
import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../../libs/mongoConnect";

export const authOptions = {
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
        const passwordOK = user && bcrypt.compareSync(password, user.password);

        if (passwordOK) {
          console.log("AUTH", user);
          return user;
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
