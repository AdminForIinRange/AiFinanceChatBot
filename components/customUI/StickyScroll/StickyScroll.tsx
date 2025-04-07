"use client";
import { Box } from "@mui/material";
import { ReactLenis } from "lenis/react";
export default function StickyScroll(): JSX.Element {
  return (
    <ReactLenis root>
      <main className="bg-white">
        <div className="wrapper"></div>

        <section className="text-white   w-full  ">
          <div className="grid grid-cols-12 gap-2">
            {/* left part */}
            <div className="grid gap-2 col-span-4">
              <figure className=" w-full">
                <img
                  src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className=" w-full">
                <img
                  src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className=" w-full">
                <img
                  src="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1719411182379-ffd97c1f7ebf?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
            {/* sticky part */}
            <div className="sticky top-0 h-screen w-full col-span-4 gap-2  grid grid-rows-3">
              <figure className="w-full h-full ">
                <img
                  src="https://images.unsplash.com/photo-1718969604981-de826f44ce15?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full h-full ">
                <img
                  src="https://images.unsplash.com/photo-1476180814856-a36609db0493?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 h-full w-full align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full h-full ">
                <img
                  src="https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
            {/* right part */}
            <div className="grid gap-2 col-span-4">
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1719547907790-f661a88302c2?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1599054799131-4b09c73a63cf?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1719963532023-01b573d1d584?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1719554873571-0fd6bf322bb1?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
