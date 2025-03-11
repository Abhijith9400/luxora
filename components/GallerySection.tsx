"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const GallerySection = () => {
  const images = [
    "/images/ga2.jpg",
    "/images/ga1.jpg",
    "/images/ga3.jpg",
    "/images/ga10.jpg",
    "/images/ga8.jpg",
    "/images/ga9.jpg",
  ];

  return (
    <section className="py-12 bg-white">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-playfair text-gray-900">Gallery</h2>
      </div>

      {/* Responsive Grid Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative w-full h-[250px] sm:h-[300px] overflow-hidden rounded-xl shadow-md"
              initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
              whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
              transition={{ duration: 0.6, delay: index * 0.1 }} // Staggered effect
              viewport={{ once: true }}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                priority={index < 2} // Faster loading for the first two images
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
