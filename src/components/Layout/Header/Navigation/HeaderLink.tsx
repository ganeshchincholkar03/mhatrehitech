"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderItem } from "../../../../types/menu";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // or any down arrow icon

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  let navString;
  const lastLetter = item.label.slice(-1);
  if (lastLetter === "s") {
    navString = item.label.toLowerCase().slice(0, -1);
  } else {
    navString = item.label.toLowerCase();
  }

  const isActive =
    pathname === item.href || pathname.startsWith(`/${navString}`);

  // If no submenu, render as before
  if (!item.submenu) {
    return (
      <Link
        href={item.href}
        className={`
          relative inline-flex items-center justify-center
          px-5 py-2 text-sm font-medium
          rounded-lg
          transition-all duration-300 ease-out
          whitespace-nowrap
          ring-1 ring-transparent
          hover:bg-white
          hover:ring-gray-300
          hover:shadow-sm
          ${
            isActive
              ? "bg-white ring-1 ring-gray-300 shadow-sm text-gray-900"
              : "text-gray-700 dark:text-white/80 dark:hover:bg-white/10"
          }
        `}
      >
        {item.label}
      </Link>
    );
  }

  // If submenu, render dropdown
  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      tabIndex={0}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        className={`
          relative inline-flex items-center justify-center
          px-5 py-2 text-sm font-medium
          rounded-lg
          transition-all duration-300 ease-out
          whitespace-nowrap
          ring-1 ring-transparent
          hover:bg-white
          hover:ring-gray-300
          hover:shadow-sm
          ${
            isActive
              ? "bg-white ring-1 ring-gray-300 shadow-sm text-gray-900"
              : "text-gray-700 dark:text-white/80 dark:hover:bg-white/10"
          }
        `}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className="ml-1 w-4 h-4" />
      </button>
      {/* Dropdown */}
      <div
        className={`
          absolute left-0 top-full mt-2 min-w-[220px] z-50
          bg-white dark:bg-dark border border-border dark:border-dark_border rounded-xl shadow-cause-shadow
          transition-all duration-200
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <ul className="py-2">
          {item.submenu.map((sub, idx) => (
            <li key={sub.href}>
              <Link
                href={sub.href}
                className={`
                  block px-6 py-2 text-sm font-medium
                  text-gray-700 dark:text-white/80
                  hover:bg-primary/90 hover:text-white
                  transition-colors rounded
                  ${pathname === sub.href ? "bg-primary text-white" : ""}
                `}
              >
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderLink;
