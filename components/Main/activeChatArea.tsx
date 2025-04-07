"use client";
import React, { useState, useEffect } from "react";
import { Box, Text, Input, HStack, VStack } from "@chakra-ui/react";
import { CornerDownLeft } from "lucide-react";

interface ActiveChatAreaProps {
  userInput: string;
}

// A small component to animate dots
const LoadingDots: React.FC = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return <>{dots}</>;
};

const ActiveChatArea: React.FC<ActiveChatAreaProps> = ({ userInput }) => {
  const [input, setInput] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [activeChat, setActiveChat] = useState(false);

  return (
    <>
      <Box px={["4%", "4%", "6%", "6%", "6%", "10%"]}>
        <VStack
          className="animate__animated animate__fadeInUp"
          w={"100%"}
          justify={"end"}
          align={"end"}
          mt={["25px", "25px", "25px", "25px", "25px", "25px"]}
        >
          <Text as="span" color="gray.400" fontWeight={600}>
            You
          </Text>
          <Text
            shadow="md"
            rounded={"xl"}
            p={2}
            px={4}
            bg={"#303030"}
            fontFamily={"poppins"}
            fontWeight={500}
            fontSize={["18px", "18px", "18px", "18px", "18px", "18px"]}
            color={"gray.400"}
          >
            {userInput}
          </Text>
        </VStack>

        <VStack
          className="animate__animated animate__fadeInUp"
          w={"100%"}
          justify={"start"}
          align={"start"}
          mt={["25px", "25px", "25px", "25px", "25px", "25px"]}
        >
          <Text as="span" color="gray.400" fontWeight={600}>
            AgrAi
          </Text>
          <Text
            shadow="md"
            rounded={"xl"}
            p={2}
            px={4}
            bg={"#303030"}
            fontFamily={"poppins"}
            fontWeight={500}
            fontSize={["18px", "18px", "18px", "18px", "18px", "18px"]}
            color={"gray.400"}
          >
            thinking
            <LoadingDots />
          </Text>
        </VStack>

        <VStack
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
          w={"100%"}
          left={0}
          bottom={0}
          zIndex={1000}
          position={"fixed"}
          mt={["850px", "850px", "400px", "400px", "350px", "150px"]}
          display="flex"
          justify="center"
          align="center"
          rounded="lg"
          p={0}
          mb={8}
          className="animate__animated animate__fadeIn"
        >
          <HStack>
            <Input
              variant="outline"
              textIndent="8"
              autoFocus
              type="text"
              placeholder="All you gotta do is ask..."
              width={["250px", "350px", "600px", "600px", "800px", "800px"]}
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
              onClick={() => {
                if (input.length > 0) {
                  setConfirmed(true);
                  setActiveChat(true);
                }
              }}
              as="button"
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
              <CornerDownLeft size={24} />
            </Box>
          </HStack>
          <Text
            mt={"10px"}
            color={"gray.400"}
            w={["90%", "90%", "90%", "40%", "40%", "40%"]}
            textAlign={"center"}
            fontSize={["14px", "14px", "14px", "14px", "14px", "14px"]}
          >
            By using this AI, you acknowledge that it's not legally binding and
            that you're responsible for your actions. It's not a substitute for
            professional advice.
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default ActiveChatArea;
