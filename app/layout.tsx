import "animate.css";
import "./globals.css";

import { UserProvider } from "@/context/UserContext"; // Import your context provider
import { ListingCreationProvider } from "@/context/ListingCreationContext";
import { Provider } from "@/components/chakra-snippets/provider";
import ClientProvider from "@/components/chakra-snippets/ClientProvider";
import { Suspense } from "react";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
  title: "Luxe Management",

  description:
    "We provide comprehensive Airbnb management services, designed to deliver a hassle-free hosting experience. Our offerings include property listing creation, guest communication, pricing optimization, cleaning, and maintenance—everything you need for success. We expertly manage your property listings on top platforms like Airbnb and Booking.com, fine-tune pricing to match market demand, and ensure high occupancy rates, resulting in an average 40% boost in rental income. From residential homes and vacation rentals to boutique apartments, we specialize in short-term rentals across Adelaide and its surrounding areas. Getting started is simple: just reach out to our team, schedule a property inspection, and we'll take care of everything from crafting your listing to managing guests and overseeing cleaning services. Plus, we offer professional marketing to elevate your property's appeal, using high-quality materials that help drive more bookings.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Raleway:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`font-Montserrat antialiased`}
        style={{ background: "#fff", scrollBehavior: "smooth" }}
      >
        <Analytics />
        {/* Wrap with UserProvider */}{" "}
        {/* 
        <UserProvider>
          <ListingCreationProvider> */}
        <Suspense fallback={<Loading />}>
          <ClientProvider>{children}</ClientProvider>
        </Suspense>
        {/* </ListingCreationProvider>
        </UserProvider> */}
      </body>
    </html>
  );
}
