"use client";

import Link from "next/link";
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

  // Sticky header for desktop
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
  }, [navbarOpen]);

  // Click outside mobile drawer
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
      {/* ================= MOBILE HEADER (always visible on mobile) ================= */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-50 bg-white dark:bg-dark px-4 py-2 flex items-center justify-between shadow">
        <Logo />
        <button onClick={() => setNavbarOpen(true)} className="p-2">
          <span className="block w-6 h-0.5 bg-black dark:bg-white" />
          <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5" />
          <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5" />
        </button>
      </div>

      {/* Add top padding to content on mobile so it doesn't hide under mobile header */}
      {/* You can do this in layout.tsx: <main className="pt-12 lg:pt-0"> */}

      {/* ================= DESKTOP HEADER (Top bar + Main nav) ================= */}
      <header
        className={`
          hidden lg:block w-full z-50
          transition-all duration-400 ease-in-out
          ${
            sticky
              ? "fixed top-0 left-0 shadow-md dark:shadow-darkmd backdrop-blur-xl bg-white/80 dark:bg-dark/80"
              : "static bg-transparent"
          }
        `}
      >
        {/* TOP BAR */}
        <div className="bg-midnight_text text-white">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            {/* COMPANY ADDRESS */}
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

            {/* TIMING WITH LOTTIE */}
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
        <div className="bg-white/60 dark:bg-dark/60 backdrop-blur-md">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Logo />

              {/* NAV LINKS */}
              <div className="flex items-center gap-2">
                {headerData.map((item, index) => (
                  <HeaderLink key={index} item={item} />
                ))}
              </div>

              {/* CONTACT INFO */}
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
                </div>
              </div>
              {/* END CONTACT INFO */}
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY & DRAWER ================= */}
      {navbarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setNavbarOpen(false)}
        />
      )}

      <aside
        ref={mobileMenuRef}
        className={`
          fixed top-0 right-0 h-screen w-full max-w-xs
          bg-slate-50 dark:bg-dark shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${navbarOpen ? "translate-x-0" : "translate-x-full"}
          z-50 lg:hidden
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-bold">Menu</h2>
            <button onClick={() => setNavbarOpen(false)}>✕</button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Header;
