import React, { FC } from "react";
import Link from "next/link";
import Logo from "../Header/Logo";
import { footerLinks } from "@/app/api/data";
import { Button } from "@material-tailwind/react";

const Footer: FC = () => {
  return (
    <footer className="pt-16 dark:bg-dark bg-[url(https://mhatrehitech.com/backend/images/dots.png)]">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 pb-10">
          {/* ===== COMPANY INFO ===== */}
          <div className="lg:col-span-3 md:col-span-4 col-span-12">
            <Logo />
            <p className="mt-6 text-sm leading-relaxed text-muted dark:text-white/60">
              A young and dynamic organization with an experienced team of
              design engineers and professionals committed to delivering
              world‑class manufacturing services.
            </p>
          </div>

          {/* ===== QUICK LINKS ===== */}
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <h4 className="text-base font-semibold text-midnight_text dark:text-white mb-5">
              Quick Links
            </h4>
            <ul className="pl-5">
              {footerLinks.slice(0, 5).map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    href="#"
                    className="text-sm relative text-muted dark:text-white/60 hover:text-primary transition
                    before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2
                    before:top-1 before:-left-5 before:rotate-45 hover:before:border-primary"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== OUR SERVICES (SUGGESTED) ===== */}
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <h4 className="text-base font-semibold text-midnight_text dark:text-white mb-5">
              Products
            </h4>
            <ul className="space-y-4 flex flex-col items-start justify-center text-sm text-muted dark:text-white/60">
              <Link
                href="#"
                className="text-sm relative text-muted dark:text-white/60 hover:text-primary transition
                    before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2
                    before:top-1 before:-left-5 before:rotate-45 hover:before:border-primary"
              >
                Bending
              </Link>
              <Link
                href="#"
                className="text-sm relative text-muted dark:text-white/60 hover:text-primary transition
                    before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2
                    before:top-1 before:-left-5 before:rotate-45 hover:before:border-primary"
              >
                Laser Cutting
              </Link>
              <Link
                href="#"
                className="text-sm relative text-muted dark:text-white/60 hover:text-primary transition
                    before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2
                    before:top-1 before:-left-5 before:rotate-45 hover:before:border-primary"
              >
                Plastic Coating
              </Link>
              <Link
                href="#"
                className="text-sm relative text-muted dark:text-white/60 hover:text-primary transition
                    before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2
                    before:top-1 before:-left-5 before:rotate-45 hover:before:border-primary"
              >
                Powder Coating
              </Link>
              <Link
                href="#"
                className="text-sm relative text-muted dark:text-white/60 hover:text-primary transition
                    before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2
                    before:top-1 before:-left-5 before:rotate-45 hover:before:border-primary"
              >
                Press Parts
              </Link>
              <Link
                href="#"
                className="text-sm relative text-muted dark:text-white/60 hover:text-primary transition
                    before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2
                    before:top-1 before:-left-5 before:rotate-45 hover:before:border-primary"
              >
                Sheet Metal Works
              </Link>
              <Link
                href="#"
                className="text-sm relative text-muted dark:text-white/60 hover:text-primary transition
                    before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2
                    before:top-1 before:-left-5 before:rotate-45 hover:before:border-primary"
              >
                Fabrication & Assembly
              </Link>
              <Link
                href="#"
                className="text-sm relative text-muted dark:text-white/60 hover:text-primary transition
                    before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2
                    before:top-1 before:-left-5 before:rotate-45 hover:before:border-primary"
              >
                Painting & Protective
              </Link>
            </ul>
          </div>

          {/* ===== GET IN TOUCH ===== */}
          <div className="lg:col-span-3 md:col-span-4 col-span-12">
            <h4 className="text-base font-semibold text-midnight_text dark:text-white mb-5">
              Get In Touch
            </h4>

            <div className="space-y-4 text-sm">
              <Link
                href="tel:+919226358377"
                className="block text-muted dark:text-white/60 hover:text-primary transition"
              >
                📞 +91 92263 58377
              </Link>

              <Link
                href="mailto:info@mhatrehitech.com"
                className="block text-muted dark:text-white/60 hover:text-primary transition"
              >
                ✉️ info@mhatrehitech.com
              </Link>
              <Link
                href="tel:+91-9226358377"
                // className="block text-muted dark:text-white/60 hover:text-primary transition"
              >
                <Button
                  className=" ring-1 ring-primary hover:bg-primary hover:text-white delay-75"
                  variant="outline"
                >
                  Get a Quote ?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-border dark:border-dark_border">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 py-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-sm text-midnight_text dark:text-white text-center lg:text-left">
            © {new Date().getFullYear()} Mhatre Hitech (India) Pvt. Ltd. All
            Rights Reserved.
          </p>

          <p className="text-sm text-muted dark:text-white/60">
            Design by{" "}
            <Link
              href="https://impulsebiz.com"
              target="_blank"
              className="font-semibold hover:text-primary transition"
            >
              ImpulseBiz
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
