"use client";

import React from "react";
import Navbar from "../components/Navbar"; // adjust if path is different

const services = [
  {
    title: "Emergency Care",
    description: "24/7 emergency services with specialized trauma care units.",
    icon: "🆘",
  },
  {
    title: "Outpatient Services",
    description: "Routine check-ups, follow-up visits, and health consultations.",
    icon: "🏥",
  },
  {
    title: "Surgery",
    description: "Advanced surgical procedures with expert surgeons.",
    icon: "🩺",
  },
  {
    title: "Maternity Care",
    description: "Comprehensive maternity and neonatal services.",
    icon: "🤰",
  },
  {
    title: "Diagnostics",
    description: "Laboratory, X-ray, ultrasound, CT scan, and MRI services.",
    icon: "🔬",
  },
  {
    title: "Pharmacy",
    description: "In-house pharmacy with a wide range of medications.",
    icon: "💊",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-6 pb-10 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">Our Services</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          MediCare Hospital offers a wide range of medical services to meet your health needs. Our expert team of professionals is here to support your wellness journey.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
