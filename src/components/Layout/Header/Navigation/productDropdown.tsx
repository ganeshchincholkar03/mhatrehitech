"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight } from "lucide-react"; // or use any right arrow icon

const menu = [
  {
    label: "Laser Cutting",
    href: "/products/laser-cutting",
    submenu: [
      {
        label: "Sheet Metal Laser Cutting Services",
        href: "/products/laser-cutting/sheet-metal",
      },
      {
        label: "Stainless Steel Sheet Cutting Services",
        href: "/products/laser-cutting/ss-sheet",
      },
      {
        label: "Precision Laser Cutting",
        href: "/products/laser-cutting/precision",
      },
      {
        label: "Aluminium Laser Cutting Service",
        href: "/products/laser-cutting/aluminium",
      },
      // ...more
    ],
  },
  {
    label: "Column Trays",
    href: "/products/column-trays",
    submenu: [
      { label: "Column Tray Type A", href: "/products/column-trays/type-a" },
      // ...more
    ],
  },
  {
    label: "Fabrication",
    href: "/products/fabrication",
  },
  // ...more
];

export default function ProductsDropdown() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative group">
      <button className="px-4 py-2 font-bold text-white uppercase tracking-wide hover:text-primary focus:outline-none">
        PRODUCTS <span className="ml-1">&#9662;</span>
      </button>
      {/* Dropdown */}
      <div className="absolute left-0 top-full mt-2 z-50 hidden group-hover:block min-w-[260px]">
        <div className="flex shadow-2xl rounded-b-lg overflow-hidden">
          {/* Main menu */}
          <ul className="bg-[#232323] text-white py-2 min-w-[220px]">
            {menu.map((item, idx) => (
              <li
                key={item.label}
                className={`relative group/item`}
                onMouseEnter={() => setOpenIndex(idx)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <Link
                  href={item.href}
                  className={`block px-6 py-3 font-medium transition-colors ${
                    openIndex === idx
                      ? "bg-primary text-black"
                      : "hover:bg-primary/80 hover:text-black"
                  }`}
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronRight className="inline ml-2 w-4 h-4" />
                  )}
                </Link>
                {/* Submenu */}
                {item.submenu && openIndex === idx && (
                  <ul className="absolute left-full top-0 bg-[#232323] min-w-[260px] shadow-2xl">
                    {item.submenu.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          href={sub.href}
                          className="block px-6 py-3 text-white font-normal hover:bg-primary/80 hover:text-black transition-colors"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
