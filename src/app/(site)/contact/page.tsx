import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import Volunteer from "@/components/SharedComponent/Volunteer";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import GrowWithUsSection from "@/components/Home/GrowWithUs";
export const metadata: Metadata = {
  title: "Contact | Mhatre-Hitech",
};

const page = () => {
  return (
    <>
      <HeroSub
        title="Contact Us"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      <ContactInfo />
      <GrowWithUsSection />
      <Location />
      <WhyChooseUs />
      {/* <Volunteer /> */}
    </>
  );
};

export default page;
