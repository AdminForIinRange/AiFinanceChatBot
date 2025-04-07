// lib/appwrite/config.ts
import { getEnvVariable } from "@/lib/getEnvVariable";

export const appwriteConfig = {
  endpointUrl: getEnvVariable("NEXT_PUBLIC_APPWRITE_ENDPOINT"),
  projectId: getEnvVariable("NEXT_PUBLIC_APPWRITE_PROJECT"),
  databaseId: getEnvVariable("NEXT_PUBLIC_APPWRITE_DATABASE"),
  usersCollectionId: getEnvVariable("NEXT_PUBLIC_APPWRITE_USERS_COLLECTION"),
  listingsCollectionId: getEnvVariable("NEXT_PUBLIC_APPWRITE_LISTINGS_COLLECTION"),
  bucketId: getEnvVariable("NEXT_PUBLIC_APPWRITE_BUCKET"),
  secretKey: getEnvVariable("NEXT_APPWRITE_KEY"),
};

