"use client";

import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    bg: "/images/banner/banner1.jpg",
    badge: "ISO Certified",
    title: "Mhatre Hitech (India) Pvt. Ltd.",
    subtitle: "Precision Manufacturing • Fabrication • Industrial Solutions",
    desc: `We deliver world-class metal fabrication, welding, and manufacturing solutions with unmatched quality, reliability, and engineering expertise.`,
    primaryCta: "Our Services",
    primaryHref: "/services",
    secondaryCta: "Contact Us",
    secondaryHref: "/contact",
  },
  {
    bg: "/images/banner/banner2.jpg",
    badge: "Since 2010",
    title: "Advanced Metal Fabrication",
    subtitle: "Strength • Precision • Performance",
    desc: `From heavy structural fabrication to customized industrial components, we engineer products that last longer and perform better.`,
    primaryCta: "View Capabilities",
    primaryHref: "/services",
    secondaryCta: "Get Quote",
    secondaryHref: "/contact",
  },
  {
    bg: "/images/banner/banner3.jpg",
    badge: "Trusted Partner",
    title: "Engineering Excellence",
    subtitle: "Built for Industrial Success",
    desc: `We partner with industries across India to deliver cost-effective, high-precision manufacturing solutions on time, every time.`,
    primaryCta: "Industries We Serve",
    primaryHref: "/industries",
    secondaryCta: "Contact Team",
    secondaryHref: "/contact",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 4500,
    fade: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
  };

  return (
    <section className="relative overflow-hidden bg-darkmode text-white">
      <Slider {...settings} className="hero-slider">
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative min-h-[520px] lg:min-h-[640px] flex items-center">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.bg})` }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/30" />

              {/* Soft color blobs */}
              <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
              <div className="pointer-events-none absolute right-[-80px] bottom-[-80px] h-72 w-72 rounded-full bg-secondary/25 blur-3xl" />

              {/* Content */}
              <div className="relative max-w-7xl mx-auto px-4">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-center">
                  {/* Left: main copy */}
                  <div className="max-w-xl">
                    {/* Badge */}
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-5">
                      {slide.badge}
                    </span>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-3">
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <h2 className="text-sm sm:text-base lg:text-lg font-medium text-slate-200 mb-4">
                      {slide.subtitle}
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                      {slide.desc}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={slide.primaryHref}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white text-sm font-semibold shadow-cause-shadow hover:bg-darkprimary transition-colors"
                      >
                        {slide.primaryCta}
                      </Link>
                      <Link
                        href={slide.secondaryHref}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/70 text-white text-sm font-semibold hover:bg-white hover:text-midnight_text transition-colors"
                      >
                        {slide.secondaryCta}
                      </Link>
                    </div>
                  </div>

                  {/* Right: compact glass card (hidden on small screens) */}
                  <div className="hidden md:block">
                    <div className="max-w-sm ml-auto rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 lg:p-7 shadow-darkmd">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                        Why Choose Us
                      </p>
                      <ul className="space-y-3 text-sm text-slate-100">
                        <li className="flex gap-3">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>
                            ISO-certified processes and stringent quality
                            checks.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>
                            End‑to‑end metal fabrication and finishing in one
                            facility.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>
                            Experienced engineering team focused on timely
                            delivery.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>
                            Long‑term partnerships with leading industrial
                            clients.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional bottom gradient to make dots visible */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
