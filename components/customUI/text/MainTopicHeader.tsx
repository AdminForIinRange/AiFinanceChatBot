import React from "react";
import { Stack } from "@mui/material";

interface MainTopicHeaderProps {
  text: string;
}

const MainTopicHeader: React.FC<MainTopicHeaderProps> = ({ text }) => {
  return (
    <Stack
      textAlign={{
        xs: "center",
        sm: "center",
        md: "center",
        lg: "center",
        xl: "center",
      }}
      width={"100%"}
      flexDirection={"row"}
      justifyContent={{
        xs: "center",
        sm: "center",
        md: "center",
        lg: "center",
        xl: "center",
      }}
      alignItems={"center"}
      fontSize={{
        xs: "30px",
        sm: "30px",
        md: "35px",
        lg: "35px",
        xl: "40px",
      }}
      fontWeight={{ xs: "400", sm: "400", md: "400", lg: "400", xl: "500" }}
    >
      {" "}
      {text}
    </Stack>
  );
};

export default MainTopicHeader;
