"use client";
import React from "react";
import { logoutAction } from "../actions/auth";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logoutAction();
      // redirect will be handled in the server action
      // client side redirect fall back
      router.push("/login");
      router.refresh();
    }
    catch (error) {
      console.error("Logout failed", error);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500! text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer"
    >
      Logout
    </button>
  );
}
