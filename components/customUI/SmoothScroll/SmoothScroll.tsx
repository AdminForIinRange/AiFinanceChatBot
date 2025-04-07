"use client";
import { ReactLenis } from "lenis/react";
import HouseHeroParallax from "@/components/customUI/Parallax/HouseHeroParallax";
import AboutHeader from "@/components/AboutUs/AboutHeader";
import LeftImgBox from "@/components/AboutUs/sections/LeftImgBox";
import {
  Smile,
  Merge,
  List,
  TrendingUp,
  Eye,
  Binoculars,
  MapPinHouse,
  SearchCheck,
} from "lucide-react";
import { Box, HStack, Text } from "@chakra-ui/react";
export default function SmoothScroll(): JSX.Element {
  return (
    <ReactLenis root>
      <main>
        <article>
          <Box
            bg="gray.100"
            color="black"
            display="grid"
            placeContent="center"
            h="100vh"
            position="sticky"
            top="0"
            borderTopRadius="2xl"
            overflow="hidden"
          >
            {" "}
                  <HStack
                    zIndex={3}
                    px={["4%", "4%", "6%", "6%", "6%", "10%"]}
                    justify={"center"} // !!
                    align={"center"}
                    w={"100%"}
                    h={"100%"}
                  
                  >
                    <HStack
                      justify={[
                        "space-between",
                        "space-between",
                        "space-between",
                        "space-between",
                        "space-between",
                        "space-between",
                      ]}
                      align={["center", "center", "start", "start", "start", "start"]}
                      w={"100%"}
                      h={"100%"}
                      gap={["5px", "5px", "5px", "5px", "5px", "5px"]}
                      wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                    >
                      <Box w={["100%", "100%", "100%", "60%", "50%", "50%"]}>
                        <Text
                          w={["100%", "100%", "100%", "100%", "100%", "100%"]}
                          mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
                          fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
                          fontWeight={700}
                          fontFamily={"Raleway"}
                          bgClip="text"
                          textAlign={["center", "center", "center", "left", "left", "left"]}
                          color={"black"}
                          bgGradient="linear(to-r, teal, blue)"
                        >
                          Maximize Your Rental Income
                        </Text>
                        <Text
                          fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                          mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
                          textAlign={["center", "center", "center", "left", "left", "left"]}
                          fontFamily={"Raleway"}
                          color={"black"}
                          w={["100%", "100%", "100%", "100%", "100%", "100%"]}
                          fontWeight={300}
                        >
                          Optimize your income and ease your mind with our experienced
                          Airbnb Management team. Learn More
                        </Text>
                        <HStack
                          justify={[
                            "center",
                            "center",
                            "center",
                            "start",
                            "start",
                            "start",
                          ]}
                          align={"start"}
                          w={"100%"}
                          transition={"all 0.2s ease-in-out"}
                          zIndex={3}
                        >
                          <Box
                            mt={"50px"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={["center"]}
                            gap={"15px"}
                            fontFamily={"raleway"}
                            transition={"all 0.2s ease-in-out"}
                            cursor={"pointer"}
                            _hover={{
                              transition: "all 0.2s ease-in-out",
                              scale: 1.1,
                              fontWeight: "700",
                              px: "80px",
                              bg: "black",
                            }}
                            p={4}
                            bg={"black"}
                            color={"white"}
                            rounded={"30px"}
                            px={"12"}
                            fontWeight={"500"}
                            onClick={() => setIsDialogOpen(true)}
                          >
                            Schedule a consultation
                            {/* <Icon as={ArrowRight}> </Icon> */}
                          </Box>
                        </HStack>
                      </Box>
            
                      <Box
                        display="block"
                        position="relative"
                        h={["500px", "500px", "500px", "500px", "500px", "600px"]}
                        w={["100%", "100%", "100%", "650px", "650px", "650px"]}
                        backdropFilter="blur(1.5px)"
                        borderRadius="30px"
                        bgPos="center"
                        bgSize="cover"
                        // Change this to any background you want
                        // Change this to any background you want
                        overflow="hidden"
                      >
                        {/* Horizontal line for crosshair */}
                        <Box
                          display="block"
                          position="relative"
                          h={["500px", "500px", "500px", "500px", "500px", "500px"]}
                          w={["100%", "100%", "100%", "550px", "550px", "550px"]}
                          backdropFilter="blur(1.5px)"
                          borderRadius="30px"
                          bgPos="center"
                          bgSize="cover"
                          bg="gray.200" // Change this to any background you want
                          overflow="hidden"
                          ml={["0px", "0px", "0px", "100px", "100px", "100px"]}
                        ></Box>
                        {/* Bottom-right label */}
                        <Box
                          zIndex={1}
                          position="absolute"
                          bottom={["20px", "20px", "20px", "80px", "10px", "80px"]}
                          right={["20px", "20px", "20px", "190px", "280px", "300px"]}
                          bg="white"
                          borderRadius="md"
                          p={[
                            "10px 10px",
                            "10px 10px",
                            "10px 10px",
                            "10px 10px",
                            "10px 10px",
                            "10px 10px",
                          ]}
                          boxShadow="md"
                          fontWeight="semibold"
                          textAlign={"left"}
                        >
                          <HStack>
                            <Text
                              fontSize={["30px", "30px", "35px", "35px", "35px", "40px"]}
                              fontWeight={"700"}
                              color={"black"}
                            >
                              40%
                            </Text>
                            <Text
                              fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
                            >
                              {" "}
                              Average Revenue Increase
                            </Text>
                          </HStack>
                        </Box>
                      </Box>
                    </HStack>
                  </HStack>
          </Box>

          <Box
            bg="gray.200"
            color="black"
            display="grid"
            placeContent="center"
            h="100vh"
            position="sticky"
            top="0"
            borderTopRadius="2xl"
            overflow="hidden"
          ></Box>
          <Box
            bg="gray.300"
            color="black"
            display="grid"
            placeContent="center"
            h="100vh"
            position="sticky"
            top="0"
            borderTopRadius="2xl"
            overflow="hidden"
          ></Box>
        </article>
      </main>
    </ReactLenis>
  );
}
