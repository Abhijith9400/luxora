"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesSection() {
  // ✅ Declare the services array inside the function
  const services = [
    { title: "Tenting & Structures", image: "/images/ga1.jpg" },
    { title: "Flooring & Seating", image: "/images/ga2.jpg" },
    { title: "3D Rendering, Branding, Wayfinding, & Printing", image: "/images/ga3.jpg" },
    { title: "VIP Hospitality & Ticketing Booths", image: "/images/ga4.jpg" },
    { title: "Furniture & Interior Buildouts", image: "/images/we.jpg" },
    { title: "Emergency Response / Semi-Permanent Solutions", image: "/images/ga1.jpg" },
  ];

  return (
    <motion.section
      className="relative z-10 px- md:px-20"
      style={{ backgroundImage: "url('/images/hdbg.png')" }} // Change this path
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-7xl text-black mb-8 font-playfair text-center">Our Services</h2>
      <p className="text-lg text-amber-800 max-w-4xl mx-auto font-lato italic text-center">
        We are a team of cross-disciplinary event experts from infrastructure, entertainment, sports, and hospitality industries!
      </p>

      <div className="container mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4 px-4 md:px-0">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative max-w-xs w-full mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered effect
            viewport={{ once: true }}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-4 text-center">
              <h3 className="text-lg font-bold text-white font-playfair">{service.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
