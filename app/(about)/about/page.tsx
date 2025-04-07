"use client";
import React, { useState, useEffect } from "react";
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
  Avatar,
  VStack,
} from "@chakra-ui/react";
import { ChevronRight, Home, HomeIcon, House } from "lucide-react";
import { IconLeft } from "react-day-picker";
import { IconArrowRightFromArc } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import {
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/chakra-snippets/dialog";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";
import TitleSubheading from "@/components/luxeComponents/Text/titleSubheading";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  const [members, setmembers] = useState([
    {
      name: "Habibur Rahman",
      role: "CEO & Co-founder",
      desc: "I told my computer I needed a break, and it said 'No problem, I'll crash for you!'",
      src: `https://picsum.photos/512/512?random=${Math.floor(Math.random() * 100)}&topic=work`,
    },
    {
      name: "Matthew Zaniewski",
      role: "Operation Director",
      desc: "I'm reading a book about anti-gravity. It's impossible to put down.",
      src: `https://picsum.photos/512/512?random=${Math.floor(Math.random() * 100)}&topic=work`,
    },
    {
      name: "Anjesh Bhattarai",
      role: "Lead Software Engineer",
      desc: "I'm not arguing, I'm just explaining why I'm right. There's a difference.",
      src: `https://picsum.photos/512/512?random=${Math.floor(Math.random() * 100)}&topic=work`,
    },
    {
      name: "Zadeed Bhuiyan",
      role: "Executive Partner",
      desc: "I'm not lazy, I'm just on energy-saving mode.",
      src: `https://picsum.photos/512/512?random=${Math.floor(Math.random() * 100)}&topic=work`,
    },
    {
      name: "Aryan Dangwal",
      role: "Executive Partner",
      desc: "Why don't scientists trust atoms? Because they make up everything!",
      src: `https://picsum.photos/512/512?random=${Math.floor(Math.random() * 100)}&topic=work`,
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === members.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? members.length - 1 : currentSlide - 1);
  };

  return (
    <>
      <TitleSubheading
        title={"About Luxe"}
        subheading={"Redefining luxury in short-term rentals"}
      />

      <HStack
        zIndex={3}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        mt={["155px", "155px", "155px", "155px", "155px", "155px"]}
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
              data-aos="fade-up"
              w={["100%", "100%", "80%", "80%", "80%", "80%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={["35px", "35px", "35px", "50px", "50px", "50px"]}
              fontWeight={700}
              fontFamily={"Raleway"}
              bgClip="text"
              textAlign={["center", "center", "left", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              Our Story
            </Text>
            <Text
              fontSize={["16px", "16px", "16px", "16px", "18px", "18px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "left", "left", "left", "left"]}
              fontFamily={"Raleway"}
              color={"black"}
              w={["100%", "100%", "80%", "80%", "80%", "80%"]} // !important
              fontWeight={300}
            >
              Luxe Managements launched in 2022 with a clear mission: to
              redefine short-term rental management through innovation, quality,
              and care. We saw the gaps — inconsistent service, underperforming
              listings, and generic guest experiences — and built a smarter,
              more elevated alternative. <br></br>
              <br></br>From data-driven pricing to five-star cleaning and 24/7
              guest support, every detail is designed to maximise returns and
              create unforgettable stays. Today, Luxe is the go-to choice for
              property owners across Adelaide who want hassle-free hosting and
              hotel-quality results.
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
                my={"25px"}
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
                onClick={() => router.push("/about/journey")}
              >
                Our Journey
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
          </Box>
        </HStack>
      </HStack>
      <HStack
        my={["50px", "50px", "50px", "50px", "50px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
        transition={"all 0.2s ease-in-out"}
        zIndex={3}
        id="get-started-button"
      >
        <Box
          bg={"#0A0F29"}
          w={"90%"}
          h={"100%"}
          borderRadius={"30px"}
          p={"25px"}
          py={"65px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          boxShadow={"0px 10px 20px rgba(0, 0, 0, 0.1)"}
          textAlign={"center"}
        >
          <Text
            color={"white"}
            fontWeight={"700"}
            fontSize={["35px", "35px", "35px", "50px", "50px", "50px"]}
            fontFamily={"raleway"}
            mb={"10px"}
          >
            Our Mission
          </Text>
          <Text
            w={["90%", "90%", "90%", "50%", "50%", "50%"]}
            color={"white"}
            fontSize={["16px", "16px", "16px", "16px", "18px", "18px"]}
            fontFamily={"raleway"}
          >
            At Luxe Managements, our mission is to elevate the short-term rental
            experience for both property owners and guests. We strive to
            maximize returns for owners while ensuring each guest enjoys a
            five-star stay.
          </Text>

          <HStack
            justify={"center"}
            align={"start"}
            w={"100%"}
            transition={"all 0.2s ease-in-out"}
            zIndex={3}
            gap={["25px", "25px", "25px", "25px", "25px", "25px"]}
            wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            mt={"50px"}
            color={"white"}
            fontFamily={"raleway"}
          >
            {" "}
            <Box p={4} rounded={"15px"} w={"285px"} bg={"#23273F"} h={"200px"}>
              <Text
                fontSize={["24px", "24px", "24px", "30px", "30px", "30px"]}
                fontWeight={"700"}
              >
                Excellence
              </Text>
              <Text
                fontSize={["18px", "18px", "18px", "18px", "18px", "18px"]}
                pt={"15px"}
              >
                Delivering unparalleled service quality in every interaction
              </Text>
            </Box>
            <Box p={4} rounded={"15px"} w={"285px"} bg={"#23273F"} h={"200px"}>
              <Text
                fontSize={["24px", "24px", "24px", "30px", "30px", "30px"]}
                fontWeight={"700"}
              >
                Innovation
              </Text>
              <Text
                fontSize={["18px", "18px", "18px", "18px", "18px", "18px"]}
                pt={"15px"}
              >
                Leveraging cutting-edge technology to streamline operations
              </Text>
            </Box>
            <Box p={4} rounded={"15px"} w={"285px"} bg={"#23273F"} h={"200px"}>
              {" "}
              <Text
                fontSize={["24px", "24px", "24px", "30px", "30px", "30px"]}
                fontWeight={"700"}
              >
                Integrity
              </Text>
              <Text
                fontSize={["18px", "18px", "18px", "18px", "18px", "18px"]}
                pt={"15px"}
              >
                Building trust through transparency and ethical practices
              </Text>
            </Box>
          </HStack>
        </Box>
      </HStack>

      <HStack
        zIndex={3}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        my={["50px", "50px", "50px", "50px", "50px", "50px"]}
      >
        <VStack
          justify={"center"}
          align={["center", "center", "center", "center", "center", "center"]}
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
              fontWeight={600}
              fontFamily={"Raleway"}
              bgClip="text"
              textAlign={[
                "center",
                "center",
                "center",
                "center",
                "center",
                "center",
              ]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
              Meet Our Team
            </Text>
          </Box>

          <VStack>
            <HStack
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              justify={[
                "center",
                "center",
                "center",
                "center",
                "center",
                "center",
              ]}
              align={"center"}
              gap={["0", "0", "0", "50px", "50px", "100px"]}
            >
              <HStack
                display={["none", "none", "none", "flex", "flex", "flex"]}
                as={"button"}
                mt={["25px", "25px", "50px", "25px", "25px", "25px"]}
                w={["50px", "50px", "50px", "100px", "100px", "100px"]}
                h={["50px", "50px", "50px", "100px", "100px", "100px"]}
                transition={"transform 0.3s ease"}
                _hover={{
                  transform: "translateX(-10px)",
                }}
                justify={"center"}
                align={"center"}
                borderRadius={"100px"}
                border={"1px solid rgb(0, 0,0,0.25)"}
                color={"black"}
                onClick={() => {
                  prevSlide();
                }}
              >
                <Text cursor={"pointer"} fontSize={"40px"}>
                  <FaAngleRight
                    style={{ transform: "rotate(180deg)" }}
                    color="black"
                  />
                </Text>
              </HStack>
              <Box
                border={"1px solid rgb(0, 0,0,0.25)"}
                mt={["80px", "80px", "50px", "50px", "50px", "50px"]}
                display={["block", "block", "block", "block", "block", "block"]}
                // data-aos="fade-right" // chnage dir
                // border={"1px solid rgb(0, 0, 0,0.25)"}
                h={["300px", "300px", "300px", "500px", "500px", "500px"]}
                w={["300px", "300px", "300px", "500px", "500px", "500px"]}
                borderRadius={"full"}
                bgPos={"center"}
                bgSize={"cover"}
                backgroundImage={` url(${members[currentSlide].src})`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
              ></Box>

              <HStack
                display={["none", "none", "none", "flex", "flex", "flex"]}
                as={"button"}
                mt={["25px", "25px", "50px", "25px", "25px", "25px"]}
                w={["50px", "50px", "50px", "100px", "100px", "100px"]}
                h={["50px", "50px", "50px", "100px", "100px", "100px"]}
                transition={"transform 0.3s ease"}
                _hover={{
                  transform: "translateX(10px)",
                }}
                justify={"center"}
                align={"center"}
                borderRadius={"100px"}
                bg={"white"}
                color={"black"}
                border={"1px solid rgb(0, 0,0,0.25)"}
                onClick={() => {
                  nextSlide();
                }}
              >
                <Text cursor={"pointer"} fontSize={"40px"}>
                  <FaAngleRight color="black" />
                </Text>
              </HStack>
            </HStack>
            <HStack mt={["25px", "25px", "50px", "25px", "25px", "25px"]}>
              <HStack
                display={["flex", "flex", "flex", "none", "none", "none"]}
                as={"button"}
                w={["50px", "50px", "50px", "170px", "200px", "125px"]}
                h={["50px", "50px", "50px", "50px", "50px", "125px"]}
                transition={"transform 0.3s ease"}
                _hover={{
                  transform: "translateX(-10px)",
                }}
                justify={"center"}
                align={"center"}
                borderRadius={"100px"}
                border={"1px solid rgb(0, 0,0,0.25)"}
                color={"black"}
                onClick={() => {
                  prevSlide();
                }}
              >
                <Text cursor={"pointer"} fontSize={"40px"}>
                  <FaAngleRight
                    style={{ transform: "rotate(180deg)" }}
                    color="black"
                  />
                </Text>
              </HStack>

              <VStack w={["245px", "245px", "245px", "100%", "100%", "100%"]}>
                <Text
                  fontSize={["20px", "20px", "20px", "30px", "30px", "30px"]}
                  fontWeight={"700"}
                >
                  {members[currentSlide].name}
                </Text>

                <Text
                  fontWeight={"500"}
                  fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
                >
                  {members[currentSlide].role}
                </Text>
                <Text
                  textAlign={"center"}
                  w={["80%", "80%", "80%", "80%", "80%", "80%"]}
                  fontSize={["16px", "16px", "16px", "18px", "18px", "18px"]}
                >
                  " {members[currentSlide].desc} "
                </Text>
              </VStack>
              <HStack
                display={["flex", "flex", "flex", "none", "none", "none"]}
                as={"button"}
                w={["50px", "50px", "50px", "170px", "200px", "125px"]}
                h={["50px", "50px", "50px", "50px", "50px", "125px"]}
                transition={"transform 0.3s ease"}
                _hover={{
                  transform: "translateX(10px)",
                }}
                justify={"center"}
                align={"center"}
                borderRadius={"100px"}
                bg={"white"}
                color={"black"}
                border={"1px solid rgb(0, 0,0,0.25)"}
                onClick={() => {
                  nextSlide();
                }}
              >
                <Text cursor={"pointer"} fontSize={"40px"}>
                  <FaAngleRight color="black" />
                </Text>
              </HStack>
            </HStack>
          </VStack>
          {/* <Image src={collage} width={500} /> */}
        </VStack>
      </HStack>

      <HStack justify={"center"} align={"center"} w={"100%"}>
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <ScheduleConsultation />
    </>
  );
};

export default About;
