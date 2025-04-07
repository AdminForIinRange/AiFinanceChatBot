"use server";
import { getCurrentUser } from "@/lib/actions/user.actions";
import React from "react";

const UserNav = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="text-gray-700">
      {currentUser ? (
        <span>Welcome, {currentUser.email}</span>
      ) : (
        <span>Not logged in</span>
      )}
    </div>
  );
};

export default UserNav;
