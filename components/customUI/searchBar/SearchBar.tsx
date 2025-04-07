"use client";

import React from "react";
import { Stack, Box, Input } from "@chakra-ui/react";
import { MapPin, Users, Search } from "lucide-react";

import { DatePickerWithRange } from "../DatePickerWithRange/DatePickerWithRange";
import DropDownMenu from "../dropDownMenu/DropDownMenu";

const SearchBar = () => {
  return (
    <Stack
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Box
          width="60%"
          height="70px"
          borderRadius="35px"
          mt="30px"
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
        >
          <Stack
            py="10px"
            px="20px"
            height="100%"
            width="100%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            gap="10px"
          >
            <Box
              sx={{
                transition: "all 0.3s ease-in-out",
                width: "100%",
                height: "100%",
                borderRadius: "30px",
                ":hover": {
                  background: "#D9D9D9",
                },
              }}
            >
              <Stack
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100%"
                px="15px"
              >
                <MapPin />
                <Input
        
                  sx={{
                    ml: "10px",
                    width: "100%",
                    height: "100%",
                    borderRadius: "30px",
                    fontWeight: "500",
                  }}
                  placeholder="Search"
                />
              </Stack>
            </Box>
            <Box
              sx={{
                transition: "all 0.3s ease-in-out",
                width: "auto",
                height: "100%",
                borderRadius: "30px",
                ":hover": {
                  background: "#D9D9D9",
                },
              }}
            >
              <Stack
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                width="auto"
                height="100%"
                px="15px"
                fontWeight="500"
              >
                <DatePickerWithRange />
              </Stack>
            </Box>
            <Box
              sx={{
                transition: "all 0.3s ease-in-out",
                width: "auto",
                height: "100%",
                borderRadius: "30px",
                ":hover": {
                  background: "#D9D9D9",
                },
              }}
            >
              <Stack
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100%"
                px="15px"
                fontWeight="500"
              >
                <Users />
                <DropDownMenu />
              </Stack>
            </Box>
            <Box
              sx={{
                transition: "all 0.3s ease-in-out",
                width: "120px",
                height: "100%",
                background: "#000",
                borderRadius: "30px",
                ":hover": {
                  background: "#D9D9D9",
                  cursor: "pointer",
                },
              }}
            >
              <Stack
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100%"
                px="15px"
              >
                <Search
                  color="#fff"
                  style={{ transition: "all 0.3s ease-in-out" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                />
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default SearchBar;
