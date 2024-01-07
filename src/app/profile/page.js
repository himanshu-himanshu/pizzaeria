"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const session = useSession();
  const { status } = session;

  const [userName, setUserName] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session?.data?.user?.name || "");
    }
  }, [session, status, userName, saved]);

  if (status === "loading") {
    return "Loading....";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const handleProfileInfoUpdate = async (ev) => {
    ev.preventDefault();
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName }),
    });

    console.log(response);

    if (response.ok) {
      console.log("INSIDE RES OK");
      setSaved(true);
    }
  };

  return (
    <section className="my-12">
      <h1 className="text-center text-primary text-4xl mb-6">Profile</h1>
      {saved && (
        <h2 className="text-gray-600 text-center border border-green-200 bg-green-100/40 max-w-xs mx-auto px-2 py-4 text-sm">
          Profile Updated Successfully!
        </h2>
      )}
      <div className="max-w-md mx-auto my-8">
        <div className="flex gap-2 items-center">
          <div className="p-2 flex flex-col items-center justify-center">
            <Image
              src={"/profile.jpg"}
              height={118}
              width={118}
              alt="Profile"
              className="rounded-full"
            />
            <label>
              <input type="file" className="hidden" />
              <span className="my-2 hover:cursor-pointer font-semibold border-0 outline-none flex gap-1 items-center justify-center">
                Edit
              </span>
            </label>
          </div>
          <form onSubmit={handleProfileInfoUpdate} className="grow">
            <input
              type="text"
              placeholder="First and last name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={session.data?.user.email}
              disabled={true}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
