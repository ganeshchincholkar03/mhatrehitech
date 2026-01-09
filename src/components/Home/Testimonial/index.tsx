"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    review:
      "It is not only your professional approach that has always been appreciated by us, but also your personal commitment and genuineness in getting the work done in spite of all complications.",
    clientName: "Gaurav Patil",
    post: "CA (KPPM & Associates)",
    clientImg: "/images/testimonials/gaurav.jpg",
  },
  {
    review:
      "Your dedication and expertise have made a significant difference to our business.",
    clientName: "Priya Sharma",
    post: "Business Owner",
    clientImg: "/images/testimonials/priya.jpg",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,  // REMOVE this so height stays fixed
  };

  return (
    <section className="py-20 bg-[url('/images/new-images/testimonials-bg-2.png')] bg-no-repeat bg-cover dark:bg-slate-900 bg-[#f0fbff]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Owner Photo - only visible on large screens */}
        <div className="hidden lg:flex flex-1 justify-center lg:justify-start">
          <Image
            src="/images/new-images/my_images/director.png"
            alt="Owner"
            width={400}
            height={500}
            className="object-cover"
            priority
          />
        </div>

        {/* Testimonials */}
        <div className="w-full lg:w-1/2">
          <div className="mb-6 text-center lg:text-left">
            <p className="text-primary font-medium mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What People say&apos;s About us
            </h2>
          </div>

          <Slider {...settings} className="block w-full h-full">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-2 flex flex-col transition-all duration-300 mb-4"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xl text-secondary font-bold mr-2">
                    “
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 text-lg italic">
                    {item.review}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  {/* <Image
                    src={item.clientImg}
                    alt={item.clientName}
                    width={48}
                    height={48}
                    className="rounded-full object-cover border border-slate-200 dark:border-white/20"
                  /> */}
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                      {item.clientName}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.post}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
