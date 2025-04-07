"use client";

import React, { useState, useRef } from "react";
import {
  Box,
  Stack,
  Text,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import luxeLogo from "../../public/png/LuxeLogo.png";

const Navbar = () => {
  const router = useRouter();

  // Track which dropdown is open
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<any>(null);

  const handleEnter = (name: string) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  // Reusable Dropdown
  const Dropdown = ({ items }: { items: { label: string; link: string }[] }) => (
    <Box
      borderRadius="4px"
      position="absolute"
      top="100%"
      left="50%"
      transform="translateX(-50%)"
      bg="white"
      border="1px solid #e0e0e0"
      mt="2"
      w="150px"
      zIndex={10}
      opacity={activeDropdown ? 1 : 0}
      h={activeDropdown ? "auto" : "0px"}
      overflow="hidden"
      transition="all 0.3s ease-in-out"
      pointerEvents={activeDropdown ? "auto" : "none"}
      onMouseEnter={() => clearTimeout(timeoutRef.current)}
      onMouseLeave={handleLeave}
    >
      <Stack>
        {items.map((item, index) => (
          <Box
            key={index}
            p="2"
            cursor="pointer"
            _hover={{ bg: "#f0f0f0" }}
            fontSize="14px"
            onClick={() => router.push(item.link)}
          >
            <Text>{item.label}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );

  return (
    <Box w="100%" p={4} fontFamily="raleway">
      <HStack borderBottom="1px solid #e0e0e0" pb={4}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          w="100%"
          justify="center"
          align="center"
          gap={{ base: "25px", lg: "200px", xl: "500px" }}
        >
          {/* Logo */}
          <Stack
            justify="center"
            align="center"
            direction={{ base: "column", md: "row" }}
            cursor="pointer"
            onClick={() => router.push("/")}
            gap="0px"
          >
            <Box w="70px" h="100%" onClick={() => router.push("/")}>
              <Image src={luxeLogo} alt="logo" />
            </Box>
            <Text fontSize="20px" fontWeight="700">
              Luxe Management
            </Text>
          </Stack>

          {/* Nav Items */}
          <HStack fontSize="16px" gap={["16px", "16px", "16px", "36px", "36px"]} fontWeight="500">
            {/* About */}
            <Box
              position="relative"
              onMouseEnter={() => handleEnter("about")}
              onMouseLeave={handleLeave}
            >
              <Box  fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
                cursor="pointer"
                _hover={{ scale: 1.1, fontWeight: "700" }}
                transition="all 0.2s ease-in-out"
                onClick={() => router.push("/about")}
              >
                About
              </Box>
              {activeDropdown === "about" && (
                <Dropdown
                  items={[
                    { label: "Our Story", link: "/about#story" },
                    { label: "Team", link: "/about#team" },
                  ]}
                />
              )}
            </Box>


            <Box
              position="relative"
           
            >
              <Box  fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
                cursor="pointer"
                _hover={{ scale: 1.1, fontWeight: "700" }}
                transition="all 0.2s ease-in-out"
                onClick={() => router.push("/news")}
              >
                News
              </Box>
             
            </Box>



            {/* Services */}
            <Box
              position="relative"
              onMouseEnter={() => handleEnter("services")}
              onMouseLeave={handleLeave}
            >
              <Box fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
                cursor="pointer"
                _hover={{ scale: 1.1, fontWeight: "700" }}
                transition="all 0.2s ease-in-out"
                onClick={() => router.push("/services")}
              >
                Services
              </Box>
              {activeDropdown === "services" && (
                <Dropdown
                  items={[
                    { label: "Cleaning", link: "/services/cleaning" },
                    { label: "Managements", link: "/services/managements" },
                    { label: "Consulting", link: "/services/consulting" },
                  ]}
                />
              )}
            </Box>
            

            {/* Pricing */}
            <Box
              position="relative"
              onMouseEnter={() => handleEnter("pricing")}
              onMouseLeave={handleLeave}
            >
              <Box fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
                cursor="pointer"
                _hover={{ scale: 1.1, fontWeight: "700" }}
                transition="all 0.2s ease-in-out"
                onClick={() => router.push("/pricing")}
              >
                Pricing
              </Box>
              {activeDropdown === "pricing" && (
                <Dropdown
                  items={[
                    { label: "Basic", link: "/pricing#basic" },
                    { label: "Premium", link: "/pricing#premium" },
                  ]}
                />
              )}
            </Box>

            {/* Gallery */}
            <Box
              position="relative"
              onMouseEnter={() => handleEnter("gallery")}
              onMouseLeave={handleLeave}
            >
              <Box fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
                cursor="pointer"
                _hover={{ scale: 1.1, fontWeight: "700" }}
                transition="all 0.2s ease-in-out"
                onClick={() => router.push("/gallery")}
              >
                Gallery
              </Box>
              {activeDropdown === "gallery" && (
                <Dropdown
                  items={[
                    { label: "Photos", link: "/gallery#photos" },
                    { label: "Videos", link: "/gallery#videos" },
                  ]}
                />
              )}
            </Box>

            {/* Contact */}
            <Box
              position="relative"
              onMouseEnter={() => handleEnter("contact")}
              onMouseLeave={handleLeave}
            >
              <Box fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
                cursor="pointer"
                _hover={{ scale: 1.1, fontWeight: "700" }}
                transition="all 0.2s ease-in-out"
                onClick={() => router.push("/contact")}
              >
                Contact
              </Box>
              {activeDropdown === "contact" && (
                <Dropdown
                  items={[
                    { label: "Support", link: "/contact#support" },
                    { label: "Request a Quote", link: "/contact#quote" },
                  ]}
                />
              )}
            </Box>
          </HStack>
        </Flex>
      </HStack>
    </Box>
  );
};

export default Navbar;
