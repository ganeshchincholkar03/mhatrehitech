"use client";

const GrowWithUsSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: hook this up to an API route / form service
  };

  return (
    <section className="py-20 bg-grey dark:bg-darkmode">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Left: Title & copy */}
          <div>
            <p className="text-primary font-medium mb-3">Grow With Us</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-midnight_text dark:text-white mb-5">
              Partner With a Team That Scales With Your Vision
            </h2>
            <p className="text-muted dark:text-slate-300 text-sm md:text-base leading-relaxed mb-4">
              We are a young and dynamic manufacturing team focused on
              delivering reliable, high‑quality solutions. Our engineers and
              specialists combine experience with a passion for innovation,
              helping our clients turn complex requirements into repeatable,
              efficient processes.
            </p>
            <p className="text-muted dark:text-slate-300 text-sm md:text-base leading-relaxed">
              If you&apos;re looking for a long‑term partner who understands
              precision, timelines, and accountability, we&apos;d love to
              connect and explore how we can support your next project.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/services"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-primary text-white text-sm font-semibold shadow-cause-shadow hover:bg-darkprimary transition-colors"
              >
                OUR SERVICES
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-md border border-primary text-primary text-sm font-semibold hover:bg-primary/5 transition-colors"
              >
                CONTACT WITH US
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div id="contact" className="lg:pl-6">
            <div className="bg-white dark:bg-darklight border border-border dark:border-dark_border rounded-2xl shadow-cause-shadow p-6 md:p-8 max-w-xl ml-auto">
              <h3 className="text-xl md:text-2xl font-semibold text-midnight_text dark:text-white mb-2">
                Connect With Us
              </h3>
              <p className="text-muted dark:text-slate-300 text-sm md:text-base mb-6">
                Share a few details about your requirement and our team will get
                back to you with the next steps.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-muted dark:text-slate-300 mb-1.5"
                  >
                    Name*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-border dark:border-dark_border bg-white dark:bg-darkmode px-3.5 py-2.5 text-sm text-midnight_text dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-muted dark:text-slate-300 mb-1.5"
                  >
                    Email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-border dark:border-dark_border bg-white dark:bg-darkmode px-3.5 py-2.5 text-sm text-midnight_text dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium text-muted dark:text-slate-300 mb-1.5"
                  >
                    Phone*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-md border border-border dark:border-dark_border bg-white dark:bg-darkmode px-3.5 py-2.5 text-sm text-midnight_text dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="+91 00000 00000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-muted dark:text-slate-300 mb-1.5"
                  >
                    Project / Case Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-border dark:border-dark_border bg-white dark:bg-darkmode px-3.5 py-2.5 text-sm text-midnight_text dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Briefly describe what you need help with..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-cause-shadow hover:bg-darkprimary transition-colors"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowWithUsSection;
