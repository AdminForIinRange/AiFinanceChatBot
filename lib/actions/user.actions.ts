"use server";

import { getEnvVariable } from "@/lib/getEnvVariable";
import { appwriteConfig } from "@/lib/appwrite/config";
import bcrypt from "bcrypt";
import { ID, Query } from "node-appwrite";
import {
  createAdminClient,
  createSessionClient,
  createListingsClient,
} from "@/lib/appwrite";
import { parseStringify } from "@/lib/utils";
import { cookies } from "next/headers";

// Debug log for environment variable
// console.log("Appwrite Database ID:", getEnvVariable("NEXT_PUBLIC_APPWRITE_DATABASE"));

const getUserByEmail = async (email: string) => {
  const { databases } = await createAdminClient();
  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("email", [email])]
  );
  return result.total > 0 ? result.documents[0] : null;
};

const getUserByPhoneNumber = async (phoneNumber: string) => {
  const { databases } = await createAdminClient();
  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("phoneNumber", [phoneNumber])]
  );
  return result.total > 0 ? result.documents[0] : null;
};

// Instead of throwing errors, we return an object with an error property.
const handleError = (error: unknown, message: string) => {
  console.error(error, message);
  return { error: message };
};

export const sendEmailOTP = async ({ email }: { email: string }) => {
  const { account } = await createAdminClient();
  try {
    const session = await account.createEmailToken(ID.unique(), email);
    return session.userId;
  } catch (error) {
    return handleError(error, "Failed to send email OTP");
  }
};

const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

export const createAccount = async ({
  fullName,
  email,
  password,
  phoneNumber,
}: {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
}) => {
  try {
    console.time("Check Existing Users");
    const [existingUserByEmail, existingUserByPhone] = await Promise.all([
      getUserByEmail(email),
      getUserByPhoneNumber(phoneNumber),
    ]);
    console.timeEnd("Check Existing Users");

    if (existingUserByEmail) {
      return { error: "Email is already registered" };
    }
    if (existingUserByPhone) {
      return { error: "Phone number is already registered" };
    }

    console.time("Hash Password");
    const hashedPassword = await hashPassword(password);
    console.timeEnd("Hash Password");

    console.time("Send OTP");
    const accountId = await sendEmailOTP({ email });
    console.timeEnd("Send OTP");

    // If sending OTP failed, accountId will be an error object or falsy.
    if (
      !accountId ||
      (typeof accountId === "object" && "error" in accountId)
    ) {
      return {
        error:
          (typeof accountId === "object" && accountId.error) ||
          "Failed to send an OTP",
      };
    }

    console.time("Create User Document");
    const { databases } = await createAdminClient();
    await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      { fullName, email, password: hashedPassword, phoneNumber, accountId }
    );
    console.timeEnd("Create User Document");

    return parseStringify({ accountId });
  } catch (error: any) {
    console.error("Error in createAccount:", error);
    return { error: error?.message || "An error occurred" };
  }
};

export const verifySecret = async ({
  accountId,
  password,
}: {
  accountId: string;
  password: string;
}) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createSession(accountId, password);
    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify({ sessionId: session.$id });
  } catch (error) {
    return handleError(error, "Failed to verify OTP");
  }
};

export const getCurrentUser = async () => {
  try {
    const { databases, account } = await createSessionClient();
    if (!account || !databases) {
      console.warn("No valid session or client available.");
      return null;
    }
    const result = await account.get(); // Get account details from session

    // Query user document by accountId
    const user = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal("accountId", result.$id)]
    );

    if (user.total <= 0) {
      console.warn("No user document found for this accountId.");
      return null;
    }

    console.log("User fetched successfully:", user.documents[0]);
    return parseStringify(user.documents[0]);
  } catch (error) {
    if (error.code === 401) {
      console.warn("Unauthorized access or missing scope. Returning null.", error);
    } else {
      console.error("Error in getCurrentUser:", error);
    }
    return null;
  }
};

export const signOutUser = async () => {
  const { account } = await createSessionClient();
  try {
    await account.deleteSession("current");
    (await cookies()).delete("appwrite-session");
  } catch (error) {
    return handleError(error, "Failed to sign out user");
  }
};

export const signInUser = async ({ email }: { email: string }) => {
  try {
    const existingUser = await getUserByEmail(email);

    // If the user exists, send an OTP
    if (existingUser) {
      await sendEmailOTP({ email });
      return parseStringify({ accountId: existingUser.accountId });
    }

    return parseStringify({ accountId: null, error: "User not found" });
  } catch (error) {
    return handleError(error, "Failed to sign in user");
  }
};

export const uploadImage = async (file: File, bucketId: string) => {
  const { storage } = await createAdminClient();
  try {
    // Upload the image to the specified bucket
    const fileUploadResponse = await storage.createFile(
      bucketId,
      ID.unique(),
      file
    );

    // Get the bucketFileId (the unique file ID in Appwrite)
    const bucketFileId = fileUploadResponse.$id;
    console.log("File uploaded successfully, bucketFileId:", bucketFileId);

    return bucketFileId;
  } catch (error) {
    console.error("Error uploading file:", error);
    return { error: "Failed to upload the file." };
  }
};

export const createListing = async (listingData: {
  title: string;
  subheading: string;
  propertyType: string;
  location: string;
  guestsSpace: string;
  rooms: string[];
  bucketFileId: string;
  amenities: string[];
  pricing: string[];
}) => {
  // Get the current user directly within this function
  const user = await getCurrentUser();
  if (!user) {
    console.error("No user found, unable to create listing.");
    return { error: "User not found" };
  }

  // Now you can directly use the accountId from the user object
  const { accountId } = user;

  const {
    title,
    subheading,
    propertyType,
    location,
    guestsSpace,
    rooms,
    amenities,
    bucketFileId,
    pricing,
  } = listingData;

  const listingDocument = {
    title,
    subheading,
    propertyType,
    guestsSpace,
    location,
    rooms,
    usersAccountId: accountId,
    bucketFileId,
    amenities,
    accountId,
    url: "https://example.com/listing-url",
    description: "This is a property description.",
    pricing,
    availabilityCalendar: ["2025-01-15", "2025-01-16", "2025-01-17"],
    valueAddedPacks: ["Breakfast", "Airport Transfer"],
  };

  try {
    const { databases } = await createListingsClient();
    const response = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.listingsCollectionId,
      ID.unique(),
      listingDocument
    );
    console.log("Listing created:", response);
    return response;
  } catch (error) {
    console.error("Error creating listing:", error);
    return { error: "Failed to create listing" };
  }
};

export const handleFileUploadAndCreateListing = async (
  file: File,
  bucketId: string,
  listingData: any
) => {
  try {
    const bucketFileId = await uploadImage(file, bucketId);
    if (typeof bucketFileId === "object" && bucketFileId.error) {
      return { error: bucketFileId.error };
    }
    listingData.bucketFileId = bucketFileId;
    const listingResponse = await createListing(listingData);
    console.log("Listing created with image:", listingResponse);
    return listingResponse;
  } catch (error) {
    console.error("Error handling file upload and creating listing:", error);
    return { error: "Failed to create listing with image" };
  }
};
