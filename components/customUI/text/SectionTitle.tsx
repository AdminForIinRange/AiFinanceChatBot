import { Stack } from "@mui/material";

import React from "react";

interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return (
    <>
      <Stack
        textAlign={"center"}
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={{
          xs: "24px",
          sm: "32px",
          md: "40px",
          lg: "48px",
          xl: "56px",
        }}
        fontWeight={{ xs: "400", sm: "400", md: "300", lg: "300", xl: "600" }}
      >
        {" "}
        {text}
      </Stack>
    </>
  );
};

export default SectionTitle;
