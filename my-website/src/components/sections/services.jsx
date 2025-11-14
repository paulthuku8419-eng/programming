import React, { useState } from "react";

export default function Services() {
  const servicesData = [
    { tittle: "PLC programming", desc: "Automation logic for stable, efficient industrial systems" },
    { tittle: "CNC programming", desc: "High-precision G-codes for efficient machining" },
    { tittle: "CAD modelling", desc: "Detailed 2D and 3D Engineering design for any project" },
    { tittle: "Engineering consultation", desc: "Expert guidance for systems optimization and machine improvements" },
    { tittle: "Robotics integration", desc: "Automated solutions to increase efficiency and reduce errors" },
    { tittle: "Maintenance planning", desc: "Optimized schedules for machinery longevity and uptime" },
  ];

  const [current, setCurrent] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setCurrent((prev) => (prev + itemsPerPage) % servicesData.length);
  };

  const handlePrev = () => {
    setCurrent((prev) =>
      (prev - itemsPerPage + servicesData.length) % servicesData.length
    );
  };

  // Slice the services to display
  const displayedServices = servicesData.slice(current, current + itemsPerPage);
  if (displayedServices.length < itemsPerPage) {
    displayedServices.push(
      ...servicesData.slice(0, itemsPerPage - displayedServices.length)
    );
  }

  return (
    <div className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {displayedServices.map((service, index) => (
          <div key={index} className="p-6 border rounded shadow-sm bg-blue-500">
            <h3 className="text-xl font-bold mb-2">{service.tittle}</h3>
            <p className="text-gray-100">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="px-6 py-2 bg-white text-blue-500 font-bold rounded hover:bg-gray-200 transition"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-white text-blue-500 font-bold rounded hover:bg-gray-200 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
