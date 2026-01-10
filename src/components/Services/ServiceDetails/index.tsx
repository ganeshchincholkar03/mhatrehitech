import React, { FC } from "react";
import Image from "next/image";

interface ServiceDetailsProps {
  title: string;
  image: string;
  text: string;
  specs: Record<string, string>;
  features: string[];
  fullDescription: string; // HTML string
}

const ServiceDetails: FC<ServiceDetailsProps> = ({
  title,
  image,
  text,
  specs,
  features,
  fullDescription,
}) => {
  return (
    <section className="sm:mt-28 pt-28 sm:pb-28 pb-12 bg-grey dark:bg-darkmode">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-8 col-span-12">
            {/* Image */}
            <div className="mb-8">
              <Image
                src={image}
                alt={title}
                width={900}
                height={500}
                className="rounded-xl shadow-cause-shadow w-full object-cover"
                priority
              />
            </div>
            {/* Title & Summary */}
            <h1 className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-4">
              {title}
            </h1>
            <p className="text-muted dark:text-slate-300 text-base mb-8">
              {text}
            </p>

            {/* Features */}
            {features && features.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Key Features
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-midnight_text dark:text-white">
                  {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Full Description */}
            <div className="bg-white dark:bg-darklight border-l-4 border-primary border border-border dark:border-dark_border rounded-2xl shadow-cause-shadow p-8 mb-10">
              <h2 className="text-xl font-semibold text-primary mb-4">
                About This Service
              </h2>
              <div
                className="prose dark:prose-invert max-w-none text-midnight_text dark:text-white prose-li:marker:text-primary prose-strong:text-primary"
                dangerouslySetInnerHTML={{ __html: fullDescription }}
              />
            </div>
          </div>

          {/* Specs Table */}
          <div className="lg:col-span-4 col-span-12">
            <div className="bg-white dark:bg-darklight border border-border dark:border-dark_border rounded-2xl shadow-cause-shadow p-6 mb-8">
              <h4 className="text-lg font-semibold text-primary mb-4">
                Specifications
              </h4>
              <table className="w-full text-left">
                <tbody>
                  {Object.entries(specs).map(([key, value]) => (
                    <tr
                      key={key}
                      className="border-b border-border dark:border-dark_border last:border-0"
                    >
                      <th className="py-2 pr-4 font-medium text-midnight_text dark:text-white w-1/3">
                        {key}
                      </th>
                      <td className="py-2 text-muted dark:text-slate-300">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Social Share (optional) */}
            <div className="flex items-center justify-between">
              <h5 className="text-lg font-medium text-midnight_text dark:text-white">
                Share
              </h5>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="Facebook">
                  <Image
                    src="/images/icons/icon-facebook.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" aria-label="Instagram">
                  <Image
                    src="/images/icons/icon-instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <Image
                    src="/images/icons/icon-linkedin.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" aria-label="Twitter">
                  <Image
                    src="/images/icons/icon-twitter.svg"
                    alt="Twitter"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
