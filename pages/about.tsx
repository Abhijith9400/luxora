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
        <Image
          src="/images/about.jpg"
          alt="Background"
          fill
          priority
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <motion.div
          className="relative z-10 w-full text-center px-6 md:px-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-white  leading-tight">
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
            <h1 className="text-3xl md:text-5xl font-sans-serif text-black leading-tight">
              We’re not just a provider.<br /> We’re a partner.
            </h1>
            <p className="text-lg text-gray-700 font-merienda">
              At Luxora Event Group, we go beyond being service providers of tenting, infrastructure, and rentals; 
              we consider ourselves dedicated partners committed to ensuring the success and flawless execution of every event.
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
            <Image
              src="/images/about.png"
              alt="Event Showcase"
              width={500}
              height={300}
              className="w-full max-w-sm md:max-w-md h-auto object-cover"
            />
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
          <h2 className="text-4xl md:text-5xl font-[var(--font-merienda)] mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed font-merienda">
            Our mission at <strong>Luxora Event Management</strong> is to provide professional event planning and management services across Kerala. 
            We focus on delivering professional events tailored to the Malayali community and outsiders organizing events in Kerala.
          </p>
          <p className="text-lg leading-relaxed mt-4 font-merienda">
            Our mission also includes catering to rural areas, villages, and small towns, blending creativity and cultural relevance to create unforgettable experiences.
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
          <h2 className="text-4xl md:text-5xl font-[var(--font-merienda)] mb-4">A Recall of Achievements</h2>
          <p className="text-lg leading-relaxed font-merienda">
            Our journey in the film and entertainment industry has been remarkable. From designing sets for acclaimed Malayalam films to celebrity weddings, we have been gaining recognition. 
          </p>
          <p className="text-lg leading-relaxed mt-4 font-merienda">
            Our focus is shifting towards destination weddings in Kerala, making it an ideal location for picturesque ceremonies.
          </p>
          <div className="w-full h-[1px] bg-black mt-14"></div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-50 text-black py-10 font-merienda">
        <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-3 text-center md:text-left">
            <Image src="/images/luxora.png" width={70} height={70} alt="Company Logo" className="mx-auto md:mx-0" />
            <p className="text-gray-600">United Arcade, Ground Floor 42<br/>Hyderabad, Telangana India<br/>500048</p>
            <p className="text-gray-600">+91-0000000000</p>
            <div className="flex justify-center md:justify-start space-x-4 text-blue-600 text-xl">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          <div className="flex flex-col space-y-2 text-center">
            <h3 className="text-lg font-bold">Quick Links</h3>
            {["Catalog", "Careers", "Contact Us", "Privacy Policy"].map(link => (
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
        <div className="text-center text-gray-500 text-sm mt-8">&copy; Select Event Group. All Rights Reserved.</div>
      </footer>
    </>
  );
}
