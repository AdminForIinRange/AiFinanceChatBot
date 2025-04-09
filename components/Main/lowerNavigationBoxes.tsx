"use client";

import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  VStack,
  Stack,
  Button,

} from "@chakra-ui/react";
import {
  ChartSplineIcon,
  FileChartColumn,
  Globe,
  Crosshair,
} from "lucide-react";

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
    w={["100%", "200px", "250px"]}
    h={["100px", "150px", "180px"]}
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

const LowerNavigationBoxes = () => {
  const [symbol, setSymbol] = useState("AAPL");
  const [stockData, setStockData] = useState(null);

  const [news, setNews] = useState<any[]>([]);

  
  const fetchStock = async () => {
    try {
      const res = await fetch(`/api/finnhub/full?symbol=${symbol}`);
      const data = await res.json();
  
      setStockData(data.stock);
      setNews(data.news.slice(0, 4));
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };
  
  
  const stockQueries = [
    {
      icon: <ChartSplineIcon size={32} />,
      onClick: () => {
        setSymbol("AAPL");
        fetchStock();
      },
      text: (
        <>
          <Text as="span" color="green.400" fontWeight={600}>
            $AAPL
          </Text>
        </>
      ),
    },
    {
      icon: <Crosshair size={32} />,
      onClick: () => {
        setSymbol("NVDA");
        fetchStock();
      },
      text: (
        <>
 
          <Text as="span" color="green.400" fontWeight={600}>
            $NVDA
          </Text>
        </>
      ),
    },
    {
      icon: <FileChartColumn size={32} />,
      onClick: () => {
        setSymbol("MSFT");
        fetchStock();
      },
      text: "$MSFT",
    },
    {
      icon: <Globe size={32} />,
      onClick: () => {
        setSymbol("TSLA");
        fetchStock();
      },
      text: "$TSLA",
    },
  ];

  return (
    <Box px={["4%", "6%", "10%"]} py={6}>
      <VStack align="start" >
        <Input
          placeholder="Enter symbol (e.g. TSLA)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          maxW="250px"
          bg="#2D2D2D"
          borderColor="#555"
          color="white"
        />
        <Button onClick={fetchStock} colorScheme="teal">
          Fetch Stock
        </Button>
      </VStack>

      <Stack
        direction={["column", "row", "row"]}
        
        mt={6}
        flexWrap="wrap"
        justify="flex-start"
      >
        {stockQueries.map((item, idx) => (
          <ClickableBox key={idx} onClick={item.onClick} icon={item.icon}>
            {item.text}
          </ClickableBox>
        ))}
      </Stack>

      {stockData && stockData.c && (
        <Box mt={6} color="gray.100">
          <Text fontSize="lg" fontWeight="bold">
            Real-Time Data for ${symbol}
          </Text>
          <Text>📈 Current Price: ${stockData.c}</Text>
          <Text>🔼 High: ${stockData.h}</Text>
          <Text>🔽 Low: ${stockData.l}</Text>
          <Text>📉 Previous Close: ${stockData.pc}</Text>
          <Text>🕒 Open: ${stockData.o}</Text>
        </Box>
      )}

{news.length > 0 && (
  <Box mt={10}>
    <Text fontSize="lg" fontWeight="bold" color="gray.100" mb={4}>
      Latest News on ${symbol}
    </Text>
    <Stack spacing={4}>
      {news.map((article, idx) => (
        <Box
          key={idx}
          p={4}
          bg="#2D2D2D"
          border="1px solid #555"
          rounded="md"
          shadow="md"
        >
          <Text fontWeight="bold" color="white">
            {article.headline}
          </Text>
          <Text fontSize="sm" color="gray.400">
            {new Date(article.datetime * 1000).toLocaleString()} — {article.source}
          </Text>
          <Text mt={2} color="gray.300">
            {article.summary}
          </Text>
          <Button
            as="a"
            href={article.url}
            target="_blank"
            mt={2}
            colorScheme="teal"
            size="sm"
          >
            Read More
          </Button>
        </Box>
      ))}
    </Stack>
  </Box>
)}

    </Box>
  );
};

export default LowerNavigationBoxes;
