import React, { FC } from "react";
import Link from "next/link";

interface HeroSubProps {
  title: string;
  breadcrumb?: { label: string; href: string }[]; // Optional: for breadcrumbs
}

const HeroSub: FC<HeroSubProps> = ({ title, breadcrumb }) => {
  return (
    <section className="relative py-32 md:py-40 bg-[url('/images/banner/banner2.jpg')] bg-no-repeat bg-cover flex items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      {/* Soft blob */}
      <div className="pointer-events-none absolute left-[-80px] top-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative z-10 w-full">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Breadcrumb (optional) */}
          {breadcrumb && (
            <nav className="mb-4 flex items-center gap-2 text-sm text-white/80">
              {breadcrumb.map((item, idx) => (
                <React.Fragment key={item.href}>
                  <span className="mx-1">/</span>
                  {idx === breadcrumb.length - 1 ? (
                    <span className="text-primary">{item.label}</span>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
          <h2
            className="text-white md:text-5xl text-3xl font-bold drop-shadow-lg"
            data-aos="fade-right"
          >
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSub;
