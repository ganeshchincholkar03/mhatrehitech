import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react"; // or use any down arrow icon

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  // For active highlighting
  let navString;
  const lastLetter = item.label.slice(-1);
  if (lastLetter === "s") {
    navString = item.label.toLowerCase().slice(0, -1);
  } else {
    navString = item.label.toLowerCase();
  }
  const isActive = path === item.href || path.startsWith(`/${navString}`);

  // If no submenu, render as a simple link
  if (!item.submenu) {
    return (
      <Link
        href={item.href}
        className={`flex items-center w-full py-2 px-3 rounded-md text-base font-medium transition-colors
          ${
            isActive
              ? "bg-primary text-white"
              : "text-black dark:text-white/80 hover:bg-primary/10"
          }
        `}
      >
        {item.label}
      </Link>
    );
  }

  // If submenu, render with expand/collapse
  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setSubmenuOpen((v) => !v)}
        className={`flex items-center justify-between w-full py-2 px-3 rounded-md text-base font-medium transition-colors
          ${
            isActive
              ? "bg-primary text-white"
              : "text-black dark:text-white/80 hover:bg-primary/10"
          }
        `}
        aria-expanded={submenuOpen}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`ml-2 w-5 h-5 transition-transform ${
            submenuOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {submenuOpen && (
        <div className="pl-4 mt-1 space-y-1">
          {item.submenu.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors
                ${
                  path === sub.href
                    ? "bg-primary text-white"
                    : "text-black dark:text-white/80 hover:bg-primary/10"
                }
              `}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
