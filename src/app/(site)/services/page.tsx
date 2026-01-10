import HeroSub from "@/components/SharedComponent/HeroSub";
import ServiceList from "@/components/Services/ServiceList";
import Volunteer from "@/components/SharedComponent/Volunteer";
import { Metadata } from "next";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import Footer from "@/components/Layout/Footer";
export const metadata: Metadata = {
  title: "Event List | Mhatre Hitech",
};

const Page = () => {
  return (
    <>
      <HeroSub
        title="Service We Provide"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      <ServiceList />
      {/* <Volunteer /> */}
      <WhyChooseUs />
    </>
  );
};

export default Page;
