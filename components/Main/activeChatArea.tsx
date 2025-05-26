"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Box, Text, HStack, VStack } from "@chakra-ui/react"
import { Send, BarChart2, Clock } from "lucide-react"
import ChatArea from "./chatArea"
import ReactMarkdown from "react-markdown"
import LowerNavigationBoxes from "./lowerNavigationBoxes"

// Refined darker finance platform theme
const theme = {
  bg: {
    primary: "#0E1116", // Darker background
    secondary: "#161B22", // Slightly lighter for contrast
    tertiary: "#1F2937", // For input fields and interactive elements
    accent: "#242F3E", // For hover states
  },
  text: {
    primary: "#E5E7EB", // Main text
    secondary: "#9CA3AF", // Secondary text
    muted: "#6B7280", // Muted text
  },
  accent: {
    green: "#10B981", // Success/positive (more muted)
    red: "#EF4444", // Error/negative (more muted)
    neutral: "#6B7280", // Neutral accent
  },
  border: {
    light: "#30363D", // Subtle borders
    medium: "#3E4C5A", // Medium emphasis borders
  },
}

const LoadingIndicator = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 4))
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <Box my={2}>
      <Box w="100%" h="2px" bg={theme.bg.accent} borderRadius="full" overflow="hidden">
        <Box h="100%" w={`${progress}%`} bg={theme.accent.neutral} transition="width 0.2s ease" />
      </Box>
    </Box>
  )
}

const MessageTimestamp = ({ date }: { date: Date }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <HStack spacing={1} opacity={0.7}>
      <Clock size={10} />
      <Text fontSize="xs" color={theme.text.muted}>
        {formatTime(date)}
      </Text>
    </HStack>
  )
}

