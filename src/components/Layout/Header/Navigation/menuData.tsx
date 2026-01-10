import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Bending", href: "/services/bending" },
      { label: "Laser Cutting", href: "/services/laser-cutting" },
      { label: "Plastic Coating", href: "/services/plastic-coating" },
      { label: "Powder Coating", href: "/services/powder-coating" },
      { label: "Press Parts", href: "/services/press-parts" },
      { label: "Sheet Metal Components", href: "/services/sheet-metal-wroks" },
      {
        label: "Fabrication and Assembly",
        href: "/services/fabrication-assembly",
      },
      {
        label: "Painting and Protective Coating",
        href: "/services/painting-and-protective",
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
  { label: "Contact", href: "/contact" },
];
