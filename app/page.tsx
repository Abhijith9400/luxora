"use client"; // Ensures the file is treated as a Client Component
import TestimonialSection from "@/components/TestimonialSection";
import GallerySection from "@/components/GallerySection";
import Navbar from "@/components/Navbar";
import { FaArrowRight } from "react-icons/fa"; // Import the arrow icon
import EventCarousel from "@/components/EventCarousel";
import FeatureSection from "@/components/FeatureSection";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative bg-white">
        <section className="relative w-full h-screen bg-black flex flex-col items-center justify-center text-center sm:text-left sm:flex-row sm:justify-between px-6 sm:px-12 lg:px-16">
          {/* Background Image */}
          <Image
            src="/images/hero.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full z-0"
          />

          {/* Vertical Lines */}
          <div className="absolute top-20 bottom-20 left-[10vw] w-[1px] bg-white hidden md:block"></div>
          <div className="absolute top-20 bottom-20 right-[10vw] w-[1px] bg-white hidden md:block"></div>

          {/* Content Section */}
          <div className="relative z-10 w-full flex flex-col items-center sm:items-start sm:w-1/2 space-y-6 sm:pl-16 md:pl-20">
            <motion.h1
              className="text-3xl sm:text-5xl md:text-7xl font-serif uppercase leading-tight"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 20 }} // Moves text slightly to the right
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <span className="text-white"> Luxora Events,</span> <br />
              Team You Can Trust™
            </motion.h1>

            {/* Button */}
            <button className="flex items-center justify-center w-12 h-12 bg-white text-teal-950 rounded-full transition-transform transform hover:scale-110">
              <FaArrowRight />
            </button>
          </div>

          {/* Right Text Section */}
          <motion.div
            className="absolute bottom-6 sm:bottom-10 right-6 sm:right-16 md:right-40 text-xs sm:text-sm text-gray-300 max-w-xs text-center sm:text-right"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <p>
              We specialize in crafting unforgettable experiences with precision, passion, and creativity.
              Let’s make your event extraordinary.
            </p>
          </motion.div>
        </section>
      </main>

      {/* Second Section */}
      <section
        className="relative flex flex-col items-center justify-center py-16 px-4 sm:px-12 lg:px-16 bg-cyan-100 bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/images/hdbg.png')" }}
      >
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif text-black leading-tight mb-6">
          Elevating experiences, setting new standards.
        </h2>

        {/* Horizontal Line */}
        <div className="w-full h-[1px] bg-black mt-8"></div>

        {/* Event Carousel */}
        <EventCarousel />

        {/* Another Horizontal Line */}
        <div className="w-full h-[1px] bg-black mt-8"></div>
      </section>

      {/* Feature Section */}
      <section
        className="w-full py-16 sm:py-24 text-center relative bg-cyan-100 bg-cover bg-center bg-no-repeat px-4 sm:px-12 lg:px-20"
        style={{ backgroundImage: "url('/images/hdbg.png')" }}
      >
        <h2 className="relative text-2xl sm:text-5xl md:text-7xl font-serif text-black leading-tight mb-6 text-left sm:left-10 md:left-20 mt-6 sm:mt-12">
          Transforming events, redefining excellence, setting new ideas
        </h2>
        <div className="w-[90%] sm:w-[80%] h-[1px] bg-black mx-auto mt-8"></div>
        <main>
          <FeatureSection />
        </main>
      </section>
    
      <div className="relative z-10 px-4 md:px-20">
        <h2 className="text-3xl md:text-7xl text-black mb-8 font-serif text-center">Our Services</h2>
        <p className="text-lg text-gray-500 max-w-4xl mx-auto italic text-center">
          We are a team of cross-disciplinary event experts from infrastructure, entertainment, sports, and hospitality industries!
        </p>

        <div className="container mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4 px-4 md:px-0">
          {[
            { title: "Tenting & Structures", Image: "/images/ga1.jpg" },
            { title: "Flooring & Seating", Image: "/images/ga2.jpg" },
            { title: "3D Rendering, Branding, Wayfinding, & Printing", Image: "/images/ga3.jpg" },
            { title: "VIP Hospitality & Ticketing Booths", Image: "/images/ga4.jpg" },
            { title: "Furniture & Interior Buildouts", Image: "/images/we.jpg" },
            { title: "Emergency Response / Semi-Permanent Solutions", Image: "/images/ga1.jpg" },
          ].map((service, index) => (
            <div
              key={index}
              className="relative max-w-xs w-full mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <Image
                src={service.Image}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-4 text-center">
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="event-sections py-16 bg-white">
        <div className="w-[80%] h-[1px] bg-black mx-auto mt-8"></div>
        <TestimonialSection />
        <div className="w-[80%] h-[2px] bg-black mx-auto mt-16"></div>
      </div>

      <div className="event-sections py-16 bg-white">
        <GallerySection />
      </div>

      <div id="contact">
        <div className="w-[80%] h-[1px] bg-black mx-auto mt-8"></div>
        <footer className="bg-white text-black py-10 px-4 md:px-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
            <div className="flex flex-col space-y-3 items-center md:items-start">
              <Image src="/images/logo.avif" alt="Select Event Group" width={80} height={80} />
              <p className="text-gray-600 text-sm">8610 Cherry Lane, Laurel, Maryland 20707</p>
              <p className="text-gray-600">(301) 604-2334</p>
              <div className="flex space-x-4 text-blue-600 text-xl">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-bold">Quick Links</h3>
              {['Catalog', 'Careers', 'Contact Us', 'Privacy Policy'].map((link, idx) => (
                <a key={idx} href="#" className="text-gray-800">{link}</a>
              ))}
            </div>

            <div className="flex flex-col space-y-3 items-center md:items-end">
              <h3 className="font-semibold">Sign up for News and Specials</h3>
              <div className="flex w-full md:w-auto">
                <input type="email" placeholder="Your Email Address" className="border px-4 py-2 rounded-l-md focus:outline-none w-full" />
                <button className="bg-cyan-700 text-white px-6 py-2 rounded-r-md">SIGN UP</button>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-8">
            &copy; Select Event Group. All Rights Reserved.
          </div>
        </footer>
      </div>
      </div>
  
  );
}
