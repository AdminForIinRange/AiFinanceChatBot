"use client";

import React, { useState } from "react";
import { Input, Button, Stack, Box } from "@chakra-ui/react";
import { useUser } from "@/context/UserContext"; // Assuming this is where the user context is stored
import { createListing, uploadImage } from "@/lib/actions/user.actions"; // Assuming uploadImage is imported from your actions
import { appwriteConfig } from "@/lib/appwrite/config";

// Define the ListingData interface
export interface ListingData {
  title: string;
  subheading: string;
  propertyType: string;
  location: string;
  guestsSpace: string;
  rooms: string[];
  amenities: string[];
  pricing: string[];
  usersAccountId: string;
  bucketFileId: string; // This is where the bucketFileId (uploaded file ID) will be stored
}

const TestingCreateListingDB = () => {
  const { user } = useUser(); // Get the current logged-in user

  // State for form values
  const [listingTitle, setListingTitle] = useState<string>(""); // Title of the listing
  const [subheading, setSubheading] = useState<string>(""); // Subheading of the listing
  const [location, setLocation] = useState<string>(""); // Location of the listing
  const [pricing, setPricing] = useState<string>(""); // Pricing of the listing
  const [file, setFile] = useState<File | null>(null); // State for the selected file (image)

  // Handle the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation for required fields
    if (!listingTitle || !subheading || !location || !pricing || !file) {
      alert("Please fill out all fields and upload an image.");
      return;
    }

    // Upload the file and get the bucketFileId
    try {
      const bucketId = appwriteConfig.bucketId; // Replace with your Appwrite bucket ID
      const bucketFileId = await uploadImage(file, bucketId); // Upload image to Appwrite and get the bucketFileId

      // Prepare the listing data object
      const listingData: ListingData = {
        title: listingTitle,
        subheading,
        propertyType: "House", // Default value for propertyType (you can add an input for this if needed)
        location,
        guestsSpace: "5 beds available", // Default value for guestsSpace (you can extend this input)
        rooms: ["Living Room", "Bedroom"], // Default value for rooms (extend if necessary)
        amenities: ["WiFi", "Parking"], // Default value for amenities (extend if necessary)
        pricing: [pricing], // Store pricing as an array
        usersAccountId: user?.accountId || "", // Use the logged-in user's accountId
        bucketFileId, // Store the bucketFileId for the uploaded file
      };

      // Call the createListing function to create the listing
      await createListing(listingData);
      alert("Listing created successfully!");
      setListingTitle(""); // Reset form fields
      setSubheading("");
      setLocation("");
      setPricing("");
      setFile(null); // Reset the file input
    } catch (error) {
      console.error("Error creating listing:", error);
      alert("Error creating listing.");
    }
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <Stack
      spacing={3}
      width="100%"
      maxWidth="600px"
      margin="0 auto"
      padding="20px"
      mt={4}
    >
      <Box textAlign="center" fontWeight="600" fontSize="24px">
        Create a New Listing
      </Box>

      {user ? (
        <>
          <form onSubmit={handleSubmit}>
            <Input
              label="Listing Title"
              variant="outlined"
              
              value={listingTitle}
              onChange={(e) => setListingTitle(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
            <Input
              label="Subheading"
              variant="outlined"
              
              value={subheading}
              onChange={(e) => setSubheading(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
            <Input
              label="Location"
              variant="outlined"
              
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
            <Input
              label="Pricing"
              variant="outlined"
              
              value={pricing}
              onChange={(e) => setPricing(e.target.value)}
              style={{ marginBottom: "10px" }}
            />

            {/* File input for image upload */}
            <input
              type="file"
              accept="image/*" // Allow only image files
              onChange={handleFileChange}
              style={{ marginBottom: "10px" }}
            />

            <Button type="submit" variant="contained" color="primary">
              Create Listing
            </Button>
          </form>
        </>
      ) : (
        <Box fontSize="18px" color="red" textAlign="center">
          Please log in to create a listing.
        </Box>
      )}
    </Stack>
  );
};

export default TestingCreateListingDB;
