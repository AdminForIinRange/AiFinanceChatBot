"use client";
import React, { useState } from "react";
import {
  Box,
  Stack,
  Flex,
  Group,
  HStack,
  Icon,
  Button,
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogFooter,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Camera,
  ChevronRight,
  Home,
  HomeIcon,
  House,
  Sofa,
  Sparkle,
  VenetianMask,
} from "lucide-react";
import { IconLeft } from "react-day-picker";
import { IconArrowRightFromArc } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";

const Services = () => {
  const serviceItems = [
    {
      img: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg",
      title: "Property Management",
      logo: <HomeIcon />,
      link: "services/property-management",
      subheading:
        "Comprehensive management service including all our offerings.",
    },
    {
      img: "https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg",
      title: "Cleaning & Linen",
      logo: <Sparkle />,
      link: "Explore service",
      subheading:
        "Ensure a pristine, hotel-quality experience for every guest.",
    },
    {
      img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg",
      title: "Furnishing & Styling",
      logo: <Sofa />,
      link: "Explore service",
      subheading:
        "Transform your space into a stunning, Instagram-worthy retreat.",
    },
    {
      img: "https://images.pexels.com/photos/30670960/pexels-photo-30670960.jpeg",
      title: "Photography",
      logo: <Camera />,
      link: "Explore service",
      subheading:
        "Capture your property's best features with professional photography.",
    },
  ];

  const router = useRouter();
  return (
    <>
      <VStack
        mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
        w={["100%", "100%", "100%", "100%", "100%", "100"]}
        textAlign={["center", "center", "center", "center", "center", "center"]}
        color={"black"}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
      >
        <Text
          fontSize={{
            base: "40px",
            sm: "40px",
            md: "40px",
            lg: "60px",
            xl: "60px",
          }}
          fontWeight={700}
          fontFamily={"Raleway"}
          bgClip="text"
          color={"black"}
          bgGradient="linear(to-r, teal, blue)"
        >
          Our Services
        </Text>
        <Text
          w={["90%", "90%", "90%", "50%", "50%", "50%"]}
          fontSize={["16px", "16px", "16px", "26px", "26px", "26px"]}
          // mt={["20px", "20px", "20px", "20px", "20px", "20px"]}

          fontFamily={"raleway"}
          color={"black"}
          fontWeight={300}
        >
          We offer a full suite of services to help you manage your property
          with ease.
        </Text>
      </VStack>

      <HStack
        mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
        w={"100%"}
        h={"100%"}
        justify={"center"}
        align={"center"}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        flexWrap={["wrap", "wrap", "wrap", "wrap", "wrap", "wrap"]}
        fontFamily={"raleway"}
        gap={"25px"}
      >
        {/* {uploadedFiles.length > 0 ? ( */}
        {serviceItems.map(({ img, title, logo, link, subheading }) => (
          <VStack key={title}>
            <Box
              backgroundImage={`linear-gradient(to top,rgb(39,44,66), transparent), url(${img})`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              transition={"all 0.3s"}
              w={["350px", "350px", "350px", "550px", "550px", "550px"]}
              h={"400px"}
              borderRadius={"16px"}
              _hover={{
                transform: "scale(1.01)",
              }}
              cursor={"pointer"}
              p={"30px"}
              display={"flex"}
              onClick={() => router.push(`/${link}`)}
            >
              <VStack
                color={"white"}
                mt={"20px"}
                w={"100%"}
                h={"100%"}
                display={"flex"}
                justifyContent={"end"}
                alignItems={"end"}
              >
                <VStack w={"100%"} h={"100%"} justify={"Start"} align={"Start"}>
                  <HStack w={"100%"} h={"100%"} justify={"start"} align={"end"}>
                    {logo}
                  </HStack>
                  <Text
                    color={"white"}
                    fontSize={["26px", "26px", "26px", "26px", "26px", "26px"]}
                    fontFamily={"Raleway"}
                    fontWeight={700}
                  >
                    {title}
                  </Text>
                </VStack>
              </VStack>
            </Box>
            <Box
              fontSize={["12px", "16px", "14px", "14px", "16px", "16px"]}
              w={["350px", "350px", "350px", "550px", "550px", "550px"]}
            >
              <Text mt={"10px"}>{subheading}</Text>
              <HStack
                cursor={"pointer"}
                align={"start"}
                justify={"start"}
                fontWeight={500}
                mt={"5px"}
                _hover={{ transform: "translateX(5px)" }}
                transition={"all 0.3s"}
                onClick={() => router.push(`/${link}`)}
              >
                <Text>Explore service</Text>

                <ChevronRight />
              </HStack>
            </Box>
          </VStack>
        ))}
      </HStack>

      <HStack
        mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <ScheduleConsultation />
    </>
  );
};

export default Services;
