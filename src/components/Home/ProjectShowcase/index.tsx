"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    id: 1,
    title: "aftermarket_products",
    image: "/images/new-images/aftermarket_products/img-1.jpg",
    number: "03.",
    description: "Powder Coating Projects",
    link: "#",
  },
  {
    id: 2,
    title: "Aluminium Parts",
    image: "/images/new-images/aluminium_parts/img-1.jpg",
    number: "04.",
    description: "Aluminium Parts Projects",
    link: "#",
  },
  {
    id: 3,
    title: "Battery Case",
    image: "/images/new-images/battery_case/img-1.jpg",
    number: "05.",
    description: "Battery Case Projects",
    link: "#",
  },
  {
    id: 4,
    title: "Battery Tray",
    image: "/images/new-images/battery_tray/img-4.jpg",
    number: "06.",
    description: "Battery Tray Projects",
    link: "#",
  },
  {
    id: 5,
    title: "Chasis",
    image: "/images/new-images/chasis/img-1.jpg",
    number: "06.",
    description: "Chasis Projects",
    link: "#",
  },
  {
    id: 6,
    title: "Electric Products",
    image: "/images/new-images/electric_products/img-1.jpg",
    number: "06.",
    description: "Electric Products Projects",
    link: "#",
  },
  {
    id: 7,
    title: "Electric Vehicles",
    image: "/images/new-images/electric_vehicles/img-2.jpg",
    number: "06.",
    description: "Electric Vehicles Projects",
    link: "#",
  },
  {
    id: 8,
    title: "Electrical Panel",
    image: "/images/new-images/electrical_panel/img-1.jpg",
    number: "06.",
    description: "Electrical Panel Projects",
    link: "#",
  },
  {
    id: 9,
    title: "Export Products",
    image: "/images/new-images/export_products/img-1.jpg",
    number: "06.",
    description: "Export Products Projects",
    link: "#",
  },
  {
    id: 10,
    title: "Featured Project Slider",
    image: "/images/new-images/featured-project-slider/img_1.jpeg",
    number: "06.",
    description: "Featured Project Slider Projects",
    link: "#",
  },
  {
    id: 11,
    title: "High Mast Lighting",
    image: "/images/new-images/high_mast_lighting/img-1.jpg",
    number: "06.",
    description: "High Mast Lighting Projects",
    link: "#",
  },
  {
    id: 12,
    title: "Laser Bending Parts",
    image: "/images/new-images/laser_bending_parts/img-1.jpg",
    number: "06.",
    description: "Laser Bending Parts Projects",
    link: "#",
  },
];

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function ProjectShowcase() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-primary font-medium mb-2">Featured Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Explore What We&apos;ve Done
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Everything is theoretically impossible, until it is done.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-2">
              <div className="relative group h-[320px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Overlay
                    - Visible by default on mobile (opacity-100)
                    - On >=640px: hidden until hover (sm:opacity-0 sm:group-hover:opacity-100)
                */}
                <div
                  className="
                    absolute inset-0 flex flex-col justify-center items-center text-center
                    bg-slate-900/70 text-white
                    opacity-100
                    sm:opacity-0 sm:group-hover:opacity-100
                    transition-opacity duration-300
                  "
                >
                  <div>
                    <div className="text-3xl font-bold mb-2">
                      {project.number}
                    </div>
                    <div className="text-xl font-semibold mb-2">
                      {project.description}
                    </div>
                    <a
                      href={project.link}
                      className="inline-block mt-4 px-6 py-2 bg-primary text-white font-bold rounded shadow hover:bg-darkprimary transition"
                    >
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
