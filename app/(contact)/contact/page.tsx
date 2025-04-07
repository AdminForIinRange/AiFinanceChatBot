"use client";

import React, { useEffect } from "react";
import { Box, Stack, Text, Flex, HStack } from "@chakra-ui/react";
import TitleSubheading from "@/components/luxeComponents/Text/titleSubheading";
import Aos from "aos";
import "aos/dist/aos.css";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <TitleSubheading
        title={"Let's Get in Touch"}
        subheading={"We’d love to hear from you."}
      />

      <Flex
        direction={{ base: "column", md: "row" }}
        justify={"center"}
        align={"start"}
        px={{ base: "6%", md: "10%" }}
        py={{ base: "40px", md: "80px" }}
        gap={"60px"}
        data-aos="fade-up"
      >
        {/* Contact Info */}
        <Box w={{ base: "100%", md: "40%" }}>
          <Text
            fontSize={{ base: "26px", md: "34px" }}
            fontWeight={700}
            fontFamily={"Raleway"}
            color={"#0A0F29"}
            mb={"24px"}
          >
            Contact Information
          </Text>

          <Stack spacing={"20px"} fontSize={"16px"} fontFamily={"Raleway"}>
            <Text fontWeight={500} color={"#333"}>
              Email: <span style={{ fontWeight: 400 }}>contact@luxemanagements.com</span>
            </Text>
            <Text fontWeight={500} color={"#333"}>
              Phone: <span style={{ fontWeight: 400 }}>(123) 456-7890</span>
            </Text>
            <Text fontWeight={500} color={"#333"}>
              Location: <span style={{ fontWeight: 400 }}>Toronto, ON</span>
            </Text>
          </Stack>
        </Box>

        {/* Contact Placeholder */}
        <Box
          w={{ base: "100%", md: "50%" }}
          h={"320px"}
          borderRadius={"20px"}
          bg={"rgba(255, 255, 255, 0.65)"}
          backdropFilter="blur(10px)"
          border={"1px solid rgba(255, 255, 255, 0.3)"}
          boxShadow={"0 8px 30px rgba(0,0,0,0.08)"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          px={"30px"}
          data-aos="fade-up"
        >
          <Text
            fontSize={{ base: "15px", md: "17px" }}
            fontFamily={"Raleway"}
            fontWeight={400}
            color={"#444"}
            lineHeight={"1.7"}
          >
            Our contact form is on the way. In the meantime, please use
            the contact details provided to reach out. We look forward to
            speaking with you!
          </Text>
        </Box>
      </Flex>
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

export default Contact;
