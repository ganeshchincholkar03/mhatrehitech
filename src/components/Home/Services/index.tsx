"use client";

import { cardsData } from "@/components/Common/cardsData";

const Services = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-primary font-medium mb-2">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-4">
            Industry Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Delivering reliable and scalable solutions tailored to modern
            industry needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="
                group rounded-xl border border-slate-200/60 dark:border-white/10
                bg-white/60 dark:bg-white/5 backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md hover:ring-1 hover:ring-primary
              "
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden rounded-t-xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
