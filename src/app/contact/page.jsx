"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert("Thank you for reaching out. We'll get back to you shortly.");
    // TODO: Send to backend or email service
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 px-6 pb-12 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          We’re here to help. Whether you have a question about services, need assistance, or just want to say hello, our team is ready to respond.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:border-blue-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-blue-50 p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              📍 <strong>Address:</strong> 123 MediCare Blvd, Health City, Nigeria
            </p>
            <p className="text-gray-700 mb-4">
              📞 <strong>Phone:</strong> +234 800 123 4567
            </p>
            <p className="text-gray-700 mb-4">
              📧 <strong>Email:</strong> support@medicarehospital.com
            </p>
            <p className="text-gray-600">
              Working Hours: Mon - Fri: 8:00 AM - 6:00 PM <br />
              Emergency Services Available 24/7
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
