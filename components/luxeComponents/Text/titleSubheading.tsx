import React from "react";
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
const TitleSubheading = ({
  title,
  subheading,
}: {
  title: string;
  subheading: string;
}) => {
  return (
    <>
      <VStack
      data-aos="fade-up"
        mt={["50px", "50px", "50px", "50px", "50px", "50px"]}
        w={["100%", "100%", "100%", "100%", "100%", "100"]}
        textAlign={["center", "center", "center", "center", "center", "center"]}
        color={"black"}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
      >
        <Text
         fontSize={["40px", "40px", "40px", "60px", "60px", "60px"]}
          fontWeight={700}
          fontFamily={"Raleway"}
          bgClip="text"
          color={"black"}
          bgGradient="linear(to-r, teal, blue)"
        >
         {title}
        </Text>
        <Text
          w={["90%", "90%", "90%", "50%", "50%", "50%"]}
          fontSize={["18px", "18px", "18px", "26px", "26px", "26px"]}
          // mt={["20px", "20px", "20px", "20px", "20px", "20px"]}

          fontFamily={"raleway"}
          color={"black"}
          fontWeight={300}
        >
        {subheading}
        </Text>
      </VStack>
    </>
  );
};

export default TitleSubheading;
