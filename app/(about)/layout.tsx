import React, from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";


const Layout = ({ children }: { children: React.ReactNode }) => {


  return (
    <>
  
      <div>{children}</div>
      
    </>
  );
};

export default Layout;
