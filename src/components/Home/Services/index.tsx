"use client";

import { cardsData } from "@/components/Common/cardsData";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-primary font-bold uppercase tracking-widest mb-2">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-midnight_text dark:text-white mb-4">
            Industry Solutions
          </h2>
          <p className="text-muted dark:text-slate-400 text-base">
            Delivering reliable and scalable solutions tailored to modern
            industry needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="
                group relative rounded-2xl border border-slate-200/60 dark:border-white/10
                bg-white/80 dark:bg-darklight/80 backdrop-blur-md
                shadow-cause-shadow transition-all duration-300
                hover:-translate-y-2 hover:shadow-darkmd hover:ring-2 hover:ring-primary/40
                flex flex-col
              "
            >
              {/* 100% Trusted Badge */}
              <div className="absolute -top-4 left-4 z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-primary text-white text-xs font-bold shadow-lg tracking-widest uppercase">
                  100% Trusted
                </span>
              </div>

              {/* Image */}
              <div className="relative h-44 overflow-hidden rounded-t-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Optional overlay for glass effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-6 pt-10">
                <h3 className="text-lg font-bold text-midnight_text dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted dark:text-slate-400 leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                <Link
                  href={card.href || "#"}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:underline transition-colors"
                >
                  Learn More
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
