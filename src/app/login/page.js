"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  /**
   *  LOGIN PAGE STATE
   */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgess, setLoginInProgess] = useState(false);
  const [error, setError] = useState(false);

  /**
   *  Function to submit login details
   */

  async function handleFormSubmit(e) {
    e.preventDefault();
    loginInProgess(true);

    /**
     * SEND REQUEST TO /api/login ROUTE FOR LOGIN INTO THE APP
     */

    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setError(false);
    } else {
      console.log(response);
      setError(true);
    }
    setLoginInProgess(false);
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-6">Login</h1>
      {error && (
        <div className="p-2 text-center text-gray-600">
          Something went wrong!
          <br /> Now you can Pleae try again later.
        </div>
      )}
      <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loginInProgess}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loginInProgess}
        />
        <button type="submit" disabled={loginInProgess}>
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.png"} height={24} width={24} /> Login with google
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
