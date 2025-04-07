"use client";
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
  Spacer,
  VStack,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([
    {
      text: "I highly recommend. They was attentive to our needs and worked tirelessly to find us a client for our holiday house property. We couldn't be happier with our new place!",

      name: "Dan Abrahmov",
      src: "https://bit.ly/dan-abramov",
      rating: 5,
    },
    {
      text: "  Their professionalism and dedication were truly exceptional. They made the entire process seamless and stress-free. ",

      name: "Kent Dodds",
      src: "https://bit.ly/kent-c-dodds",
      rating: 6,
    },
    {
      text: " Fantastic service! They took the time to understand exactly what I was looking for and found the perfect match. I couldn’t be happier!",

      rating: 5,
      name: "Segun Adebayo",
      src: "https://bit.ly/sage-adebayo",
    },
    {
      text: " Great experience from start to finish. They kept us informed and made sure we got the best deal possible. I would recommend them to anyone!",

      rating: 5,
      name: "Christian Nwamba",
      src: "https://bit.ly/code-beast",
    },
    {
      text: " Very responsive and professional. They helped us find a great property in a short amount of time. Definitely recommend their services!",
      name: "Sophia M.",
      rating: 6,
    },
    {
      text: "  They were patient and helped us every step of the way. We appreciated their attention to detail and ability to handle any challenge that came up.",
      name: "Michael T.",
      rating: 5,
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(2);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === reviews.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? reviews.length - 1 : currentSlide - 1);
  };

  return (
    <>
         <HStack my={"50px"} justify={"center"} align={"center"} w={"100%"}>
            <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
          </HStack>
      <HStack
        fontFamily={"Raleway"}
      
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
      >
        <HStack
          justify={["center", "center", "center", "center", "center", "center"]}
          align={["center", "center", "start", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["5px", "5px", "5px", "5px", "5px", "5px"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["95%", "95%", "70%", "60%", "50%", "50%"]}>
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
              Look What Our Customers Say!
            </Text>
            <Text
              fontSize={["18px", "18px", "18px", "18px", "18px", "18px"]}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "left", "left", "left", "left"]}
              fontFamily={"Raleway"}
              color={"black"}
              w={["100%", "100%", "80%", "80%", "80%", "80%"]} // !important
              fontWeight={300}
            >
              Check out our numerous positive reviews from satisfied clients.
            </Text>

            <HStack
              w={["100%", "100%", "80%", "80%", "80%", "80%"]}
              justify={["center", "center", "start", "start", "start", "start"]}
              align={"center"}
            >
              <HStack
                as={"button"}
                mt={["25px", "25px", "50px", "25px", "25px", "25px"]}
                w={["225px", "225px", "170px", "170px", "200px", "125px"]}
                h={["50px", "50px", "50px", "50px", "50px", "50px"]}
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
              <HStack
                as={"button"}
                mt={["25px", "25px", "50px", "25px", "25px", "25px"]}
                w={["225px", "225px", "170px", "170px", "200px", "125px"]}
                h={["50px", "50px", "50px", "50px", "50px", "50px"]}
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
          </Box>
          {/* <Image src={collage} width={500} /> */}

          <Box
            border={"1px solid rgb(0, 0,0,0.25)"}
            mt={["80px", "80px", "50px", "50px", "50px", "50px"]}
            display={["block", "block", "block", "block", "block", "block"]}
            data-aos="fade-right" // chnage dir
            // border={"1px solid rgb(0, 0, 0,0.25)"}
            h={["280px", "280px", "280px", "320px", "320px", "320px"]}
            w={["100%", "100%", "650px", "650px", "650px", "650px"]}
            backdropFilter="blur(1.5px)"
            borderRadius={"30px"}
            bgPos={"center"}
            bgSize={"cover"}
          >
            <VStack
              gap={["20px", "20px", "20px", "20px", "20px", "30px"]}
              boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 10px"}
              borderRadius={"30px"}
              w={"100%"}
              h={"100%"}
              justify={"start"}
              align={"center"}
              pt={["40px", "40px", "40px", "60px", "60px", "60px"]}
              pb={["10px", "10px", "10px", "20px", "20px", "20px"]}
              px={["40px", "40px", "20px", "50px", "50px", "50px"]}
              fontFamily={"Raleway"}
              color={"black"}
              textAlign={["left", "left", "left", "left", "left", "left"]}
            >
              <Text
                fontWeight={400}
                h={["100px", "100px", "150px", "150px", "150px", "120px"]}
                w={"100%"}
                fontSize={["16px", "16px", "16px", "18px", "20px", "20px"]}
              >
                {reviews[currentSlide].text}
              </Text>

              <VStack
              my={"10px"}
                py={"10px"}
                w={"100%"}
                h={"100%"}
                borderTop={"1px solid rgb(0, 0, 0,0.25)"}
                justify={"left"}
                align={"start"}
                gap={["240px", "10px", "10px", "10px", "10px", "10px"]}
              >
                <HStack>
                  <Avatar.Root
                     my={"10px"}
                    //  style={{ backgroundImage: `url(${reviews[currentSlide].src})` }}
                    bgPos={"center"}
                    bgSize={"cover"}
                    w={["50px", "50px", "50px", "50px", "50px", "50px"]}
                    h={["50px", "50px", "50px", "50px", "50px", "50px"]}
                    borderRadius={"100px"}
                    bg={"gray"}
                  >
                    <Avatar.Image src={reviews[currentSlide].src} />
                  </Avatar.Root>
                  <HStack>
                    <Text
                      fontWeight={600}
                      fontSize={[
                        "18px",
                        "18px",
                        "18px",
                        "18px",
                        "18px",
                        "18px",
                      ]}
                    >
                      {reviews[currentSlide].name}
                    </Text>
                  </HStack>
                  <HStack></HStack>
                  <Text fontSize={"25px"}>
                    <FaStar
                      color={
                        reviews[currentSlide].rating > 0
                          ? "#FFC700"
                          : "#D4D4D4  "
                      }
                    />
                  </Text>
                  <Text fontSize={"25px"}>
                    <FaStar
                      color={
                        reviews[currentSlide].rating > 2
                          ? "#FFC700"
                          : "#D4D4D4  "
                      }
                    />
                  </Text>
                  <Text fontSize={"25px"}>
                    <FaStar
                      color={
                        reviews[currentSlide].rating > 3
                          ? "#FFC700"
                          : "#D4D4D4  "
                      }
                    />
                  </Text>
                  <Text fontSize={"25px"}>
                    <FaStar
                      color={
                        reviews[currentSlide].rating > 4
                          ? "#FFC700"
                          : "#D4D4D4  "
                      }
                    />
                  </Text>
                  <Text fontSize={"25px"}>
                    <FaStar
                      color={
                        reviews[currentSlide].rating > 5
                          ? "#FFC700"
                          : "#D4D4D4  "
                      }
                    />
                  </Text>
                </HStack>
              </VStack>
            </VStack>{" "}
            {/* <Image src={collage} />   //!cool */}
          </Box>
        </HStack>
      </HStack>
      
    </>
  );
};

export default Testimonials;
