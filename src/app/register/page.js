"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setCreatingUser(true);

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setUserCreated(true);
      setError(false);
    } else {
      console.log(response);
      setUserCreated(false);
      setError(true);
    }
    setCreatingUser(false);
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-6">Register</h1>
      {userCreated && (
        <div className="p-2 text-center text-gray-600">
          Registration Successfull.
          <br /> Now you can{" "}
          <Link href={"/login"} className="hover:cursor-pointer text-gray-800">
            Login &rarr;{" "}
          </Link>
        </div>
      )}
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
          onChange={(e) => setEmail(e.target.value)}
          disabled={creatingUser}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={creatingUser}
        />
        <button type="submit" disabled={creatingUser}>
          Register
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
          Already a member?{" "}
          <Link href={"/login"} className="text-primary">
            Login &rarr;
          </Link>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
