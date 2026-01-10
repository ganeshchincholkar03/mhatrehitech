"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const HomeAbout = () => {
  const historyPoints = [
    {
      year: "2010",
      title: "The Beginning",
      desc: "Inception of Mhatre Hitech with a vision for industrial excellence.",
    },
    {
      year: "2012",
      title: "Scaling Up",
      desc: "Became pioneers in sheet metal fabrication within just 2 years.",
    },
    {
      year: "2024",
      title: "Global Partner",
      desc: "Now an extension of success for global clients and energy sectors.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-darkmode">
      <div className="max-w-7xl mx-auto px-4">
        {/* PART 1: TOP OVERVIEW */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/images/banner/banner2.jpg"
                alt="Factory Work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating Stat Card */}
              <div className="absolute top-10 right-10 bg-primary p-6 rounded-3xl shadow-xl text-white text-center">
                <p className="text-4xl font-black italic">14+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">
                  Years Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm">
              Welcome to Mhatre Hitech
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-midnight_text dark:text-white leading-tight">
              We Are An Extension <br /> Of Your{" "}
              <span className="text-primary">Success.</span>
            </h2>
            <p className="text-muted dark:text-slate-400 text-lg leading-relaxed">
              Since our inception in 2010, we've provided "One-Stop Solutions"
              that reduce lead-times and improve quality. We don't just supply;
              we partner with you to increase your bottom line through
              innovative manufacturing.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <Link
                href="/about"
                className="group flex items-center gap-3 text-midnight_text dark:text-white font-bold uppercase tracking-widest text-sm"
              >
                Learn More
                <span className="w-10 h-10 rounded-full bg-grey dark:bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon icon="solar:arrow-right-linear" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* PART 2: BRIEF HISTORY (TIMELINE) */}
        <div className="bg-grey dark:bg-darklight rounded-[40px] p-8 md:p-12 border border-border dark:border-dark_border">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-primary/30 -z-0"></div>

            {historyPoints.map((point, idx) => (
              <div
                key={idx}
                className="relative z-10 text-center space-y-4 group"
              >
                <div className="w-16 h-16 bg-white dark:bg-darkmode rounded-full border-4 border-primary flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-primary font-black text-sm">
                    {point.year}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-midnight_text dark:text-white pt-2">
                  {point.title}
                </h4>
                <p className="text-muted dark:text-slate-400 text-sm max-w-[250px] mx-auto">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PART 3: OTHER IDEAS (CORE VALUES STRIP) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            {
              icon: "solar:settings-minimalistic-bold",
              title: "Precision",
              label: "0.1mm Accuracy",
            },
            {
              icon: "solar:clock-circle-bold",
              title: "Speed",
              label: "Low Lead-Times",
            },
            {
              icon: "solar:global-bold",
              title: "Global",
              label: "Export Standards",
            },
            {
              icon: "solar:medal-ribbon-bold",
              title: "Quality",
              label: "ISO Certified",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="text-3xl text-primary group-hover:scale-125 transition-transform duration-300">
                <Icon icon={item.icon} />
              </div>
              <div>
                <p className="text-midnight_text dark:text-white font-bold leading-none">
                  {item.title}
                </p>
                <p className="text-[10px] text-muted dark:text-slate-500 uppercase font-bold tracking-tighter">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
