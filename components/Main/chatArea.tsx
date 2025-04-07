"use client";
import React, { useState } from "react";
import { Box, Text, Input, Stack, HStack } from "@chakra-ui/react";
import {
  ChartSplineIcon,
  Crown,
  Newspaper,
  FileChartColumn,
  Crosshair,
  Globe,
  CornerDownLeft,
} from "lucide-react";

const ClickableBox = ({ onClick, icon, children }) => (
  <Box
    onClick={onClick}
    shadow="md"
    display="flex"
    flexDir="column"
    fontFamily="poppins"
    fontSize="16px"
    color="gray.400"
    textAlign="start"
    w="300px"
    h="100%"
    mt={8}
    bg="#303030"
    p="18px"
    rounded="lg"
    border="1px solid #7A7A7A"
    _hover={{ bg: "#404040", scale: 1.02 }}
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

  const group1 = [
    {
      onClick: () => setInput("is $MFST a good buy right now?"),
      icon: <ChartSplineIcon size={32} />,
      text: (
        <>
          Is{" "}
          <Text as="span" color="green.600" fontWeight={600} textDecor="underline">
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
  ];

  const group2 = [
    {
      onClick: () =>
        setInput("Summarize the financials for $APPL in the last quarter."),
      icon: <FileChartColumn size={32} />,
      text: (
        <>
          Summarize the financials for{" "}
          <Text as="span" color="white.600" fontWeight={600} textDecor="underline">
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
          <Text as="span" color="green.600" fontWeight={600} textDecor="underline">
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

  return (
    <>
      <Stack
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify="center"
        align="center"
        flexDir="row"
        w="100%"
        h="120px"
        mb={8}
        gap={8}
        className="animate__animated animate__fadeIn"
        flexWrap="wrap"
      >
        {group1.map((item, index) => (
          <ClickableBox key={index} onClick={item.onClick} icon={item.icon}>
            {item.text}
          </ClickableBox>
        ))}
      </Stack>

      <Stack
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify="center"
        align="center"
        flexDir="row"
        w="100%"
        h="100%"
        mb={8}
        gap={8}
        className="animate__animated animate__fadeIn"
        flexWrap="wrap"
      >
        {group2.map((item, index) => (
          <ClickableBox key={index} onClick={item.onClick} icon={item.icon}>
            {item.text}
          </ClickableBox>
        ))}
      </Stack>

      <HStack
        w="100%"
        display="flex"
        flexDirection="row"
        justify="center"
        align="center"
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        rounded="lg"
        p={0}
        mb={8}
        className="animate__animated animate__fadeIn"
      >
        <Input
          variant="outline"
          textIndent="8"
          autoFocus
          type="text"
          placeholder="All you gotta do is ask..."
          width="800px"
          height="60px"
          value={input}
          bg="#303030"
          onChange={(e) => setInput(e.target.value)}
          border="1px solid #7A7A7A"
          _focus={{
            border: "1px solid #7A7A7A",
            boxShadow: "none",
            outline: "none",
          }}
          color="white"
          rounded="30px"
          fontSize="16px"
        />

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="60px"
          height="60px"
          bg="#303030"
          borderRadius="30px"
          border="1px solid #7A7A7A"
          _hover={{ color: "white", rotate: "45deg" }}
          transition="all 0.3s ease-in-out"
          cursor="pointer"
          color={"#7A7A7A"}
        >
          <CornerDownLeft  size={24} />
        </Box>
      </HStack>
    </>
  );
};

export default ChatArea;
