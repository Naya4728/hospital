"use client";

import React from "react";
import Navbar from "../components/Navbar";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    bio: "Experienced in treating heart conditions with over 10 years in practice.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. James Smith",
    specialty: "Pediatrician",
    bio: "Caring for children’s health and wellness from birth through adolescence.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Aisha Bello",
    specialty: "Dermatologist",
    bio: "Expert in skin care, laser treatments, and cosmetic dermatology.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dr. Kelvin Adeyemi",
    specialty: "Neurologist",
    bio: "Specialist in nervous system disorders including stroke and epilepsy.",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

export default function DoctorsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-6 pb-12 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-4">Our Doctors</h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Meet our team of experienced and compassionate doctors, dedicated to providing exceptional care.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
          {doctors.map((doc, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold text-blue-800 text-center">{doc.name}</h2>
              <p className="text-center text-sm text-blue-600 mb-2">{doc.specialty}</p>
              <p className="text-center text-gray-600 text-sm">{doc.bio}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
