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
export const metadata: Metadata = {
  title: "Mhatre Hitech",
};

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_50%)]" />

      <Hero />
      <Services />
      <Causes />
      <FutureEvents />
      <UrgentDonation />
      <Newsletter />
      <Testimonial />
      <Volunteer />
    </main>
  );
}
