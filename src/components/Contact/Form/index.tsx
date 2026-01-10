import React from "react";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section className="bg-grey dark:bg-darkmode py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: Form */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-midnight_text dark:text-white">
              Get in Touch
            </h2>
            <p className="text-muted dark:text-slate-300 mb-8">
              Fill out the form and our team will get back to you as soon as
              possible.
            </p>
            <form className="space-y-5">
              <div className="flex gap-4 flex-col sm:flex-row">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted dark:text-slate-300 mb-1.5"
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
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted dark:text-slate-300 mb-1.5"
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
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-muted dark:text-slate-300 mb-1.5"
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
                  className="block text-sm font-medium text-muted dark:text-slate-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-md border border-border dark:border-dark_border bg-white dark:bg-darkmode px-3.5 py-2.5 text-sm text-midnight_text dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-cause-shadow hover:bg-darkprimary transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Right: Image */}
          <div className="lg:col-span-6">
            <Image
              src="/images/contact-page/contact.jpg"
              alt="Contact"
              width={900}
              height={600}
              quality={100}
              className="rounded-xl shadow-cause-shadow w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
