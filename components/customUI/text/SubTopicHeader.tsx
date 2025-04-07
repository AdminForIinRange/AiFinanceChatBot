import React from "react";
import { Stack, Typography } from "@mui/material";

interface SubTopicHeaderProps {
  text: string;
}

const SubTopicHeader: React.FC<SubTopicHeaderProps> = ({ text }) => {
  return (
    <Stack
      textAlign={"center"}
      width={"100%"}
      flexDirection={"row"}
      alignItems={"center"}
      fontSize={["18px", "14px", "16px", "16px", "16px", "18px"]}
      fontWeight={{ xs: "500", sm: "500", md: "500", lg: "500", xl: "500" }}
    >
      {text}
    </Stack>
  );
};

export default SubTopicHeader;
