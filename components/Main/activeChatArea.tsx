import React, { useState, useEffect } from "react";
import { Box, Text, Input, HStack, VStack } from "@chakra-ui/react";
import { CornerDownLeft } from "lucide-react";
import ChatArea from "./chatArea";
import ReactMarkdown from "react-markdown";
import LowerNavigationBoxes from "./lowerNavigationBoxes";

const LoadingDots = () => {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return <>{dots}</>;
};

const ActiveChatArea = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ from: string; text: string; loading?: boolean }[]>([]);
  const [isAiPrompting, setIsAiPrompting] = useState(false);

  const sendPrompt = async (currentInput: string) => {
    setMessages((prev) => [
      ...prev,
      { from: "User", text: currentInput },
      { from: "VelvoTrade", text: "thinking", loading: true },
    ]);
    setIsAiPrompting(true);
    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: currentInput }),
      });
      const data = await response.json();

      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === prev.length - 1
            ? { from: "VelvoTrade", text: data.response || data.result }
            : msg
        )
      );
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === prev.length - 1
            ? { from: "VelvoTrade", text: "Error fetching response." }
            : msg
        )
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim().length > 0) {
      sendPrompt(input);
      setInput(""); // Clear input after sending
    }
  };

  return (
    <>
      <Box px={["4%", "4%", "6%", "6%", "6%", "10%"]}>
        <Box display={["block", "block", "block", "block", "block", "block"]}>
          <Box display={isAiPrompting ? "none" : "block"}>
            <ChatArea />
          </Box>
        </Box>

        <VStack
          w={"100%"}
          pb={"190px"}
          display={isAiPrompting ? "block" : "none"}
        >
          {messages.map((msg, idx) => {
            const alignment = msg.from === "User" ? "end" : "start";
            return (
              <VStack
                key={idx}
                w="100%"
                gap={"15px"}
                align={alignment}
                pb={"20px"}
              >
                <HStack w="100%" justify={alignment} align="center">
                  <Text color="gray.200" fontWeight={600}>
                    {msg.from}
                  </Text>
                </HStack>
                <HStack w="100%" justify={alignment} align="center">
                  <Box
                    shadow="md"
                    rounded="xl"
                    p={2}
                    px={4}
                    bg="#303030"
                    fontFamily="poppins"
                    fontWeight={400}
                    fontSize="18px"
                    color="gray.200"
                    w="fit-content"
                  >
                    {msg.from === "VelvoTrade" ? (
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    ) : (
                      <>{msg.text}</>
                    )}
                    {msg.loading && <LoadingDots />}
                  </Box>
                </HStack>
              </VStack>
            );
          })}
        </VStack>

        <VStack
          transition={"all 0.2s ease-in-out"}
          rounded={"15px"}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
          position={isAiPrompting ? "fixed" : "static"}
          mt={isAiPrompting ? "0" : "50PX"}
          bottom={0}
          left={0}
          right={0}
          zIndex={1000}
          justify="center"
          align="center"
          mb={8}
          w={"100%"}
        >
          <HStack w={"100%"} bg={"gray.700"} p={2} borderRadius={"30px"}>
            <Input
              variant="outline"
              textIndent="8"
              autoFocus
              type="text"
              placeholder="All you gotta do is ask..."
              w={"100%"}
              height="70px"
              value={input}
              bg="#303030"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown} // Add the event handler here
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
                if (input.trim().length > 0) {
                  sendPrompt(input);
                  setInput("");
                }
              }}
              as="button"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="60px"
              height="70px"
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
            mt="10px"
            color="gray.200"
            width={["90%", "90%", "90%", "40%", "40%", "40%"]}
            textAlign="center"
            fontSize="14px"
          >
            By using this AI, you acknowledge that it's not financial or
            investment advice and you're responsible for your own financial
            decisions.
          </Text>
        </VStack>
      </Box>

      <LowerNavigationBoxes />
    </>
  );
};

export default ActiveChatArea;
