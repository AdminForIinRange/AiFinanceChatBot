import React from "react";
import {
  Box,
  Stack,
  Text,
  Flex,
  Group,
  HStack,
  Accordion,
  Span,
} from "@chakra-ui/react";
import LuxeLogo from "@/public/png/LuxeLogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <HStack my={{ base: "20px", md: "50px" }} justify="center" align="center" w="100%">
        <Box w="90%" borderTop="1px solid #e0e0e0" />
      </HStack>

      <Box  bg="white" _dark={{ bg: "gray.900" }} w="100%"  px={["4%", "4%", "6%", "6%", "6%", "10%"]} py={{ base: "20px", md: "40px" }}>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" gap={{ base: 6, md: 12 }}>

          {/* Logo and Brand */}
          <Box mb={{ base: "20px", md: "0" }}>
            <HStack spacing="12px">
              <Box w={{ base: "40px", md: "70px" }} h="auto">
                <Image src={LuxeLogo} alt="logo" />
              </Box>
              <Text fontSize={{ base: "12px", md: "16px" }} fontWeight="700" fontFamily="raleway">
                Luxe Management
              </Text>
            </HStack>
          </Box>

          {/* Links */}
          <Flex direction={{ base: "column", md: "row" }} gap={{ base: 6, md: 12 }}>
            {/* Resources */}
            <Box>
              <Text fontSize={{ base: "10px", md: "14px" }} fontWeight="600" textTransform="uppercase" mb="8px">
                Resources
              </Text>
              <Stack spacing="6px">
                <Box>
                  <Text fontSize={{ base: "10px", md: "13px" }} color="gray.600" _dark={{ color: "gray.400" }}>
                    Luxe Managements
                  </Text>
                </Box>
             
              </Stack>
            </Box>

            {/* Follow Us */}
            <Box>
              <Text fontSize={{ base: "10px", md: "14px" }} fontWeight="600" textTransform="uppercase" mb="8px">
                Follow Us
              </Text>
              <Stack spacing="6px">
                <Box>
                  <Text as="a" href="https://www.instagram.com/luxemanagements/" fontSize={{ base: "10px", md: "13px" }} color="gray.600" _dark={{ color: "gray.400" }}>
                    Instagram
                  </Text>
                </Box>
              </Stack>
            </Box>

            {/* Legal */}
            <Box>
              <Text fontSize={{ base: "10px", md: "14px" }} fontWeight="600" textTransform="uppercase" mb="8px">
                Legal
              </Text>
              <Stack spacing="6px">
                <Box>
                  <Text as="a" href="#" fontSize={{ base: "10px", md: "13px" }} color="gray.600" _dark={{ color: "gray.400" }}>
                    Privacy Policy
                  </Text>
                </Box>
                <Box>
                  <Text as="a" href="#" fontSize={{ base: "10px", md: "13px" }} color="gray.600" _dark={{ color: "gray.400" }}>
                    Terms & Conditions
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Flex>
        </Flex>

        <Box mt={{ base: "20px", md: "40px" }} borderTop="1px solid #e0e0e0" pt={{ base: "12px", md: "20px" }}>
          <Flex justify={{ base: "center", md: "space-between" }} align="center">
            <Text fontSize={{ base: "10px", md: "12px" }} color="gray.500" _dark={{ color: "gray.400" }}>
              © 2023 <Text as="span" textDecor="underline">Luxe Managements™</Text>. All Rights Reserved.
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
