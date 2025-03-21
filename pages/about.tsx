"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import "../app/globals.css";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Head>
        <title>About Us - Luxora Event Management</title>
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      <video
  src="/videos/about.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover z-0"
></video>

        <motion.div
          className="relative z-10 w-full text-center px-6 md:px-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl text-white md:text-7xl font-playfair uppercase leading-tight">
            About Us
          </h1>
          <div className="w-16 h-1 bg-white my-4 mx-auto"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        className="py-16 bg-cover bg-center px-6 md:px-20"
        style={{ backgroundImage: "url('/images/hdbg.png')" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Section */}
          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-6xl font-playfair text-black leading-tight">
              We’re not just a provider.<br /> We’re a partner.
            </h1>
            <p className="text-lg text-gray-700 font-lato">
            Welcome to Luxora, where luxury meets diversity! Based in the heart of Hyderabad, a city known for its rich heritage and cultural harmony, Luxora is dedicated to curating premium lifestyle experiences that cater to everyone.
Our mission is to seamlessly blend tradition with modernity, offering thoughtfully crafted packages that elevate your everyday moments. Whether its indulgent experiences, bespoke services, or customized solutions, Luxora is committed to delivering excellence, elegance, and convenience.
At Luxora, we take pride in our inclusive approach, celebrating Hyderabads unique blend of cultures, traditions, and modern aspirations. We believe that luxury is not just about opulence but also about creating meaningful and memorable experiences for all.
Join us in redefining luxury—the Luxora way!
            </p>
            <div className="w-full h-[1px] bg-black mt-14"></div>
          </motion.div>

          {/* Right Section (Image) */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative flex items-center justify-center mt-10">
  {/* First Image - Overlapping on top */}
  <motion.div
    className="absolute top-0 left-0 shadow-lg rounded-2xl overflow-hidden"
    initial={{ rotate: -90, opacity: 0 }}
    animate={{ rotate: -6, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <Image
      src="/images/ab1.jpg"
      alt="Event Showcase 1"
      width={400}
      height={250}
      className="w-[200px] md:w-[250px] h-auto object-cover"
    />
  </motion.div>

  {/* Second Image - Base Image */}
  <motion.div
    className="relative shadow-xl rounded-2xl overflow-hidden ml-16 mt-12"
    initial={{ rotate: -90, opacity: 0 }}
    animate={{ rotate: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <Image
      src="/images/ab2.jpg"
      alt="Event Showcase 2"
      width={400}
      height={250}
      className="w-[200px] md:w-[250px] h-auto object-cover"
    />
  </motion.div>
</div> 
          </motion.div>

        </div>

        {/* Mission Section */}
        <motion.div
          className="mt-16 text-gray-900 md:px-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-playfair mb-4">Vision Statement</h2>
          <p className="text-lg leading-relaxed font-lato">
           To be the leading provider of premium lifestyle experiences, seamlessly blending tradition and modernity while celebrating diverse cultures and beyond.
          </p>
         
          <div className="w-full h-[1px] bg-black mt-14"></div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="mt-12 text-gray-900 md:px-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair mb-4">Mission Statement</h2>
          <p className="text-lg leading-relaxed font-lato">
           At Luxora, we are committed to delivering exceptional lifestyle solutions that cater to the diverse needs of our community. Rooted in Hyderabads vibrant cultural heritage, we offer premium packages that reflect inclusivity, luxury, and innovation. Our goal is to enhance everyday experiences by curating high-quality services and products that inspire elegance, comfort, and convenience for all.        </p>
         
          <div className="w-full h-[1px] bg-black mt-14"></div>
        </motion.div>
      </motion.section>

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
    </>
  );
}
