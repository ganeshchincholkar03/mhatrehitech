import React from "react";
import Link from "next/link";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <section className="bg-primary lg:py-24 py-16">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="">
            <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 border-b border-solid border-white/50 pb-11">
              <div className="col-span-3">
                <h2 className="text-white text-2xl leading-tight font-bold">
                  Pune
                  <br /> head office
                </h2>
              </div>
              <div className="col-span-3">
                <p className=" text-xl text-IceBlue font-normal max-w-64 text-white/50">
                  MHATRE HITECH (INDIA) PVT. LTD. Gat No. 66, Village Ambethan,
                  Tal- Khed, Dist.- Pune, Maharashtra, India, 410501
                </p>
              </div>
              <div className="col-span-3">
                <Link
                  href="mailto:info@mhatrehitech.com"
                  className="text-xl text-white font-medium underline"
                >
                  info@mhatrehitech.com
                </Link>
                <Link
                  href="tel:731-621-5503"
                  className="text-xl text-white/80 flex items-center gap-2 hover:text-white w-fit"
                >
                  <span className="text-white/40">Call</span>731-621-5503
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
