"use client";

import { calsans } from "@/fonts/calsans";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../components/ui/tracing-beam";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import onePieceOFbackground from "../../public/svg/onePieceOFbackground.svg";
import Navbar from "@/components/Navbar/Navbar";

import Hero from "@/components/Hero";
import AboutHeader from "@/components/AboutUs/AboutHeader";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials/AnimatedTestimonialsDemo";
import StickyScroll from "@/components/customUI/StickyScroll/StickyScroll";
import RepeatAnimation from "@/components/customUI/RepeatAnimation/RepeatAnimation";
import SmoothScroll from "@/components/customUI/SmoothScroll/SmoothScroll";
import { HeroScrollDemo } from "@/components/customUI/ContainerScrollAnimation/HeroScrollDemo";
import { MacbookScrollDemo } from "@/components/customUI/MacbookScroll/MacbookScrollDemo";
// import { useUser } from "@/context/UserContext";
import { getCurrentUser } from "@/lib/actions/user.actions";
import TestingCreateListingDB from "@/components/TestingCreateListingDB";
import { Box, HStack, Text } from "@chakra-ui/react";
import WaitingList from "@/components/waitingList/WaitingList";
import ReactLenis from "lenis/react";
import Testimonials from "@/components/testimonials";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";


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

{/* <WaitingList /> */}


      <Hero />
{/* 
      <TestingCreateListingDB /> */}

<Testimonials />
   <HStack
        justify={"center"}
        align={"center"}
        w={"100%"}
        id="get-started-button"
        my={["50px", "50px", "50px", "50px", "50px", "50px"]}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <ScheduleConsultation />
      <HStack justify={"center"} align={"center"} w={"100%"}>
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <FAQ />
    

    </>
  );
};

export default Home;
