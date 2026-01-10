"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const ContactInfo = () => {
  return (
    <section className="bg-white dark:bg-darkmode pt-8 lg:pb-24 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        {/* INFO CARDS */}
        <div className="flex md:flex-row flex-col lg:items-center items-start justify-center md:gap-20 lg:gap-32 gap-10">
          {/* EMAIL CARD */}
          <div className="flex sm:flex-row flex-col items-start gap-6 group">
            <div className="bg-primary/10 dark:bg-primary/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-colors duration-300">
              <Icon
                icon="solar:letter-bold"
                className="text-primary text-3xl group-hover:text-white transition-colors"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-midnight_text dark:text-white text-2xl font-bold">
                Email Support
              </h3>
              <p className="text-muted dark:text-slate-400 max-w-xs text-base leading-relaxed">
                For business inquiries and technical support, feel free to drop
                us a line anytime.
              </p>
              <a
                href="mailto:info@mhatrehitech.com"
                className="text-primary text-lg font-semibold flex items-center gap-2 hover:text-midnight_text dark:hover:text-white transition-all"
              >
                info@mhatrehitech.com
                <Icon icon="solar:arrow-right-up-linear" />
              </a>
            </div>
          </div>

          {/* CALL CARD */}
          <div className="flex sm:flex-row flex-col items-start gap-6 group">
            <div className="bg-primary/10 dark:bg-primary/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-colors duration-300">
              <Icon
                icon="solar:phone-calling-bold"
                className="text-primary text-3xl group-hover:text-white transition-colors"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-midnight_text dark:text-white text-2xl font-bold">
                Call Us Directly
              </h3>
              <p className="text-muted dark:text-slate-400 max-w-xs text-base leading-relaxed">
                Need immediate assistance? Our support team is available Mon-Sat
                (9 AM - 6 PM).
              </p>
              <Link
                href="tel:+919226358377"
                className="text-primary text-lg font-semibold flex items-center gap-2 hover:text-midnight_text dark:hover:text-white transition-all"
              >
                +91 92263 58377
                <Icon icon="solar:arrow-right-up-linear" />
              </Link>
            </div>
          </div>
        </div>

        {/* MAP SECTION (Updated to Pune Location) */}
        <div className="mt-20 md:mt-32">
          <div className="text-center mb-10">
            <h4 className="text-midnight_text dark:text-white text-2xl font-bold mb-2">
              Find Our Facility
            </h4>
            <p className="text-muted text-sm">
              Gat No. 66, Village Ambethan, Tal- Khed, Pune - 410501
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-cause-shadow border border-border dark:border-dark_border h-[450px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.6197055664115!2d73.81464197496946!3d18.774578482368916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b505ed3b1fdd%3A0x7dbb4056ceeb1ed4!2sMhatre%20Hitech%20(india)%20pvt.%20ltd.!5e1!3m2!1sen!2sin!4v1768034339823!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
