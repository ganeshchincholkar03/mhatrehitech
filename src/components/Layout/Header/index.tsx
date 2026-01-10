"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useContext } from "react";
import { headerData } from "./Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import DonationFormContext from "@/app/context/donationContext";
import AuthDialogContext from "@/app/context/AuthDialogContext";
import { HiHome } from "react-icons/hi2";

const callUsLottie = "/images/lotties/call_us.json";
const mailUsLottie = "/images/lotties/new_mail.json";
const timeLottie = "/images/lotties/timing.json";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useContext(DonationFormContext);
  useContext(AuthDialogContext);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
  }, [navbarOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setNavbarOpen(false);
      }
    };
    if (navbarOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navbarOpen]);

  return (
    <>
      {/* ================= HEADER BLOCK (Top bar + Main nav) ================= */}
      <header
        className={`w-full z-50 transition-all duration-500 ease-in-out
      ${
        sticky
          ? "fixed top-0 left-0 shadow-md dark:shadow-darkmd backdrop-blur-xl bg-white/80 dark:bg-dark/80 opacity-100 translate-y-0"
          : "static opacity-0 -translate-y-8 lg:opacity-100 lg:translate-y-0"
      }
      `}
      >
        {/* TOP BAR */}
        <div className="hidden lg:block bg-midnight_text text-white">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3 max-w-[70%]">
              <HiHome className="text-primary text-lg shrink-0" />
              <p className="text-xs leading-snug">
                <span className="font-semibold">
                  MHATRE HITECH (INDIA) PVT. LTD.
                </span>
                <br />
                Gat No. 66, Village Ambethan, Tal- Khed, Dist.- Pune,
                Maharashtra, India, 410501
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 shrink-0">
                <DotLottieReact
                  src={timeLottie}
                  autoplay
                  loop
                  className="w-full h-full"
                />
              </div>
              <div className="leading-tight text-sm">
                <p className="text-white/70 text-xs">Working hours</p>
                <p className="font-semibold">Mon – Sat : 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAV */}
        <div className="hidden lg:block bg-white/60 dark:bg-dark/60 backdrop-blur-md">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Logo />
              <div className="flex items-center gap-2">
                {headerData.map((item, index) => (
                  <HeaderLink key={index} item={item} />
                ))}
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-6">
                  {/* EMAIL */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12">
                      <DotLottieReact
                        src={mailUsLottie}
                        autoplay
                        loop
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-muted dark:text-white/60">
                        Email us
                      </p>
                      <a
                        href="mailto:info@mhatrehitech.com"
                        className="text-sm font-semibold hover:text-primary"
                      >
                        info@mhatrehitech.com
                      </a>
                    </div>
                  </div>

                  {/* DOTTED DIVIDER */}
                  <div className="h-10 border-l border-dashed border-gray-300 dark:border-white/20" />

                  {/* CALL */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12">
                      <DotLottieReact
                        src={callUsLottie}
                        autoplay
                        loop
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-muted dark:text-white/60">
                        Call us
                      </p>
                      <Link
                        href="tel:+919226358377"
                        className="text-sm font-semibold hover:text-primary"
                      >
                        +91 92263 58377
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE HEADER */}
        <div className="lg:hidden bg-white dark:bg-dark px-4 py-2 flex items-center justify-between">
          <Logo />
          <button onClick={() => setNavbarOpen(true)} className="p-2">
            <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
          </button>
        </div>
      </header>

      {/* OVERLAY & MOBILE DRAWER (unchanged) */}
      {navbarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setNavbarOpen(false)}
        />
      )}
      <aside
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-screen w-full max-w-xs
        bg-slate-50 dark:bg-dark shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${navbarOpen ? "translate-x-0" : "translate-x-full"}
        z-50 lg:hidden`}
      >
        {/* ...mobile menu... */}
      </aside>
    </>
  );
};

export default Header;
