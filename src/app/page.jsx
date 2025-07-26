import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="text-center py-16 px-4">
          <h1 className="text-4xl font-bold text-blue-700">Welcome to MediCare+</h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            At MediCare+, your health and well-being are our top priorities. Explore our
            specialized services, consult experienced doctors, and book appointments with ease.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="/appointments" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Book Appointment
            </a>
            <a href="/services" className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50">
              View Services
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-blue-800 mb-10">Our Core Services</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "General Checkup", icon: "🩺" },
                { title: "Cardiology", icon: "❤️" },
                { title: "Pediatrics", icon: "👶" },
                { title: "Dental Care", icon: "🦷" },
                { title: "Laboratory Tests", icon: "🧪" },
                { title: "Emergency Services", icon: "🚑" },
              ].map((service) => (
                <div key={service.title} className="bg-gray-100 p-6 rounded shadow hover:shadow-md transition">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-blue-700">{service.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">High-quality care from certified specialists.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors CTA */}
        <section className="py-16 bg-blue-50 text-center">
          <h2 className="text-2xl font-bold text-blue-700">Meet Our Expert Doctors</h2>
          <p className="text-gray-600 mt-3 mb-6">Our team of professionals is here to guide your health journey.</p>
          <a href="/doctors" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            View Doctors
          </a>
        </section>

        {/* Contact CTA */}
        <section className="py-12 bg-white text-center">
          <h2 className="text-xl font-bold text-gray-800">Have Questions or Need Support?</h2>
          <p className="text-gray-600 mt-2 mb-4">We're here to help. Contact us today.</p>
          <a href="/contact" className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            Contact Us
          </a>
        </section>
      </main>
    </>
  );
}
