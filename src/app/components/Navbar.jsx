"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            <Link href="/">Medi<span className="text-green-600">Care+</span></Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
            <Link href="/doctors" className="text-gray-700 hover:text-blue-600 font-medium">Doctors</Link>
            <Link href="/appointments" className="text-gray-700 hover:text-blue-600 font-medium">Appointments</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link href="/log-in" className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">Login</Link>
            <Link href="/sign-up" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Sign Up</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700">Home</Link>
          <Link href="/services" className="block text-gray-700">Services</Link>
          <Link href="/doctors" className="block text-gray-700">Doctors</Link>
          <Link href="/appointments" className="block text-gray-700">Appointments</Link>
          <Link href="/contact" className="block text-gray-700">Contact</Link>
          <hr />
          <Link href="/log-in" className="block text-blue-600">Login</Link>
          <Link href="/sign-up" className="block text-blue-600">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
