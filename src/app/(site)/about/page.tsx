import HeroSub from "@/components/SharedComponent/HeroSub";
import Image from "next/image";

const team = [
  {
    name: "Mr. Sandesh Mhatre",
    position: "Director",
    image: "/images/new-images/my_images/aboout-director_1.jpg",
    highlight: true,
  },
  {
    name: "Ms. Jyoti Mhatre",
    position: "Executive Director",
    image: "/images/new-images/my_images/aboout-director_2.jpg",
    highlight: true,
  },
  {
    name: "Mr. Amol Jadhav",
    position: "Plant Head",
    image: "/images/new-images/my_images/amol-jadhav.jpg",
  },
  {
    name: "Mr. Rahul Gadekar",
    position: "Sr. Business & Development Head (Unit-II)",
    image: "/images/new-images/mhatre/rahul-gadekar.jpg",
  },
  {
    name: "Mr. Sushant Surve",
    position: "Sr. Business & Development Head (Unit-III)",
    image: "/images/new-images/mhatre/sushant-surve.jpg",
  },
  {
    name: "Mr. Snehit Pisal",
    position: "Sr. Business & Development Head (Unit-IV)",
    image: "/images/new-images/mhatre/snehit-pisal.jpg",
  },
  {
    name: "Mr. Shankar Londhe",
    position: "Operation Head",
    image: "/images/new-images/mhatre/shankar-londhe.jpg",
  },
  {
    name: "Mr. Vijay Kadam",
    position: "Design Head (Unit-I)",
    image: "/images/new-images/mhatre/vijay-kadam.jpg",
  },
];

export default function TeamSection() {
  return (
    <>
      <HeroSub
        title="About Us"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />
      <section className="py-16 bg-grey dark:bg-darkmode">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-midnight_text dark:text-white mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 place-items-center">
            {team.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-[270px] h-[180px] relative mb-4 rounded-lg overflow-hidden shadow-cause-shadow">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 270px"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-midnight_text dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p
                    className={`text-sm font-medium ${
                      member.highlight ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
