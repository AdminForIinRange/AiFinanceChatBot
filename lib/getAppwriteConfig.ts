// lib/appwrite/getAppwriteConfig.ts
import { unstable_noStore as noStore } from "next/cache";

export function getAppwriteConfig() {
  // Prevent static caching
  noStore();

  const endpointUrl = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE;
  const usersCollectionId = process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION;
  const listingsCollectionId = process.env.NEXT_PUBLIC_APPWRITE_LISTINGS_COLLECTION;
  const realUsersCollectionId = process.env.NEXT_PUBLIC_APPWRITE_REAL_USERS_COLLECTION;
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET;
  const secretKey = process.env.NEXT_APPWRITE_KEY;

  if (
    !endpointUrl ||
    !projectId ||
    !databaseId ||
    !usersCollectionId ||
    !listingsCollectionId ||
    !bucketId ||
    !secretKey
  ) {
    throw new Error("One or more required Appwrite environment variables are missing.");
  }

  return {
    endpointUrl,
    projectId,
    databaseId,
    usersCollectionId,
    listingsCollectionId,
    realUsersCollectionId,
    bucketId,
    secretKey,
  };
}
