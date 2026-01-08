import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const path = usePathname();

  let navString;

  const counterLetter = item.label.slice(-1);
  if (counterLetter === "s") {
    navString = item.label.toLowerCase().substring(item.label.length - 1, -1);
  } else {
    navString = item.label.toLowerCase();
  }

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : undefined}
        className={`flex items-center justify-between w-full py-2 px-3 text-black rounded-md dark:text-white/60 focus:outline-hidden  ${
          path.startsWith(`/${navString}`) ? "bg-primary! text-white!" : null
        } ${path === item.href ? "bg-primary! text-white! " : ""}`}
      >
        {item.label}
      </Link>
    </div>
  );
};

export default MobileHeaderLink;
