import Head from "next/head";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import "../app/globals.css"; // Adjust if Tailwind isn't applying
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>gallery- Event Management</title>
        <meta
          name="description"
          content="Get in touch with FitU Floors & Decors for premium home design solutions."
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
      <video
  src="/videos/ginspired.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover z-0"
></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center px-10 md:px-20 text-center">
          <div className="md:w-1/2 w-full text-white space-y-6">
            <h1 className="text-5xl sm:text-5xl md:text-7xl font-playfair uppercase leading-tight">
              Gallery section inspired by <br/> 
              <span className="text-white">Luxora Events</span> 
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
  ["/images/galla.jpg", "col-span-2 h-72"],
  ["/images/a1.jpg", "h-48"],
  ["/images/a2.jpg", "col-span-2 h-80"],
  ["/images/a3.jpg", "row-span-2 h-96"],
  ["/images/a4.jpg", " row-span-2 h-50"],
  ["/images/a5.jpg", "col-span-2 h-64"],
  ["/images/a6.jpg", "row-span-2 h-80"],
  ["/images/a7.jpg", "row-span-2 h-60"],
].map((image, index) => (

              <motion.div 
                key={index} 
                className={`relative overflow-hidden rounded-lg shadow-lg ${image[1]}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.floor(index / 2) * 0.3 }}
              >
                <Image 
                  src={image[0]} 
                  alt={`Event ${index + 1}`} 
                  width={500} height={300}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                <button className="bg-sky-800 text-white px-6 py-2 rounded-r-md hover:bg-cyan-800">
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
