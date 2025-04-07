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
import React, { useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/chakra-snippets/dialog";
const ScheduleConsultation = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
 
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
          py={"35px"}
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
            fontSize={["40px", "40px", "40px", "60px", "60px", "60px"]}
            fontFamily={"raleway"}
            mb={"10px"}
          >
            Ready to transfrom your property management?
          </Text>
          <Text
            color={"white"}
            fontSize={["18px", "18px", "18px", "26px", "26px", "26px"]}
            fontFamily={"raleway"}
          >
            Get a full consulation, market analysis in under 24 hours for free
          </Text>

          <HStack
            justify={"center"}
            align={"center"}
            w={"100%"}
            transition={"all 0.2s ease-in-out"}
            zIndex={3}
          >
            <Box
              my={"25px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"15px"}
              fontFamily={"raleway"}
              transition={"all 0.2s ease-in-out"}
              cursor={"pointer"}
              _hover={{
                transition: "all 0.2s ease-in-out",
                scale: 1.1,
                fontWeight: "700",
                px: "80px",
                bg: "white",
              }}
              p={4}
              bg={"White"}
              color={"black"}
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
      </HStack>

  

      <DialogRoot
        size={"cover"}
        open={isDialogOpen}
        onOpenChange={(details) => setIsDialogOpen(details.open)}
      >
        <DialogContent
          p={0}
          bg={"white"}
          color={"white"}
          rounded={"10px"}
          borderRadius={"10px"}
        >
          <iframe
            style={{
              width: "100%",
              height: "800px",
              border: "none",
              borderRadius: "10px",
            }}
            src="https://calendly.com/luxemanagements-info"
          ></iframe>

          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default ScheduleConsultation;
