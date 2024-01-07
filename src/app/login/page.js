"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

const page = () => {
  /**
   *  LOGIN PAGE STATE
   */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [error, setError] = useState(false);

  /**
   *  Function to submit login details
   */

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoginInProgress(true);
    await signIn("credentials", { email, password, callbackUrl: "/" });
    setLoginInProgress(false);
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-6">Login</h1>
      {error && (
        <div className="p-2 text-center text-gray-600">
          Something went wrong!
          <br /> Now you can Please try again later.
        </div>
      )}
      <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          disabled={loginInProgress}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          disabled={loginInProgress}
        />
        <button type="submit" disabled={loginInProgress}>
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image
            src={"/google.png"}
            height={24}
            width={24}
            alt="Google Image"
          />{" "}
          Login with google
        </button>
        <div className="text-center px-2 py-6 text-gray-600">
          Don't have an account?{" "}
          <Link href={"/register"} className="text-primary">
            Register &rarr;
          </Link>
        </div>
      </form>
    </section>
  );
};

export default page;
