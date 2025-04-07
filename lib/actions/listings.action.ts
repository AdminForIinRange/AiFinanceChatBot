// listing.action.ts
"use server";

import { ID, Query } from "node-appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { createListingsClient } from "@/lib/appwrite/index"; // Import the listings client

// Function to generate a random listing
export const createRandomListing = async (
  userId: string,
  accountId: string,
) => {
  // Generate random data for each attribute
  const randomTitle = `Listing ${Math.floor(Math.random() * 1000)}`;
  const randomSubheading = `Beautiful property for sale`;
  const randomPropertyType = ["House", "Apartment", "Villa", "Condo"][
    Math.floor(Math.random() * 4)
  ];
  const randomGuestsSpace = `${Math.floor(Math.random() * 10)} beds available`;
  const randomLocation = `City ${Math.floor(Math.random() * 100)}`;
  const randomRooms = ["Living Room", "Bedroom", "Kitchen", "Bathroom"];
  const randomAmenities = ["WiFi", "Pool", "Gym", "Parking"];
  const randomPricing = [`$${Math.floor(Math.random() * 500) + 50}`];
  const randomAvailabilityCalendar = ["2025-01-15", "2025-01-16", "2025-01-17"];
  const randomValueAddedPacks = ["Breakfast", "Airport Transfer"];

  const fileId = "file_id_here"; // Replace with actual file ID for image or document

  // Create the listing document
  const listingDocument = {
    title: randomTitle,
    subheading: randomSubheading,
    propertyType: randomPropertyType,
    guestsSpace: randomGuestsSpace,
    location: randomLocation,
    rooms: randomRooms,
    users: userId, // Make sure userId is stored correctly
    amenities: randomAmenities,
    bucketFileId: fileId, // Use actual file ID
    accountId: accountId, // Use dynamic account ID
    url: "https://example.com/listing-url", // URL of the listing
    description: "This is a randomly generated property description.",
    pricing: randomPricing,
    availabilityCalendar: randomAvailabilityCalendar,
    valueAddedPacks: randomValueAddedPacks,
  };

  try {
    // Use the Listings Client to save the listing
    const { databases } = await createListingsClient(); // Fetch the client
    const response = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.listingsCollectionId,
      ID.unique(),
      listingDocument,
    );

    console.log("Listing created:", response);
    return response;
  } catch (error) {
    console.error("Error creating listing:", error);
    throw error;
  }
};

// Function to query listings for a specific user
// Corrected query for relationship field "users"
export const getListingsByUser = async (userId: string) => {
  const { databases } = await createListingsClient();

  try {
    const result = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.listingsCollectionId,
      [Query.equal("users.$id", userId)], // Correct query format for relationships
    );

    return result.documents;
  } catch (error) {
    console.error("Error fetching listings:", error);
    throw error;
  }
};
