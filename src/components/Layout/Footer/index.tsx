import React, { FC } from "react";
import Link from "next/link";
import Logo from "../Header/Logo";
import { footerLinks } from "@/app/api/data";
import { Button } from "@material-tailwind/react";

const Footer: FC = () => {
  const menu: { id: number; label: string; href: string }[] = [
    { id: 1, label: "Bending", href: "/services/bending" },
    { id: 1, label: "Laser Cutting", href: "/services/laser-cutting" },
    { id: 1, label: "Plastic Coating", href: "/services/plastic-coating" },
    { id: 1, label: "Powder Coating", href: "/services/powder-coating" },
    { id: 1, label: "Press Parts", href: "/services/press-parts" },
    {
      id: 1,
      label: "Sheet Metal Components",
      href: "/services/sheet-metal-wroks",
    },
    {
      id: 1,
      label: "Fabrication and Assembly",
      href: "/services/fabrication-assembly",
    },
    {
      id: 1,
      label: "Painting and Protective Coating",
      href: "/services/painting-and-protective",
    },
  ];

  return (
    <footer className="pt-16 dark:bg-dark bg-[url(/images/new-images/)]">
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
                    href={item.href}
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
              {menu.map((i) => (
                <Link
                  href={i.href}
                  key={i.id}
                  className="text-sm relative text-muted dark:text-white/60 hover:text-primary transition
                    before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2
                    before:top-1 before:-left-5 before:rotate-45 hover:before:border-primary"
                >
                  {i.label}
                </Link>
              ))}
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

              <a
                href="mailto:info@mhatrehitech.com"
                className="block text-muted dark:text-white/60 hover:text-primary transition"
              >
                ✉️ info@mhatrehitech.com
              </a>
              <p className="block text-muted dark:text-white/60 hover:text-primary transition">
                🕝 Working Hours <br /> Mon – Sat : 9:00 AM – 6:00 PM
              </p>
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
              href="https://impulsebiz.in"
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
