import React from "react";
import { Accordion, Box, HStack, Span, Text, VStack } from "@chakra-ui/react";
import TitleSubheading from "./luxeComponents/Text/titleSubheading";

const faqs = [
  {
    question: "What services does your Airbnb management offer?",
    answer:
      "At Luxe Managements, we offer end-to-end Airbnb and short-stay property management. From creating standout listings and handling all guest communication, to dynamic pricing, professional cleaning, hotel-quality linen, and round-the-clock maintenance — we take care of everything so you can enjoy stress-free passive income. Our service is tailored to deliver a seamless, high-end hosting experience.",
  },
  {
    question: "How do you help maximize rental income?",
    answer:
      "We use real-time market data and advanced pricing tools to ensure your property is always listed at the optimal rate. Combined with high-converting listings, professional photography, and multi-platform exposure across Airbnb, Booking.com, and more, our strategies regularly boost income by up to 40%. Higher occupancy, better reviews, and premium nightly rates that's the Luxe difference.",
  },
  {
    question: "What types of properties do you manage?",
    answer:
      "Luxe specializes in managing a diverse portfolio of short-term rental properties, including stylish city apartments, family homes, luxury holiday stays, and boutique accommodations. Whether you’re in Adelaide or surrounding regions, we tailor our service to suit your property type and investment goals.",
  },
  {
    question: "How does the linen and amenity service work?",
    answer:
      "We provide premium linen and amenity packages for every guest stay. Think crisp white sheets, plush towels, high-thread-count bedding, and luxury toiletries — all refreshed and professionally laundered between bookings. Our goal is to elevate the guest experience to five-star hotel standards, every time.",
  },
  {
    question: "How can I get started with your services?",
    answer:
      "Getting started with Luxe is simple. Book a free consultation with our team — we’ll inspect your property, provide income projections, and walk you through the onboarding process. From there, we handle everything: staging, photography, listings, guest communication, and ongoing operations. You relax — we do the work.",
  },
  {
    question: "What happens if there's an emergency at my property?",
    answer:
      "We offer 24/7 incident response and property oversight. Whether it’s a late-night lockout or a maintenance issue, our local team is on-call and ready to act immediately. With Luxe, your property is always protected — and your guests are always looked after.",
  },
  {
    question: "Do you handle property marketing?",
    answer:
      "Absolutely. First impressions matter, and our in-house marketing team ensures your property stands out with professional photography, compelling copywriting, and strategic placement across high-traffic platforms. We showcase your home’s best features to attract premium bookings and enhance long-term visibility.",
  },
];
const FAQ = () => {
  return (
    <>
      <TitleSubheading
        title={"FAQ"}
        subheading={"Frequently Asked Questions"}
      />
      <Accordion.Root
        mt={"50px"}
        fontFamily={"raleway"}
        collapsible
        defaultValue={["b"]}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
      >
        {faqs.map((item, index) => (
          <Accordion.Item key={index} value={item.question}>
            <Accordion.ItemTrigger
              display="flex"
              alignItems="start"
              justifyContent={"start"}
              textAlign={"start"}
              py="4"
              _hover={{ bg: "gray.50" }}
            >
              <Span
                ml={"10px"}
                flex="1"
                fontWeight={"600"}
                fontSize={["18px", "18px", "18px", "18px", "18px", "18px"]}
              >
                {item.question}
              </Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>

            <Accordion.ItemContent>
              <Accordion.ItemBody
                ml={"10px"}
                fontSize={["18px", "18px", "18px", "18px", "18px", "18px"]}
              >
                {item.answer}
              </Accordion.ItemBody>
            </Accordion.ItemContent>
            <Box
              _hover={{ bg: "gray.50" }}
              borderBottom={"1px solid"}
              borderColor="gray.100"
            ></Box>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  );
};

export default FAQ;
