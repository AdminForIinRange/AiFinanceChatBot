import React from "react";
// import LuxeLogo from "@/public/png/LuxeLogo.png"
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left section */}
      <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto space-y-8">
          <div className="flex items-center justify-center gap-2 mb-8"></div>
          {children}
        </div>
      </div>

      {/* Right section - Hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary p-8 flex-col justify-center items-center text-white">
        <div className="max-w-md space-y-6">
          <h2 className="text-4xl font-bold tracking-tight">
            Crib: Manage your luxury properties with ease
          </h2>
          <p className="text-primary-foreground/80">
            Streamline your property management workflow with our comprehensive
            dashboard and tools designed specifically for luxury real estate.
          </p>
          <div className="flex items-center gap-4 mt-12">
            <div className="flex -space-x-2">
              {[
                "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg",
                "https://images.pexels.com/photos/7680984/pexels-photo-7680984.jpeg",
                "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg",
                "https://images.pexels.com/photos/8519093/pexels-photo-8519093.jpeg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Avatar ${i + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-primary bg-primary-foreground/20 object-cover"
                />
              ))}
            </div>
            <p className="text-sm">
              Join <span className="font-semibold">2,000+</span> property
              managers
            </p>
          </div>
        </div>
      </div>

      {/* Footer - Only show on mobile */}
      <footer className="lg:hidden fixed bottom-0 left-0 right-0 p-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Crib . All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
