"use client";
import {
  motion,
  MotionProps,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

// * based on: https://gist.github.com/coleturner/34396fb826c12fbd88d6591173d178c2
import { useEffect, useRef, useState } from "react";
export function throttle(fn: (...args: any[]) => any, wait: number) {
  let shouldWait = false;

  return function throttledFunction(this: any, ...args: any[]) {
    if (!shouldWait) {
      fn.apply(this, args);
      shouldWait = true;
      setTimeout(() => (shouldWait = false), wait);
    }
  };
}
export const items = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1584043204475-8cc101d6c77a?q=80&w=1200&auto=format",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  },

  {
    id: 7,
    url: "https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&w=1200&auto=format",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
  },

  {
    id: 91,
    url: "https://images.unsplash.com/photo-1709949908219-fd9046282019?q=80&w=1200&auto=format",
  },
  {
    id: 92,
    url: "https://images.unsplash.com/photo-1462989856370-729a9c1e2c91?q=80&w=1200&auto=format",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?q=80&w=1200&auto=format",
  },
];

// * based on: https://gist.github.com/coleturner/34396fb826c12fbd88d6591173d178c2
function useElementViewportPosition(ref: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
  }, []);

  return { position };
}

const slideAnimation: MotionProps = {
  variants: {
    full: { backgroundColor: "#008299" },
    partial: { backgroundColor: "#ffffff" },
  },
  initial: "partial",
  whileInView: "full",
  viewport: { amount: 1, once: false },
};

export default function index() {
  const mainRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { position } = useElementViewportPosition(mainRef);
  //   const { ref, start, end } = useRefScrollProgress(mainRef)
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress, scrollY } = useScroll();
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);

  console.log(carouselEndPosition);
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  useEffect(() => {
    window.addEventListener("scroll", () => console.log(carouselEndPosition));
  }, []);

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          (parent as HTMLElement).offsetLeft * 2;

        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
    const handleResize = throttle(resetCarouselEndPosition, 10);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section ref={mainRef}>
        <div className="mx-auto w-full " style={{ height: "400vh" }}>
          <div className="sticky top-0 flex h-screen w-full flex-col items-start justify-center overflow-hidden">
            <motion.div
              ref={carouselRef}
              className="flex gap-2 sm:gap-4"
              style={{ x }}
            >
              {items.map((item, index) => (
                <motion.div
                  {...slideAnimation}
                  key={item.id}
                  className="  rounded-2xl group relative size-[450px] overflow-hidden bg-neutral-200 sm:size-[250px] md:size-[450px] lg:size-[600px] "
                >
                  <motion.img
                    key={item.id}
                    className="size-full shrink-0 object-cover rounded-2xl"
                    src={item?.url}
                    alt={"img"}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
