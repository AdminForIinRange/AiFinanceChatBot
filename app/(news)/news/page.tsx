import React from "react";
import { Box, Stack, Text, Flex, HStack } from "@chakra-ui/react";

const News = () => {
  // Sample articles data
  const articles = [
    {
      title: "Luxury Redefined: Innovative Condo Projects",
      date: "April 5, 2025",
      excerpt:
        "Explore how cutting-edge architecture and modern amenities are raising the bar for condo living...",
      submissions: [
        { author: "John Doe", comment: "Incredible designs!" },
        { author: "Jane Smith", comment: "Looking forward to more updates." },
      ],
      imageUrl:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg", // Example placeholder
    },
    {
      title: "Market Insights: Investing in Commercial Real Estate",
      date: "April 1, 2025",
      excerpt:
        "Discover the latest trends in commercial properties, from office spaces to retail hubs...",
      submissions: [
        { author: "Alice Johnson", comment: "Very informative read." },
        { author: "Mark Taylor", comment: "I appreciate the data-driven approach." },
      ],
      imageUrl:
        "https://images.pexels.com/photos/313242/pexels-photo-313242.jpeg", // Example placeholder
    },
    {
      title: "Neighborhood Spotlight: Urban Renewal Projects",
      date: "March 25, 2025",
      excerpt:
        "Learn how revitalized neighborhoods are offering great opportunities for both families and investors...",
      submissions: [
        { author: "Chris Lee", comment: "Urban renewal is a game-changer!" },
        { author: "Patricia Kim", comment: "Fantastic community insights." },
      ],
      imageUrl:
        "https://images.pexels.com/photos/164212/pexels-photo-164212.jpeg", // Example placeholder
    },
  ];

  return (
    <Box w="100%" maxW="1200px" mx="auto" px={["20px", "40px"]} py="40px">
      {/* Hero Section */}
      <Flex
        direction={["column", "column", "row"]}
        align="center"
        justify="space-between"
        mb={["40px", "60px"]}
        gap={["20px", "40px"]}
      >
        {/* Text Section */}
        <Box flex="1">
          <Text
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="bold"
            mb="20px"
            lineHeight="1.2"
          >
            Unlocking Efficiency:
            <br />
            The Power of Modern Real Estate
          </Text>
          <Text fontSize={["md", "lg"]} color="gray.600" mb="20px">
            Discover how our innovative approach to property management and
            real estate investments can elevate your portfolio to new heights.
          </Text>
          {/* A simple CTA “button” style using Box (since we’re limited to these imports) */}
          <Box
            as="button"
            bg={"#0A0F29"}
            color="white"
            px="20px"
            py="10px"
            borderRadius="md"
            fontWeight="semibold"
            _hover={{ bg: "blue.900" }}
          >
            Get Started
          </Box>
        </Box>

        {/* Hero Image */}
        <Box flex="1">
          <Box
            as="img"
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" // Example placeholder
            alt="Hero Real Estate"
            borderRadius="md"
            w="100%"
            maxH="400px"
            objectFit="cover"
          />
        </Box>
      </Flex>

      {/* Recent Articles Section */}
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        mb="30px"
        textAlign="center"
      >
        Our Recent Articles
      </Text>

      {/* Articles Grid */}
      <Flex wrap="wrap" justify="space-between" gap="20px">
        {articles.map((article, index) => (
          <Box
            key={index}
            w={["100%", "48%", "31%"]} // Adjust column widths for responsiveness
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
          >
            {/* Article Image */}
            <Box
              as="img"
              src={article.imageUrl}
              alt={article.title}
              w="100%"
              h="200px"
              objectFit="cover"
            />

            {/* Article Content */}
            <Stack spacing="10px" p="20px">
              <Text fontSize="lg" fontWeight="semibold">
                {article.title}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {article.date}
              </Text>
              <Text fontSize="sm" color="gray.700">
                {article.excerpt}
              </Text>

              {/* Submissions (Comments) */}
              <Box mt="10px">
                <Text fontSize="sm" fontWeight="bold" mb="5px">
                  Submissions:
                </Text>
                <Stack spacing="5px">
                  {article.submissions.map((submission, sIndex) => (
                    <HStack key={sIndex} spacing="5px" align="start">
                      <Text fontWeight="bold" fontSize="sm">
                        {submission.author}:
                      </Text>
                      <Text fontSize="sm">{submission.comment}</Text>
                    </HStack>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default News;
