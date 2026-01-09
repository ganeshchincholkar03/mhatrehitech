import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Causes from "@/components/Home/Causes";
import FutureEvents from "@/components/Home/FutureEvents";
import UrgentDonation from "@/components/Home/UrgentDonation";
import Newsletter from "@/components/Home/NewsLetter";
import Testimonial from "@/components/Home/Testimonial";
import Volunteer from "@/components/SharedComponent/Volunteer";
import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import ProjectShowcase from "@/components/Home/ProjectShowcase";
import GrowWithUsSection from "@/components/Home/GrowWithUs";
import TeamSection from "@/components/Home/TeamSection";
export const metadata: Metadata = {
  title: "Mhatre Hitech",
};

export default function Home() {
  return (
    <main className="relative overflow-hidden scroll-smooth">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_50%)]" />

      <Hero />
      <Services />
      {/* <Causes /> */}
      {/* <FutureEvents /> */}
      {/* <UrgentDonation /> */}
      {/* <Newsletter /> */}
      <ProjectShowcase />
      <TeamSection />
      <Testimonial />
      {/* <Volunteer /> */}
      <GrowWithUsSection />
      <WhyChooseUs />
    </main>
  );
}
