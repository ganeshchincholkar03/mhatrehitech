"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { cardsData } from "@/components/Common/cardsData";

const Services = () => {
  return (
    <section className="container py-16 lg:py-28 bg-white dark:bg-dark mx-auto">
      <div className="px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-3">
            Our Industry Solutions
          </h2>
          <p className="text-gray-600 dark:text-white/60 text-base">
            Delivering the Best Global Industry Services.
          </p>
        </div>
      </div>
      <div className="relative mx-auto px-4">
        {/* Section heading */}

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              placeholder={undefined}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              onResize={() => {}}
              onResizeCapture={() => {}}
              className="bg-white/95 backdrop-blur rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <CardHeader
                className="relative h-48 rounded-t-2xl overflow-hidden"
                placeholder={undefined}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </CardHeader>

              <CardBody
                placeholder={undefined}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 text-lg font-semibold"
                  placeholder={undefined}
                  onResize={() => {}}
                  onResizeCapture={() => {}}
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {card.title}
                </Typography>

                <Typography
                  className="text-sm text-gray-600 leading-relaxed"
                  placeholder={undefined}
                  onResize={() => {}}
                  onResizeCapture={() => {}}
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {card.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
