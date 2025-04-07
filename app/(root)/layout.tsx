// Async/Await Requirement:

// When using await, the function containing it must be declared as async. Otherwise, JavaScript will throw a syntax error.
// Issue of Missing async:

// If you forget to declare a function as async but use await inside it, the function will not behave as expected. It may lead to runtime errors or unexpected behavior, like the function skipping the try block and going directly to the catch block.
// Catch Without Try:

// In your case, the issue seems to be that the lack of async caused the promise rejection to bypass normal flow, leading to confusion about why the function immediately hit the catch block.

import React from "react";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

// import { getCurrentUser, signOutUser } from "@/lib/actions/user.actions";

// import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";
const Layout = async ({ children }: { children: React.ReactNode }) => {
  // const currentUser = await getCurrentUser();

  //--------------------------------------------
  // This line is commented out and would sign the user out if uncommented
  // await signOutUser();
  //--------------------------------------------

  // if (!currentUser) return redirect("/sign-in");

  return (
    <>

    {children}

    </>
  );
};

export default Layout;
