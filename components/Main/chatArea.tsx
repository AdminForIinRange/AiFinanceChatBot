"use client";
import React, { useState } from "react";
import { Box, Text, Input, Stack, HStack, VStack } from "@chakra-ui/react";
import {
  ChartSplineIcon,
  Crown,
  Newspaper,
  FileChartColumn,
  Crosshair,
  Globe,
  CornerDownLeft,
} from "lucide-react";
import ActiveChatArea from "./activeChatArea";

const ClickableBox = ({ onClick, icon, children }) => (
  <Box
    onClick={onClick}
    shadow="md"
    display="flex"
    flexDir="column"
    fontFamily="poppins"
    fontSize={["14px", "14px", "16px"]}
    color="gray.200"
    textAlign="start"
    w={["100%", "200px", "200px","200px", "250px", "250px"]} // Full width on mobile, 300px on larger screens
    h={["100px", "150PX", "200PX","200PX", "180PX", "180PX"]}
   
    bg="#303030"
    p={["12px", "14px", "18px"]}
    rounded="lg"
    border="1px solid #7A7A7A"
    _hover={{ bg: "#404040", transform: "scale(1.02)" }}
    transition="all 0.2s ease-in-out"
    cursor="pointer"
  >
    {icon}
    <Text mt={2} fontWeight={400}>
      {children}
    </Text>
  </Box>
);

const ChatArea = () => {
  const [input, setInput] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [activeChat, setActiveChat] = useState(false);

  const group1 = [
    {
      onClick: () => setInput("is $MFST a good buy right now?"),
      icon: <ChartSplineIcon size={32} />,
      text: (
        <>
          Is{" "}
          <Text
            as="span"
            color="green.600"
            fontWeight={600}
            textDecor="underline"
          >
            $MFST
          </Text>{" "}
          a good buy right now?
        </>
      ),
    },
    {
      onClick: () => setInput("What are the Top 3 trending stocks right now?"),
      icon: <Crown size={32} />,
      text: "What are the Top 3 trending stocks right now?",
    },
    {
      onClick: () =>
        setInput("I recently bought GOLD, any news should i be aware of?"),
      icon: <Newspaper size={32} />,
      text: "I recently bought GOLD, any news should i be aware of?",
    },
    {
      onClick: () =>
        setInput("Summarize the financials for $APPL in the last quarter."),
      icon: <FileChartColumn size={32} />,
      text: (
        <>
          Summarize the financials for{" "}
          <Text as="span" color="white" fontWeight={600} textDecor="underline">
            $APPL
          </Text>{" "}
          in the last quarter.
        </>
      ),
    },
    {
      onClick: () => setInput("What is a good entry point for $NVDA"),
      icon: <Crosshair size={32} />,
      text: (
        <>
          What is a good entry point for{" "}
          <Text
            as="span"
            color="green.600"
            fontWeight={600}
            textDecor="underline"
          >
            $NVDA
          </Text>
        </>
      ),
    },
    {
      onClick: () =>
        setInput("What's a good broker to use for trading stocks in the US?"),
      icon: <Globe size={32} />,
      text: "What's a good broker to use for trading stocks in the US?",
    },
  ];

  const group2 = [
    {
      onClick: () => setInput("is $MFST a good buy right now?"),
      icon: <ChartSplineIcon size={32} />,
      text: (
        <>
          Is{" "}
          <Text
            as="span"
            color="green.600"
            fontWeight={600}
            textDecor="underline"
          >
            $MFST
          </Text>{" "}
          a good buy right now?
        </>
      ),
    },
    {
      onClick: () => setInput("What are the Top 3 trending stocks right now?"),
      icon: <Crown size={32} />,
      text: "What are the Top 3 trending stocks right now?",
    },
  ];

  return (
    <>
      <Box display={confirmed || activeChat ? "none" : "block"}>
        <Box
          transition="all 0.3s ease-in-out"
          className={`animate__animated ${confirmed || activeChat ? "animate__fadeOut" : "animate__fadeIn"}`}
        >
          <Stack
            px={["4%", "4%", "6%", "6%", "10%"]}
            justify="center"
            align="center"
            flexDir={["column", "row", "row"]} // Stack vertically on mobile
            w="100%"
            h="auto" // Let height grow naturally
            gap={["10px", "15px", "15px"]}
            className="animate__animated animate__fadeIn"
            flexWrap="wrap"
          >
            {group1.map((item, index) => (
              <ClickableBox key={index} onClick={item.onClick} icon={item.icon}>
                {item.text}
              </ClickableBox>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ChatArea;
