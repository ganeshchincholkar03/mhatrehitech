import Image from "next/image";

const teamMembers = [
  {
    name: "Mr. Amol Jadhav",
    role: "Plant Head",
    image: "/images/new-images/my_images/Amol-Jadhav.jpg",
  },
  {
    name: "Mr. Vijay Kadam",
    role: "Design Head (Unit‑I)",
    image: "/images/new-images/my_images/Vijaykumar-Kadam.jpg",
  },
  {
    name: "Mr. Snehit Pisal",
    role: "Sr. Business & Development Head (Unit‑IV)",
    image: "/images/new-images/my_images/SNEHIT-PISAL.jpg",
  },
  {
    name: "Mr. Shankar Londhe",
    role: "Operation Head",
    image: "/images/new-images/my_images/Shankar-Londhe.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-grey dark:bg-darkmode">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">Our Team</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight_text dark:text-white mb-4">
            Dedicated Team
          </h2>
          <p className="text-muted dark:text-slate-300 text-sm md:text-base italic">
            &quot;Individual commitment to a group effort—that is what makes a
            team work, a company work, a society work, a civilization
            work.&quot; — Vince Lombardi
          </p>
        </div>

        {/* Team grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-darklight border border-border dark:border-dark_border shadow-cause-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-darkmd"
            >
              {/* Image area */}
              <div className="relative h-56 md:h-60 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text content */}
              <div className="px-5 py-4 text-center">
                <h3 className="text-base md:text-lg font-semibold text-midnight_text dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm font-medium text-primary">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
