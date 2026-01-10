"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

const Page = () => {
  return (
    <main className="bg-grey dark:bg-darkmode min-h-screen">
      {/* HERO SECTION */}
      <section className="relative py-20 bg-[url('/images/banner/banner2.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Join Our Team at <span className="text-primary">Mhatre Hitech</span>
          </h1>
          <p className="text-lg text-white/90 mb-6">
            Be part of a dynamic, innovative, and growth-driven environment. We
            value talent, passion, and a drive for excellence.
          </p>
        </div>
      </section>

      {/* ABOUT WORKING WITH US */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-midnight_text dark:text-white mb-4">
              Why Work With Us?
            </h2>
            <ul className="space-y-4 text-muted dark:text-slate-300">
              <li className="flex items-start gap-3">
                <Icon
                  icon="solar:check-circle-bold"
                  className="text-primary text-xl mt-1"
                />
                <span>
                  <b>Growth Opportunities:</b> We nurture talent and provide a
                  platform for professional advancement.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  icon="solar:check-circle-bold"
                  className="text-primary text-xl mt-1"
                />
                <span>
                  <b>Inclusive Culture:</b> We celebrate diversity and foster a
                  collaborative work environment.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  icon="solar:check-circle-bold"
                  className="text-primary text-xl mt-1"
                />
                <span>
                  <b>Cutting-Edge Projects:</b> Work on innovative manufacturing
                  and engineering solutions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  icon="solar:check-circle-bold"
                  className="text-primary text-xl mt-1"
                />
                <span>
                  <b>Employee Wellbeing:</b> We offer a safe, supportive, and
                  rewarding workplace.
                </span>
              </li>
            </ul>
          </div>
          <div className="relative h-72 w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/contact-page/contact.jpg"
              alt="Career at Mhatre Hitech"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CAREER APPLICATION FORM */}
      <section className="py-16 bg-white dark:bg-darklight border-t border-border dark:border-dark_border">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-midnight_text dark:text-white mb-8 text-center">
            Apply for a Position
          </h2>
          <form
            className="bg-grey dark:bg-darkmode rounded-2xl shadow-cause-shadow p-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault(); /* handle form submission */
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-midnight_text dark:text-white">
                  Full Name*
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border dark:border-dark_border bg-white dark:bg-darkmode text-midnight_text dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-midnight_text dark:text-white">
                  Email Address*
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border dark:border-dark_border bg-white dark:bg-darkmode text-midnight_text dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-midnight_text dark:text-white">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border dark:border-dark_border bg-white dark:bg-darkmode text-midnight_text dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="+91 00000 00000"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-midnight_text dark:text-white">
                  Position Applied For*
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border dark:border-dark_border bg-white dark:bg-darkmode text-midnight_text dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="e.g. Production Engineer"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-midnight_text dark:text-white">
                Upload Resume (PDF/DOC)*
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-4 py-2 rounded-lg border border-border dark:border-dark_border bg-white dark:bg-darkmode text-midnight_text dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary file:text-white file:font-semibold"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-midnight_text dark:text-white">
                Cover Letter / Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border dark:border-dark_border bg-white dark:bg-darkmode text-midnight_text dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                placeholder="Tell us why you are a great fit..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-primary hover:bg-darkprimary text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 uppercase tracking-widest text-sm flex items-center justify-center gap-2 group"
            >
              Submit Application
              <Icon
                icon="solar:paper-plane-bold"
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Page;
