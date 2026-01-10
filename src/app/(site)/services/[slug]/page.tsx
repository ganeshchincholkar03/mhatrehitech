"use client";
import Volunteer from "@/components/SharedComponent/Volunteer";
import ServiceDetails from "@/components/Services/ServiceDetails";
import { useParams } from "next/navigation";
import { services } from "@/app/api/data"; // <-- Make sure this path is correct!
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import NotFound from "@/components/NotFound";

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-20 text-xl text-error">
        <NotFound />
      </div>
    );
  }

  return (
    <>
      <ServiceDetails
        title={service.title}
        image={service.image}
        text={service.text}
        specs={service.specs}
        features={service.features}
        fullDescription={service.fullDescription}
      />
      {/* <Volunteer /> */}
      <WhyChooseUs />
    </>
  );
};

export default ServicePage;
