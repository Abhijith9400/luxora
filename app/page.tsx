"use client"; // Ensures the file is treated as a Client Component
import TestimonialSection from "@/components/TestimonialSection";
import GallerySection from "@/components/GallerySection";
import Navbar from "@/components/Navbar";
import EventCarousel from "@/components/EventCarousel";
import FeatureSection from "@/components/FeatureSection";
import ServicesSection from "@/components/ServiceSection";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


export default function Home() {
  return (
    <div className=" ">
      {/* Navbar */}
      <Navbar />
      
        <script src="https://smtpjs.com/v3/smtp.js"async></script>
     
      {/* Hero Section */}
      <main className="relative bg-white">
        <section className="relative w-full h-screen bg-black flex flex-col items-center justify-center text-center sm:text-left sm:flex-row sm:justify-between px-6 sm:px-12 lg:px-16">
          {/* Background Image */}
          <video
  src="/videos/hero.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover z-0"
></video>


          {/* Vertical Lines */}
          <div className="absolute top-20 bottom-20 left-[10vw] w-[1px] bg-white hidden md:block"></div>
          <div className="absolute top-20 bottom-20 right-[10vw] w-[1px] bg-white hidden md:block"></div>

          {/* Content Section */}
          <div className="relative z-10 w-full flex flex-col items-center sm:items-start sm:w-1/2 space-y-6 sm:pl-16 md:pl-20">
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl font-playfair uppercase leading-tight"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 20 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <span className="text-white"> Luxora Events,</span> <br />
              Crafting Unforgettable Moments
            </motion.h1>

            {/* Button */}
            <Link href="/packages">
              <button className="flex items-center justify-center w-12 h-12 bg-white text-teal-950 rounded-full transition-transform transform hover:scale-110 ml-4 sm:ml-6">
                <FaArrowRight />
              </button>
            </Link>

          </div>

          {/* Right Text Section */}
          <motion.div
            className="absolute bottom-6 sm:bottom-10 right-6 sm:right-16 md:right-40 text-xs sm:text-sm text-black max-w-xs text-center sm:text-right"
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

      <section className="relative flex flex-col items-center justify-center py-16 px-4 sm:px-12 lg:px-16 bg-white bg-cover bg-center text-center" style={{ backgroundImage: "url('/images/hdbg.png')" }}>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-playfair text-black leading-tight mb-6">
          Elevating experiences, setting new standards.
        </h2>

        <div className="w-full h-[1px] bg-black mt-8"></div>

        <EventCarousel />

        <div className="w-full h-[1px] bg-black mt-8"></div>
      </section>

      <section className="w-full py-16 sm:py-24 text-center relative bg-cyan-100 bg-cover bg-center bg-no-repeat px-4 sm:px-12 lg:px-20" style={{ backgroundImage: "url('/images/hdbg.png')" }}>
        <h2 className="relative text-2xl sm:text-5xl md:text-7xl  text-black leading-tight mb-6 text-left sm:left-10 md:left-20 mt-6 sm:mt-12 font-playfair">
          Transforming events, redefining excellence, setting new ideas
        </h2>
        <div className="w-[90%] sm:w-[80%] h-[1px] bg-black mx-auto mt-8"></div>
        <main>
          <FeatureSection />
        </main>
      </section>

      <div className="event-sections py-16 bg-white">
        <ServicesSection />
      </div>

      <div className="event-sections py-16 bg-white">
        <div className="w-[80%] h-[1px] bg-black mx-auto mt-8"></div>
        <TestimonialSection />
        <div className="w-[80%] h-[2px] bg-black mx-auto mt-16"></div>
      </div>

      <div className="event-sections py-16 bg-white">
        <GallerySection />
      </div>

   {/* Footer */}
   <footer className="bg-gray-50 text-black py-10">
   <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
     <div className="flex flex-col space-y-3 text-center md:text-left">
         <Image src="/images/luxora1.png" width={70} height={70} alt="Company Logo" className="mx-auto md:mx-0" />
       <p className="text-gray-600">
       United Arcade, Ground Floor 42 <br/>Hyderabad, Telangana India <br/> 500048
       </p>
       <p className="text-gray-600">+917306205146 | +918712365841 |+918919138745</p>
      
<div className="flex justify-center md:justify-start space-x-4 text-xl">
  <a 
    href="https://facebook.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800 transition-colors"
  >
    <FaFacebook />
  </a>
  
  <a 
    href="https://instagram.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-pink-500 hover:text-pink-700 transition-colors"
    style={{
      background: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    <FaInstagram />
  </a>
  
  <a 
    href="https://twitter.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-sky-500 hover:text-sky-700 transition-colors"
  >
    <FaTwitter />
  </a>
</div>
     </div>

     <div className="flex flex-col space-y-2 text-center">
       <h3 className="text-lg font-bold">Quick Links</h3>
       {["Catalog", "Careers", "Contact Us", "Privacy Policy"].map((link) => (
         <a key={link} href="#" className="text-gray-800 hover:text-teal-600 transition-all">{link}</a>
       ))}
     </div>

     <div className="flex flex-col space-y-3 text-center md:text-right">
       <h3 className="font-semibold">Sign up for News and Specials</h3>
       <div className="flex w-full md:w-auto">
         <input
           type="email"
           placeholder="Your Email"
           className="border px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-teal-500 w-full"
         />
         <button className="bg-cyan-700 text-white px-6 py-2 rounded-r-md hover:bg-cyan-800">
           SIGN UP
         </button>
       </div>
     </div>
   </div>
   <div className="text-center text-gray-500 text-sm mt-8">
  &copy; 2025 Luxora. All Rights Reserved. Designed By{" "}
  <a 
    href="https://webgeon.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-sky-800 hover:underline"
  >
    Webgeon
  </a>
</div>
 </footer>
</div>


);
}
