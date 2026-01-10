import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { services } from "@/app/api/data";
import { format } from "date-fns";

const ServiceList = () => {
  return (
    <section className="lg:py-28 py-16 bg-grey dark:bg-darkmode">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight_text dark:text-white mb-4">
            What We Offer
          </h2>
          <p className="text-muted dark:text-slate-300 text-base max-w-2xl mx-auto">
            We provide end-to-end manufacturing, engineering, and finishing
            services to help you build better, faster, and smarter.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {services.map((item, index) => (
            <Link
              key={index}
              href={`/services/${item.slug}`}
              className="group bg-white dark:bg-darklight border border-border dark:border-dark_border rounded-2xl shadow-cause-shadow hover:shadow-darkmd transition-shadow duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={220}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h4 className="text-lg font-semibold mb-3 text-midnight_text dark:text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted dark:text-slate-300 text-base mb-6 flex-1">
                  {item.text}
                </p>
                <span className="text-primary hover:text-darkprimary text-base font-medium flex gap-2 items-center w-fit mt-auto transition-colors">
                  Learn More
                  <Icon
                    icon="solar:arrow-right-linear"
                    width="20"
                    height="20"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