const ActiveChatArea = () => {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<
    {
      from: string
      text: string
      loading?: boolean
      timestamp: Date
      sentiment?: "neutral" | "positive" | "negative"
    }[]
  >([])
  const [isAiPrompting, setIsAiPrompting] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [showWelcome, setShowWelcome] = useState(true)

  // Sample welcome message
  useEffect(() => {
    if (isAiPrompting && messages.length === 0) {
      setMessages([
        {
          from: "VelvoTrade",
          text: "Welcome to VelvoTrade AI Assistant. I can help you with market analysis, finance strategies, and investment insights. What would you like to know today?",
          timestamp: new Date(),
          sentiment: "neutral",
        },
      ])
    }
  }, [isAiPrompting, messages.length])

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input on load
  useEffect(() => {
    if (isAiPrompting) {
      inputRef.current?.focus()
    }
  }, [isAiPrompting])

  const sendPrompt = async (currentInput: string) => {
    // Determine sentiment based on keywords (simplified example)
    const sentiment = currentInput.match(/buy|profit|gain|up|bull/i)
      ? "positive"
      : currentInput.match(/sell|loss|down|bear|crash/i)
        ? "negative"
        : "neutral"

    setMessages((prev) => [
      ...prev,
      { from: "User", text: currentInput, timestamp: new Date(), sentiment },
      { from: "VelvoTrade", text: "thinking", loading: true, timestamp: new Date(), sentiment: "neutral" },
    ])
    setIsAiPrompting(true)
    setShowWelcome(false)

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: currentInput }),
      })
      const data = await response.json()

      // Determine AI response sentiment (simplified)
      const responseSentiment = data.response?.match(/increase|profit|gain|up|bull|positive/i)
        ? "positive"
        : data.response?.match(/decrease|loss|down|bear|negative|crash/i)
          ? "negative"
          : "neutral"

      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === prev.length - 1
            ? {
                from: "VelvoTrade",
                text: data.response || data.result,
                timestamp: new Date(),
                sentiment: responseSentiment,
              }
            : msg,
        ),
      )
    } catch (error) {
      console.error("Error:", error)
      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === prev.length - 1
            ? {
                from: "VelvoTrade",
                text: "Error fetching response. Please try again.",
                timestamp: new Date(),
                sentiment: "negative",
              }
            : msg,
        ),
      )
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim().length > 0) {
      sendPrompt(input)
      setInput("") // Clear input after sending
    }
  }

  return (
    <Box bg={theme.bg.primary} minH="100vh" color={theme.text.primary} position="relative" overflow="hidden">
      {/* Minimalist Header */}
      <Box
        position="sticky"
        top={0}
        zIndex={10}
        bg={theme.bg.primary}
        borderBottom={`1px solid ${theme.border.light}`}
        px={4}
        py={3}
      >
        <HStack justify="space-between" maxW="1400px" mx="auto">
          <HStack spacing={3}>
            <Text fontWeight="medium" fontSize="sm">
              VelvoTrade AI
            </Text>
          </HStack>
         
        </HStack>
      </Box>

      {/* Main Content Area */}
      <Box
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        pt={4}
        pb="120px" // Space for the input area
      >
        <Box display={isAiPrompting ? "none" : "block"}>
          <ChatArea />
        </Box>

        {isAiPrompting && (
          <VStack
            w="100%"
            spacing={5}
            align="stretch"
            maxW="1400px"
            mx="auto"
            h="calc(100vh - 180px)"
            overflowY="auto"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                background: theme.border.light,
                borderRadius: "2px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: theme.border.medium,
              },
            }}
            px={2}
            pt={4}
          >
            {/* Welcome card - simplified */}
            {showWelcome && (
              <Box bg={theme.bg.secondary} borderRadius="md" p={8} mb={6} maxW="900px" mx="auto">
                <Text fontSize="sm" fontWeight="medium" mb={3}>
                  Ask me about market trends, finance strategies, or specific assets.
                </Text>

                <VStack align="stretch" spacing={2}>
                  {[
                    "What's your analysis on Bitcoin's current trend?",
                    "Explain the RSI indicator and how to use it",
                    "What finance strategy would you recommend for volatile markets?",
                  ].map((suggestion, i) => (
                    <Box
                      key={i}
                      as="button"
                      onClick={() => {
                        setInput(suggestion)
                        sendPrompt(suggestion)
                      }}
                      bg={theme.bg.tertiary}
                      p={2.5}
                      borderRadius="sm"
                      textAlign="left"
                      _hover={{ bg: theme.bg.accent }}
                      transition="all 0.2s"
                      fontSize="sm"
                    >
                      <Text>{suggestion}</Text>
                    </Box>
                  ))}
                </VStack>
              </Box>
            )}

            {messages.map((msg, idx) => {
              const isUser = msg.from === "User"
              const sentimentColor =
                msg.sentiment === "positive"
                  ? theme.accent.green
                  : msg.sentiment === "negative"
                    ? theme.accent.red
                    : theme.accent.neutral

              return (
                <Box
                  key={idx}
                  alignSelf={isUser ? "flex-end" : "flex-start"}
                  maxW={["95%", "90%", "85%", "75%"]}
                  opacity={0}
                  animation="fadeIn 0.3s forwards"
                  sx={{
                    "@keyframes fadeIn": {
                      "0%": { opacity: 0, transform: "translateY(10px)" },
                      "100%": { opacity: 1, transform: "translateY(0)" },
                    },
                    animationDelay: `${idx * 0.1}s`,
                  }}
                  mb={4}
                >
                  <HStack spacing={2} justify={isUser ? "flex-end" : "flex-start"} mb={1}>
                    <Text fontSize="xs" color={theme.text.secondary}>
                      {msg.from} 
                    </Text>
                    <MessageTimestamp date={msg.timestamp} />
                  </HStack>

                  <Box
                    bg={isUser ? theme.bg.tertiary : theme.bg.secondary}
                    p={3.5}
                    borderRadius="sm"
                    position="relative"
                  >
                    {msg.loading ? (
                      <Box>
                        <Text fontSize="sm" color={theme.text.secondary} mb={1}>
                          Processing request
                        </Text>
                        <LoadingIndicator />
                      </Box>
                    ) : (
                      <Box
                        className="message-content"
                        fontSize="sm"
                        lineHeight="1.6"
                        css={{
                          "& p": {
                            margin: "0.5em 0",
                          },
                          "& code": {
                            backgroundColor: theme.bg.primary,
                            padding: "0.2em 0.4em",
                            borderRadius: "2px",
                            fontSize: "0.9em",
                            fontFamily: "monospace",
                          },
                          "& pre": {
                            backgroundColor: theme.bg.primary,
                            padding: "1em",
                            borderRadius: "2px",
                            overflowX: "auto",
                            margin: "0.5em 0",
                            border: `1px solid ${theme.border.light}`,
                          },
                          "& a": {
                            color: theme.text.primary,
                            textDecoration: "underline",
                          },
                          "& ul, & ol": {
                            paddingLeft: "1.5em",
                            margin: "0.5em 0",
                          },
                          "& strong": {
                            color: sentimentColor,
                          },
                          "& h1, & h2, & h3, & h4": {
                            borderBottom: `1px solid ${theme.border.light}`,
                            paddingBottom: "0.3em",
                            marginTop: "1em",
                            fontSize: "1em",
                            fontWeight: "600",
                          },
                          "& table": {
                            borderCollapse: "collapse",
                            width: "100%",
                            margin: "1em 0",
                            fontSize: "0.9em",
                          },
                          "& th, & td": {
                            border: `1px solid ${theme.border.light}`,
                            padding: "0.5em",
                          },
                          "& th": {
                            backgroundColor: theme.bg.tertiary,
                          },
                        }}
                      >
                        {msg.from === "VelvoTrade" ? (
                          <ReactMarkdown>{msg.text}</ReactMarkdown>
                        ) : (
                          <Text>{msg.text}</Text>
                        )}
                      </Box>
                    )}
                  </Box>
                </Box>
              )
            })}
            <Box ref={messagesEndRef} />
          </VStack>
        )}
      </Box>

      {/* Minimalist input area */}
      <Box
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        bg={`linear-gradient(to top, ${theme.bg.primary} 85%, transparent)`}
        py={5}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        zIndex={1000}
      >
        <VStack maxW="1400px" mx="auto" spacing={2}>
          <HStack w="100%" spacing={2} bg={theme.bg.secondary} p={3} borderRadius="sm">
            <Box
              as="input"
              ref={inputRef}
              autoFocus
              type="text"
              placeholder="Ask about market analysis or finance strategies..."
              w="100%"
              height="58px"
              value={input}
              bg={theme.bg.tertiary}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              border="none"
              _focus={{
                outline: "none",
              }}
              color={theme.text.primary}
              borderRadius="sm"
              fontSize="sm"
              px={3}
            />
            <Box
              onClick={() => {
                if (input.trim().length > 0) {
                  sendPrompt(input)
                  setInput("")
                }
              }}
              as="button"
              display="flex"
              justifyContent="center"
              alignItems="center"
              minWidth="42px"
              height="58px"
              bg={input.trim().length > 0 ? theme.bg.accent : theme.bg.tertiary}
              borderRadius="sm"
              _hover={{
                bg: theme.bg.accent,
              }}
              transition="all 0.2s ease"
              cursor={input.trim().length > 0 ? "pointer" : "not-allowed"}
              aria-label="Send message"
            >
              <Send size={16} color={theme.text.primary} />
            </Box>
          </HStack>

          <Text color={theme.text.muted} fontSize="xs" textAlign="center">
         VelvoTrade AI is a platform for understadning the market. It should not be used for any serious or business-critical purposes.
          </Text>
        </VStack>
      </Box>

      {/* <LowerNavigationBoxes /> */}
    </Box>
  )
}

export default ActiveChatArea
