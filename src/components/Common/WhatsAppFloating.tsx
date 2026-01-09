"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const WhatsAppFloating = () => {
  const phoneNumber = "+91-9226358377"; // change this
  const message = "Hello, I want to know more about your services";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed z-9999
        bottom-4 left-4
        sm:bottom-6 sm:right-6
        w-12 h-12
        rounded-full
        bg-green-500
        shadow-xl
        hover:scale-110
        active:scale-95
        transition-transform duration-300
      "
    >
      <DotLottieReact
        src="/images/lotties/whats_app.json"
        loop
        className="w-full h-full"
      />
    </a>
  );
};

export default WhatsAppFloating;
