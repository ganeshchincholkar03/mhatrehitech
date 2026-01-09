"use client";

import { HiUsers, HiCheckBadge, HiCpuChip, HiClock } from "react-icons/hi2";

const features = [
  {
    title: "Professional Team",
    icon: HiUsers,
  },
  {
    title: "Certified Engineers",
    icon: HiCheckBadge,
  },
  {
    title: "Latest Technology",
    icon: HiCpuChip,
  },
  {
    title: "24/7 Support",
    icon: HiClock,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#0b1b4b] to-[#060f2e]">
      {/* Decorative blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-primary font-semibold tracking-wider mb-3">
            OUR FEATURES
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Why Choose Us
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            We deliver reliable, high-quality fabrication solutions backed by
            skilled professionals, modern infrastructure, and a commitment to
            excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(53,125,243,0.25)]"
            >
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <item.icon className="h-8 w-8" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
