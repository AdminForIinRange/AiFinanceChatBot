"use client";

import React, { useEffect, useState } from "react";

import ReactLenis from "lenis/react";

import ChatArea from "@/components/Main/chatArea";
import Navbar from "@/components/Navbar/Navbar";
import ActiveChatArea from "@/components/Main/activeChatArea";

const Home = () => {
  // const { user, setUser } = useUser();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     // Fetch the current user only if not already set
  //     if (!user) {
  //       const currentUser = await getCurrentUser();
  //       setUser(currentUser);
  //     }
  //     setLoading(false); // Mark loading as complete

  //   };

  //   fetchUser();
  // }, [user, setUser]);

  return (
    <>
      <ReactLenis root />
      <ActiveChatArea />
    </>
  );
};

export default Home;
