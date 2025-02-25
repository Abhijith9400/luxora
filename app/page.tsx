"use client"; // Ensures the file is treated as a Client Component
import { FaUsers, FaRegSquare, FaPencilAlt } from "react-icons/fa";
import TestimonialSection from "@/components/TestimonialSection";
import GallerySection from "@/components/GallerySection";
import Navbar from "@/components/Navbar";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa"; // Import the arrow icon
import EventCarousel from "@/components/EventCarousel";
import FeatureSection from "@/components/FeatureSection";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  //for containers
  const values = [
    { 
      icon: <FaUsers />, 
      title: "Teamwork", 
      text: <span className="text-gray-400 text-sm">We work together, communicate effectively,and cooperate.</span> 
    },
    { 
      icon: <FaRegSquare />, 
      title: "Transparency", 
      text: <span className="text-gray-400 text-sm">We work with our clients and service providers transparently.</span> 
    },
    { 
      icon: <FaPencilAlt />, 
      title: "Excellence", 
      text: <span className="text-gray-400 text-sm">At RADIANT, Excellence is the Culture.</span>, 
      highlight: true 
    },
    { 
      icon: <FaRegSquare />, 
      title: "Commitment", 
      text: <span className="text-gray-400 text-sm">We are dedicated to our values and the success of our clients.</span> 
    }
  ];


  return (
    
    <div className="relative min-h-screen bg-white text-white">
      
      {/* Navbar */}
    <section>
         <Navbar />
    </section>
     
    <main className="relative overflow-hidden bg-white">
    <section className="relative w-full h-[100vh] bg-sky-400 overflow-hidden flex items-center">
  
  {/* Social Media Icons - Top Right */}
 
<div className="absolute top-10 right-10 flex space-x-4 text-white text-2xl">
  <a href="#" className="hover:text-blue-600 transition">
    <FaFacebookF />
  </a>
  <a href="#" className="hover:text-pink-600 transition">
    <FaInstagram />
  </a>
  <a href="#" className="hover:text-blue-400 transition">
    <FaTwitter />
  </a>
  <a href="#" className="hover:text-red-600 transition">
    <FaYoutube />
  </a>
</div>

  {/* Image Background */}
  <Image
    src="/images/hero.jpg"
    alt="Background"
    width={500} height={300}
    className="absolute top-0 left-0 w-full h-full object-cover"
  />
  
  {/* Left Vertical Line (10cm from left end, spans top to bottom) */}
  <div className="absolute top-20 bottom-20 left-[100px] w-[1px] bg-white"></div>

  {/* Right Vertical Line (10cm from right end, spans top to bottom) */}
  <div className="absolute top-20 bottom-20 right-[100px] w-[1px] bg-white"></div>

  {/* Content Section */}
  <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-10 md:px-20">
    
    {/* Left Text Section */}
    <div className="md:w-1/2 w-full text-white space-y-6 md:pl-20 flex flex-col">
    <motion.h1
      className="text-7xl font-serif uppercase leading-tight"
      initial={{ opacity: 0, x: -100 }} // Start position (invisible, moved left)
      animate={{ opacity: 1, x: 0 }} // End position (fully visible)
      transition={{ duration: 2, ease: "easeOut" }} // Smooth transition
    >
      <span className="text-white-950"> Luxora Events,<br/></span> Team You Can Trust™
    </motion.h1>
  

      {/* Right Text Section at the Bottom */}
      <motion.div
      className="absolute bottom-10 right-40 text-sm text-gray-300 text-right max-w-xs"
      initial={{ opacity: 0, x: 100 }} // Start position (invisible, moved right)
      animate={{ opacity: 1, x: 0 }} // End position (fully visible)
      transition={{ duration: 2, ease: "easeOut" }} // Smooth transition
    >
      <p>
        We specialize in crafting unforgettable experiences with precision, passion, and creativity. 
        Let’s make your event extraordinary.
      </p>
    </motion.div>
  
      <div className="w-20 h-1 bg-white"></div>

      {/* Button Section */}
      <div className="mt-6">
      <button className=" font-serif">
  {/* Circle with Arrow */}
  <div className="w-10 h-10 flex items-center justify-center bg-white text-teal-950 rounded-full transition-all duration-300 transform hover:scale-110">
    <FaArrowRight />
  </div>
</button>
      </div>
    </div>
  </div>

</section>    
</main>

<section
  className="relative flex flex-col items-center justify-center py-16 px-6 md:px-16 bg-cyan-100 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/hdbg.png')" }} // Replace with the actual image path
>

<h2 className="relative text-7xl font-serif text-black leading-tight mb-6  mt-12">
  Elevating experiences, setting new standards.
</h2>

