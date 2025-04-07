import React from "react";
import { Stack, Box } from "@mui/material";

interface ImgLayoutProps {
  src: string;
}

const ImgLayout: React.FC<ImgLayoutProps> = ({ src }) => {
  return (
    <Stack
      textAlign={"center"}
      width={"100%"}
      height={"100%"}
      flexDirection={"row"}
      justifyContent={{
        xs: "center",
        sm: "center",
        md: "start",
        lg: "start",
        xl: "start",
      }}
      alignItems={"center"}
    >
      <Box
        sx={{
          border: "1px solid rgb(0, 0,0,0.05)",
          bgcolor: "rgb(0,0,0,0.05)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          padding: "10px",
          borderRadius: "30px",
        }}
        // data-aos="fade-right"
      >
        <Box
          sx={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",

            borderRadius: "30px",
          }}
          //   data-aos="fade-right"
        ></Box>
      </Box>
    </Stack>
  );
};

export default ImgLayout;
