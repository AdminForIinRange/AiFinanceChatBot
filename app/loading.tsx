// app/services/loading.js

"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="border-t-[60px] border-red-500 border-solid w-32 h-32 rounded-full animate-spin"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
