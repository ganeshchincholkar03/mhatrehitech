"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderItem } from "../../../../types/menu";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const pathname = usePathname();

  let navString;
  const lastLetter = item.label.slice(-1);
  if (lastLetter === "s") {
    navString = item.label.toLowerCase().slice(0, -1);
  } else {
    navString = item.label.toLowerCase();
  }

  const isActive =
    pathname === item.href || pathname.startsWith(`/${navString}`);

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
};

export default HeaderLink;
