import {
  Box,
  Stack,
  Flex,
  Group,
  HStack,
  Icon,
  Button,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { VenetianMask } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <HStack
        justify={"space-between"}
        align={"center"}
        w={"100%"}
        h={"100px"}
        px={["20px", "20px", "20px", "20px", "20px", "20px"]}
      >
        <VStack w={"100%"} justify={"start"} align={"start"} >
          <Text
       fontFamily={"poppins"}
            fontWeight={500}
            fontSize={["18px", "18px", "24px", "24px", "24px", "24px"]}
            color={"gray.400"}
            as={"a"}
            href={"/"}
          >
          AgrAI.
          </Text>
       
        </VStack>
        <HStack w={"100%"} justify={"end"} align={"end"}>
          <Box

            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            as={"button"}
            px={"5px"}
            w={["170px", "170px", "170px", "170px", "170px", "170px"]}
            h={["50px", "50px", "50px", "50px", "50px", "50px"]}
            color={"white"}
            fontFamily={"raleway"}
            fontWeight={600}
            fontSize={["18px", "18px", "18px", "18px", "18px", "16px"]}
            bg={"#303030"}
               border="1px solid #7A7A7A"
            _hover={{
              bg: "#404040",
            }}
            rounded={"30px"}
            gap={2}
                      transition="all 0.2s ease-in-out"
          >
            <VenetianMask />
           Incognito
          </Box>

          <Box
            p={"10px"}
            bg={"white"}
            rounded={"full"}
            w={["50px", "50px", "50px", "50px", "50px", "50px"]}
            h={["50px", "50px", "50px", "50px", "50px", "50px"]}
            fontFamily={"raleway"}
            fontWeight={700}
            fontSize={["18px", "18px", "24px", "24px", "24px", "24px"]}
            color={"white"}
            backgroundImage={` url(https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg)`}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
                  transition="all 0.2s ease-in-out"
            _hover={{
              cursor: "pointer",
              transform: "scale(1.05)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            }}
          ></Box>
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
