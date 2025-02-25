import Head from "next/head";
import Navbar from "@/components/Navbar";
import "../app/globals.css";
import { FaArrowRight } from "react-icons/fa"; // Import the arrow icon
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Event Management</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative w-full h-[80vh] bg-sky-400 flex items-center overflow-hidden">
        {/* Image Background */}
  <Image
    src="/images/about.jpg"
    alt="Background"
    width={500} height={300}
    className="absolute top-0 left-0 w-full h-full object-cover"
  />
  {/* Left Vertical Line (10cm from left end, spans top to bottom) */}
  <div className="absolute top-20 bottom-20 left-[100px] w-[1px] bg-white"></div>

  {/* Right Vertical Line (10cm from right end, spans top to bottom) */}
  <div className="absolute top-20 bottom-20 right-[100px] w-[1px] bg-white"></div>


        {/* Content Section */}
        <div className="relative z-10 w-full flex flex-col items-center text-center px-6 md:px-20">
          <h1 className="text-5xl font-bold uppercase leading-tight text-white md:w-3/4 font-serif">
            <span className="text-white">Luxora Events,</span> Team You Can Trust™
          </h1>
          <div className="w-20 h-1 bg-white my-4"></div>

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
      </section>

      {/* About Section */}
      <section
        className="relative w-full py-16 bg-cover bg-center px-6 md:px-20"
        style={{ backgroundImage: "url('/images/hdbg.png')" }}
      >
        {/* Container */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:pl-40">
          {/* Left Text Section */}
          <div className="md:w-1/2 space-y-6 text-white">
            <h1 className="text-4xl md:text-7xl font-serif text-black leading-tight">
              We are not just a provider.<br /> We’re a partner.
            </h1>
            <p className="text-lg text-gray-600 ">
              At Luxora Event Group, we go beyond being service providers of tenting, 
              infrastructure, and rentals; we consider ourselves dedicated partners 
              committed to ensuring the success and flawless execution of every event.
            </p>
             {/* Button Section */}
             <div className="mt-6">
               <button className=" font-serif">
           {/* Circle with Arrow */}
           <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full transition-all duration-300 transform hover:scale-110">
             <FaArrowRight />
           </div>
         </button>
               </div>
               
{/* Horizontal Line Further Below the Text */}
<div className="w-full h-[1px] bg-black  top-0 mt-14"></div>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/images/about.png"
              alt="Event Showcase"
              width={500} height={300}
              className="w-full max-w-md md:max-w-lg h-auto object-cover"
            />
          </div>
        </div>

        {/* Our Mission */}
        <div className="mt-16 text-gray-800 md:pl-40">
          <h2 className="text-7xl font-serif mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission at <strong>Luxora Event Management</strong> is to provide professional event planning and management services across Kerala, from Kasaragod to Trivandrum. We focus on delivering professional events tailored to the Malayali community and outsiders organizing events in Kerala.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our mission also includes catering to rural areas, villages, and small towns, blending creativity and cultural relevance to create unforgettable experiences. Whether it's a wedding, corporate event, or private gathering, we aim to exceed expectations and make each event stress-free.
          </p>
          {/* Horizontal Line Further Below the Text */}
<div className="w-full h-[1px] bg-black  top-0 mt-14"></div>
        </div>

        {/* Achievements Section */}
        <div className="mt-12 text-gray-800 md:pl-40">
          <h2 className="text-7xl font-serif mb-4">A Recall of Achievements</h2>
          <p className="text-lg leading-relaxed">
            Our journey in the film and entertainment industry has been remarkable. From designing sets for acclaimed Malayalam films to celebrity weddings, we have been gaining recognition. 
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our focus is shifting towards destination weddings in Kerala, making it an ideal location for picturesque ceremonies. Coastal beaches, serene backwaters, and historic landmarks provide perfect backdrops for weddings.
          </p>
        </div>
        {/* Horizontal Line Further Below the Text */}
<div className="w-full h-[1px] bg-black  top-0 mt-14"></div>
      </section>

      {/* Footer */}
      
      <footer className="bg-white text-black py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left - Address & Social Links */}
          <div className="flex flex-col space-y-3 md:items-start items-center md:pl-40">
            <Image src="/images/logo.avif" width={500} height={300} alt="Company Logo" className="w-20" />
            <p className="text-gray-600 text-center md:text-left">
              8610 Cherry Lane<br />Laurel, Maryland 20707
            </p>
            <p className="text-gray-600">(301) 604-2334</p>
            <div className="flex space-x-4 text-blue-600 text-xl">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          {/* Center - Quick Links */}
          <div className="flex flex-col space-y-2 text-center">
            <h3 className="text-lg font-bold">Quick Links</h3>
            {["CATALOG", "CAREERS", "CONTACT US", "PRIVACY POLICY"].map((link) => (
              <a key={link} href="#" className="text-cyan-600 italic">{link}</a>
            ))}
          </div>

          {/* Right - Newsletter Signup */}
          <div className="flex flex-col space-y-3 md:items-end items-center">
            <h3 className="font-semibold text-lg italic">Sign up for News and Specials</h3>
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
    </>
  );
}
