import React from "react";
import SubTopicHeader from "../SubTopicHeader";
import { Box } from "@mui/material";

const TextCard = ({
  description,
  icon,
  title,
}: {
  description: string;
  icon: JSX.Element;
  title: string;
}) => {
  return (
    <Box
      border={"1px solid rgb(0, 0,0,0.1)"}
      borderRadius={"30px"}
      p={"20px"}
      width={{ xs: "100%", sm: "280px", md: "400px", lg: "300px", xl: "400px" }}
      height={{
        xs: "220px",
        sm: "190px",
        md: "190px",
        lg: "190px",
        xl: "190px",
      }}
      fontSize={["20px", "20px", "24px", "24px", "30px", "30px"]}
    >
      {icon}
      <Box mt={{ xs: "10px", sm: "10px", md: "10px", lg: "10px", xl: "10px" }}>
        <SubTopicHeader text={title} />
        <Box
          width={"100%"}
          mt={{ xs: "10px", sm: "10px", md: "10px", lg: "10px", xl: "10px" }}
          fontWeight={"300"}
          fontSize={["14px", "12px", "12px", "12px", "14px", "14px"]}
        >
          {description}
        </Box>
      </Box>
    </Box>
  );
};

export default TextCard;
