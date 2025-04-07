// theme.ts
import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    html: {
      scrollBehavior: "auto !important", // Ensures Chakra does not override Lenis
   backgroundColor: "#212121",
      colorPalette: "blue", // Replace "blue" with your preferred color palette
    },
   
  },
});

export const system = createSystem(defaultConfig, config);
