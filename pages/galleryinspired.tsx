import Head from "next/head";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import "../app/globals.css"; // Adjust if Tailwind isn't applying

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact Us | FitU Floors & Decors</title>
        <meta
          name="description"
          content="Get in touch with FitU Floors & Decors for premium home design solutions."
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
        <img 
          src="/images/gallery.jpg" 
          alt="Background Image" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center px-10 md:px-20 text-center">
          <div className="md:w-1/2 w-full text-white space-y-6">
            <h1 className="text-5xl font-bold uppercase leading-tight font-serif">
              Gallery section inspired by <br/> 
              <span className="text-teal-300">Luxora Events™</span> 
            </h1>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-4 bg-cover bg-center" 
          style={{ backgroundImage: "url('/images/hdbg.png')" }}>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              ["/images/wedding.jpg", "row-span-2"],
              ["/images/bb2.jpg", ""],
              ["/images/we.jpg", "col-span-2"],
              ["/images/t2.jpeg", "row-span-2"],
              ["/images/ga4.jpg", "h-64"],
              ["/images/ga3.jpg", "col-span-2 h-72"],
              ["/images/ga2.jpg", "h-64"],
              ["/images/ga1.jpg", "row-span-2 h-96"],
            ].map((image, index) => (
              <motion.div 
                key={index} 
                className={`relative overflow-hidden rounded-lg shadow-lg ${image[1]}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.floor(index / 2) * 0.3 }}
              >
                <img 
                  src={image[0]} 
                  alt={`Event ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white text-black py-10">
        {/* Horizontal Line Further Below the Text */}
<div className="w-full h-[1px] bg-black  top-0 mt-14"></div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col space-y-3 md:items-start items-center md:pl-40">
            <img src="/images/logo.avif" alt="Select Event Group" className="w-20" />
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
          <div className="flex flex-col space-y-2 text-center">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <a href="#" className="text-cyan-600 text-italic">CATALOG</a>
            <a href="#" className="text-cyan-600 text-italic">CAREERS</a>
            <a href="#" className="text-cyan-600 text-italic">CONTACT US</a>
            <a href="#" className="text-cyan-600 text-italic">PRIVACY POLICY</a>
          </div>
          <div className="flex flex-col space-y-3 md:items-end items-center md:pr-20">
            <h3 className="font-semibold text-lg italic">Sign up for News and Specials</h3>
            <div className="flex w-full md:w-auto">
              <input type="email" placeholder="Your Email Address" className="w-full border border-gray-400 px-4 py-2 rounded-l-md focus:outline-none" />
              <button className="bg-cyan-700 text-white px-6 py-2 rounded-r-md">SIGN UP</button>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          Copyright © Select Event Group. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
