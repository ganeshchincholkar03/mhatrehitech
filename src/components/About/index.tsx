"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const AboutOverview: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-darkmode overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: CONTENT */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                Since Sep 2010
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-midnight_text dark:text-white leading-tight">
                One-Stop Solutions for <br />
                <span className="text-primary">Precision Engineering.</span>
              </h2>
              <p className="text-lg text-muted dark:text-slate-300 leading-relaxed italic border-l-4 border-slate-100 dark:border-white/10 pl-6">
                "We are not just a supplier; we are an extension of your
                success."
              </p>
            </div>

            <div className="space-y-4 text-muted dark:text-slate-400 leading-relaxed text-base">
              <p>
                MHATRE HITECH INDIA PVT. LTD. approaches every opportunity with
                the goal of providing our customers with{" "}
                <strong>"One Stop solutions"</strong> that reduce lead-times and
                improve quality. In just 2 years, we scaled to be a pioneer in
                sheet metal fabrication.
              </p>
              <p>
                Our vast range of welding and metal fabrication capabilities
                helps customers obtain desired results and ultimately increase
                their bottom lines. We provide flexible services in sheet metal
                fabrication and are expanding to meet Press component & Energy
                industry needs.
              </p>
            </div>

            {/* WE TAKE CARE SECTION */}
            <div className="bg-grey dark:bg-darklight p-8 rounded-3xl border border-border dark:border-dark_border space-y-6">
              <h4 className="text-xl font-bold text-midnight_text dark:text-white flex items-center gap-2">
                <Icon
                  icon="solar:shield-check-bold"
                  className="text-primary text-2xl"
                />
                WE TAKE CARE
              </h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <Icon
                    icon="solar:global-bold"
                    className="text-primary text-xl shrink-0 mt-1"
                  />
                  <p className="text-sm text-muted dark:text-slate-400">
                    <span className="font-bold text-midnight_text dark:text-white">
                      Export Standards:
                    </span>{" "}
                    Supporting all standard requirements for target markets.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Icon
                    icon="solar:box-bold"
                    className="text-primary text-xl shrink-0 mt-1"
                  />
                  <p className="text-sm text-muted dark:text-slate-400">
                    <span className="font-bold text-midnight_text dark:text-white">
                      Logistics:
                    </span>{" "}
                    Taking care of every single pallet and shipping complexity.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/services"
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-darkprimary transition-all uppercase tracking-wider text-sm"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-border dark:border-dark_border text-midnight_text dark:text-white font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all uppercase tracking-wider text-sm"
              >
                Contact With Us
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="relative">
            {/* Background Decorative Box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-3xl -z-10 hidden lg:block"></div>

            <div className="relative h-[500px] md:h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/new-images/services/SheetMetal.jpg"
                alt="Industrial Fabrication"
                fill
                className="object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-10 left-10 bg-white dark:bg-darkmode p-6 rounded-2xl shadow-xl border-l-4 border-primary">
                <p className="text-4xl font-black text-primary">14+</p>
                <p className="text-xs font-bold uppercase tracking-tighter text-midnight_text dark:text-white">
                  Years of Industrial <br /> Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
