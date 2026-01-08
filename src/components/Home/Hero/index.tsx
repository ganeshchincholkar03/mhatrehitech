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
    desc: `We deliver world-class metal fabrication, welding, and manufacturing
    solutions with unmatched quality, reliability, and engineering expertise.`,
    primaryCta: "Our Services",
    secondaryCta: "Contact Us",
  },
  {
    bg: "/images/banner/banner2.jpg",
    badge: "Since 2010",
    title: "Advanced Metal Fabrication",
    subtitle: "Strength • Precision • Performance",
    desc: `From heavy structural fabrication to customized industrial components,
    we engineer products that last longer and perform better.`,
    primaryCta: "View Capabilities",
    secondaryCta: "Get Quote",
  },
  {
    bg: "/images/banner/banner3.jpg",
    badge: "Trusted Partner",
    title: "Engineering Excellence",
    subtitle: "Built for Industrial Success",
    desc: `We partner with industries across India to deliver cost-effective,
    high-precision manufacturing solutions on time, every time.`,
    primaryCta: "Industries We Serve",
    secondaryCta: "Contact Team",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="relative min-h-screen bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="relative container mx-auto px-4">
                <div className="max-w-3xl text-white">
                  {/* Badge */}
                  <span className="inline-block mb-4 px-4 py-1 text-xs tracking-wider uppercase rounded-full bg-primary/90">
                    {slide.badge}
                  </span>

                  {/* Title */}
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <h2 className="text-base sm:text-lg lg:text-xl font-medium text-gray-200 mb-4">
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
                    {slide.desc}
                  </p>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/services"
                      className="px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-darkprimary transition"
                    >
                      {slide.primaryCta}
                    </Link>
                    <Link
                      href="/contact"
                      className="px-6 py-3 border border-white/70 text-white text-sm font-semibold rounded-xl hover:bg-white hover:text-black transition"
                    >
                      {slide.secondaryCta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