{/* Horizontal Line Further Below the Text */}
<div className="w-full h-[1px] bg-black  top-0 mt-12"></div>

  <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left Section */}
   
   
  </div>
  <main className="bg-gray-100 min-h-screen ">
      <EventCarousel />
      
{/* Horizontal Line Further Below the Text */}
<div className="w-full h-[1px] bg-black  top-0 left-20 right-20 "></div>
    </main>

</section>
       
<section 
  className="w-full py-24 text-white text-center relative bg-cyan-100 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/hdbg.png')" }} // Replace with actual image path
>
<h2 className="relative text-7xl font-serif text-black leading-tight mb-6 text-left left-20 mt-12">
Transforming events, redefining excellence, setting new ideas
</h2>
 
{/* Horizontal Line Further Below the Text */}
<div className="w-[80%] h-[1px] bg-black mx-auto mt-12"></div>
<main>
      <FeatureSection />
    </main>

  {/* services */}
  <div className="relative z-10">
    <h2 className="text-7xl  text-black mb-8 font-serif">Our Services</h2>
    <p className="text-lg text-gray-500 max-w-4xl mx-auto italic">
      We are a team of cross-disciplinary event experts from infrastructure, entertainment,
      sports, and hospitality industries! We support our clients beyond the physical structures we build,
      helping them focus on what they do best. At Select, we’re <span className="font-semibold">The Team Your Team Can Trust™.</span>
    </p>

    {/* Services Grid */}
    <div className="container mx-auto mt-6 px-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-1 justify-center">
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
        className="relative max-w-xs w-[98%] mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
      >
        {/* Image */}
        <Image
          src={service.Image}
          alt={service.title}
          width={500} height={300}
          className="w-full h-56 object-cover"
        />

        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Text Section */}
        <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-4 text-center">
          <h3 className="text-lg font-bold text-white">{service.title}</h3>
        </div>
      </div>
    ))}
  </div>



    </div>
  </div>
</section>


     {/* Add TestimonialSection as a session here */}
     <div className="event-sections py-16 bg-white">
      {/* Horizontal Line Further Below the Text */}
<div className="w-[80%] h-[1px] bg-black mx-auto mt-8"></div>
         <TestimonialSection/>
         {/* Horizontal Line Further Below the Text */}
<div className="w-[80%] h-[2px] bg-black mx-auto mt-16"></div>
      </div>

     {/* Add TestimonialSection as a session here */}
     <div className="event-sections py-16 bg-white">
         <GallerySection/>
      </div>

      <div id="contact">
        {/* Horizontal Line Further Below the Text */}
<div className="w-[80%] h-[1px] bg-black mx-auto mt-8"></div>
  <footer className="bg-white text-black py-10">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      
     {/* Left Section - Logo & Address */}
<div className="flex flex-col space-y-3 md:items-start items-center md:pl-40">
  <Image src="/images/logo.avif" alt="Select Event Group" width={500} height={300} className="w-20" />
  <p className="text-gray-600 text-sm md:text-left text-center">
    8610 Cherry Lane<br/>Laurel, Maryland 20707
  </p>
  <p className="text-gray-600">(301) 604-2334</p>
  <div className="flex space-x-4 text-blue-600 text-xl">
    <a href="#"><i className="fab fa-facebook"></i></a>
    <a href="#"><i className="fab fa-instagram"></i></a>
    <a href="#"><i className="fab fa-twitter"></i></a>
  </div>
</div>


      {/* Center Section - Quick Links */}
      <div className="flex flex-col space-y-2 text-center">
        <h3 className="text-lg font-bold">Quick Links</h3>
        <a href="#" className="text-cyan-600 text- italic">CATALOG</a>
        <a href="#" className="text-cyan-600 text- italic">CAREERS</a>
        <a href="#" className="text-cyan-600 text- italic">CONTACT US</a>
        <a href="#" className="text-cyan-600  text- italic">PRIVACY POLICY</a>
      </div>

      {/* Right Section - Newsletter Signup */}
<div className="flex flex-col space-y-3 md:items-end items-center md:pr-20">
  <h3 className="font-semibold text-lg italic">Sign up for News and Specials</h3>
  <div className="flex w-full md:w-auto">
    <input 
      type="email" 
      placeholder="Your Email Address" 
      className="w-full border border-gray-400 px-4 py-2 rounded-l-md focus:outline-none"
    />
    <button className="bg-cyan-700 text-white px-6 py-2 rounded-r-md">SIGN UP</button>
  </div>
  </div>


    </div>

    {/* Copyright Section */}
    <div className="text-center text-gray-500 text-sm mt-8">
      Copyright © Select Event Group. All Rights Reserved.
    </div>
  </footer>
  </div>
</div>
  
  );
}
