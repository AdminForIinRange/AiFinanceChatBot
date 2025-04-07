"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import TitleSubheading from "@/components/luxeComponents/Text/titleSubheading";
import Aos from "aos";
import "aos/dist/aos.css";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";
import {
  DialogContent,
  DialogCloseTrigger,
  DialogRoot,
} from "@/components/chakra-snippets/dialog";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
  }, []);

  // STATES FOR THE GALLERY & MODAL
  const [clickedImage, setClickedImage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // STATES FOR FILTER & SEARCH (lifted from v0 FilterSearch)
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(true);

  // Category list (from v0)
  const categories = [
    "Cleaning",
    "Linen",
    "Property Management",
    "Furnishing",
    "Styling",
    "Interior",
    "Photography",
  ];

  // Toggle a category on/off
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Clear filters
  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchTerm("");
  };

  // Toggle expand/collapse for the categories list


  // Gallery items (sample data)
  const galleryItems = [
    {
      img: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg",
      title: "Property Management",
      subheading:
        "Comprehensive management service including all our offerings.",
      categories: ["Property Management"],
      brand: "BrandX",
    },
    {
      img: "https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg",
      title: "Cleaning & Linen",
      subheading:
        "Ensure a pristine, hotel-quality experience for every guest.",
      categories: ["Cleaning", "Linen"],
      brand: "BrandA",
    },
    {
      img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg",
      title: "Furnishing & Styling",
      subheading:
        "Transform your space into a stunning, Instagram-worthy retreat.",
      categories: ["Furnishing", "Styling", "Interior"],
      brand: "BrandB",
    },
    {
      img: "https://images.pexels.com/photos/30670960/pexels-photo-30670960.jpeg",
      title: "Photography",
      subheading:
        "Capture your property's best features with professional photography.",
      categories: ["Photography"],
      brand: "BrandX",
    },
    // Add more items as needed...
  ];

  // Filtering logic based on search term and selected categories
  const filteredGalleryItems = galleryItems.filter((item) => {
    const lowerSearch = searchTerm.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(lowerSearch) ||
      item.subheading.toLowerCase().includes(lowerSearch);
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) => item.categories.includes(cat));
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <TitleSubheading
        title="Gallery"
        subheading="Check out our latest work."
      />

      <HStack
        mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
        w="100%"
        h="100%"
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        fontFamily="raleway"
        gap="20px"
        align="start"
        justify="center"
        flexWrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
      >
        {/* LEFT SIDEBAR: Integrated Filter & Search (v0 style) */}
        <Box
          w={["100%", "520px", "800px", "300px", "350px", "350px"]}
          bg="white"
          borderRadius="8px"
          boxShadow="0 2px 10px rgba(0, 0, 0, 0.08)"
          overflow="hidden"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          <Box p="20px" borderBottom="1px solid #f0f0f0">
            <Flex
              as="h2"
              m="0 0 16px 0"
              fontSize="18px"
              fontWeight="600"
              color="#333333"
              justifyContent="space-between"
              alignItems="center"
            >
              Filter & Search
            
            </Flex>
            <Box position="relative" mb="16px">
              <Input
                type="text"
                placeholder="Search by keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                w="100%"
                p="12px 16px 12px 40px"
                borderRadius="6px"
                border="1px solid #e0e0e0"
                fontSize="14px"
                boxSizing="border-box"
                _focus={{
                  borderColor: "#4a90e2",
                  boxShadow: "0 0 0 3px rgba(74, 144, 226, 0.1)",
                }}
              />
              <Box
                position="absolute"
                left="14px"
                top="50%"
                transform="translateY(-50%)"
                pointerEvents="none"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="#999999"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
              {searchTerm && (
                <Button
                  onClick={() => setSearchTerm("")}
                  position="absolute"
                  right="10px"
                  top="50%"
                  transform="translateY(-50%)"
                  bg="none"
                  border="none"
                  cursor="pointer"
                  color="#999"
                  fontSize="18px"
                  p="4px"
                  _hover={{ bg: "none" }}
                  _active={{ bg: "none" }}
                >
                  ×
                </Button>
              )}
            </Box>
            {selectedCategories.length > 0 && (
              <HStack wrap="wrap" spacing="8px" mb="16px">
                {selectedCategories.map((category) => (
                  <Box
                    key={category}
                    display="inline-flex"
                    alignItems="center"
                    bg="#f0f7ff"
                    color="#4a90e2"
                    px="10px"
                    py="4px"
                    borderRadius="16px"
                    fontSize="12px"
                    fontWeight="500"
                  >
                    {category}
                    <Button
                      onClick={() => toggleCategory(category)}
                      bg="none"
                      border="none"
                      cursor="pointer"
                      ml="4px"
                      color="#4a90e2"
                      fontSize="14px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      minW="16px"
                      h="16px"
                      p="0"
                      _hover={{ bg: "none" }}
                      _active={{ bg: "none" }}
                    >
                      ×
                    </Button>
                  </Box>
                ))}
                <Button
                  onClick={clearFilters}
                  bg="none"
                  border="none"
                  cursor="pointer"
                  fontSize="12px"
                  color="#666"
                  textDecoration="underline"
                  _hover={{ textDecoration: "underline" }}
                >
                  Clear all
                </Button>
              </HStack>
            )}
          </Box>
          {isExpanded && (
            <Box px="20px" pb="20px">
              <Text
                as="h3"
                mt="20px"
                mb="12px"
                fontSize="16px"
                fontWeight="600"
                color="#333333"
              >
                Categories
              </Text>
              <VStack align="start" spacing="10px">
                {categories.map((category) => {
                  const isSelected = selectedCategories.includes(category);
                  return (
                    <Box
                      key={category}
                      onClick={() => toggleCategory(category)}
                      cursor="pointer"
                      display="flex"
                      alignItems="center"
                      fontSize="14px"
                      color={isSelected ? "#4a90e2" : "#555"}
                      transition="color 0.2s"
                      _hover={{ color: "#4a90e2" }}
                    >
                      <Box
                        w="18px"
                        h="18px"
                        border={`1px solid ${
                          isSelected ? "#4a90e2" : "#d0d0d0"
                        }`}
                        borderRadius="4px"
                        mr="10px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg={isSelected ? "#4a90e2" : "transparent"}
                        transition="background-color 0.2s, border-color 0.2s"
                      >
                        {isSelected && (
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12L10 17L19 8"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </Box>
                      {category}
                    </Box>
                  );
                })}
              </VStack>
            </Box>
          )}
        </Box>

        {/* RIGHT COLUMN: Gallery Grid */}
        <HStack
          w="100%"
          h="100%"
          justify="center"
          align="center"
          flexWrap="wrap"
          gap={["25px", "25px", "25px", "25px", "25px", "25px"]}
        >
          {filteredGalleryItems.map(({ img }, index) => (
            <VStack key={index}>
              <Box
                onClick={() => {
                  setClickedImage(img);
                  setModalOpen(true);
                }}
                backgroundImage={` url(${img})`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                transition="all 0.3s"
                w={["250px", "250px", "250px", "300px", "350px", "350px"]}
                h={["250px", "250px", "250px", "300px", "350px", "350px"]}
                borderRadius="16px"
                _hover={{ transform: "scale(1.01)" }}
                cursor="pointer"
                p="30px"
                display="flex"
              >
                <VStack
                  color="white"
                  mt="20px"
                  w="100%"
                  h="100%"
                  justifyContent="end"
                  alignItems="end"
                >
                  {/* Optional overlay text */}
                </VStack>
              </Box>
            </VStack>
          ))}
        </HStack>
      </HStack>

      {/* Modal Dialog for Clicked Image */}
      <DialogRoot
        size="cover"
        open={modalOpen}
        onOpenChange={(details) => setModalOpen(details.open)}
      >
        <DialogContent
          p="10"
          bg="white"
          color="white"
          rounded="10px"
          borderRadius="10px"
        >
          <HStack justify="center" align="center" w="100%" h="100%">
            {clickedImage && (
              <Box
                w={["100%", "100%", "100%", "100%", "100%", "100%"]}
                h="100%"
                borderRadius="30px"
                overflow="hidden"
                backgroundImage={`url(${clickedImage})`}
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="contain"
              />
            )}
          </HStack>
          <DialogCloseTrigger
            rounded="full"
            color="black"
            w="40px"
            h="40px"
            border="1px black solid"
            position="absolute"
            top="10px"
            right="10px"
            onClick={() => setModalOpen(false)}
            _focus={{ outline: "none" }}
          />
        </DialogContent>
      </DialogRoot>

      {/* Separator */}
      <HStack
        mt={["100px", "100px", "100px", "100px", "100px", "100px"]}
        justify="center"
        align="center"
        w="100%"
      >
        <Box w="90%" borderTop="1px solid #e0e0e0" />
      </HStack>

      <ScheduleConsultation />
    </>
  );
};

export default Gallery;
