import Head from "next/head";
import Navbar from "@/components/Navbar";
import "../app/globals.css";
import { FaArrowRight, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import { Engagement } from "next/font/google";
import { motion } from "framer-motion";


interface PackagePlan {
  name: string;
  price: string;
  features: string[];
  image: string;
}

interface PricingProps {
  title: string;
  description: string;
  plans: PackagePlan[];
}

const PricingSection: React.FC<PricingProps> = ({ title, description, plans }) => (
  <motion.section
    className="py-16 bg-cover bg-white  px-6 md:px-20"
    style={{ backgroundImage: "url('/images/hdbg.png')" }}
    initial={{ opacity: 0, y: 50 }} // Start hidden and below
    whileInView={{ opacity: 1, y: 0 }} // Animate into view
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="max-w-6xl bg-white mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-6 text-black"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      
      <motion.p
        className="text-lg text-gray-700 bg-white   mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>

      <div className=" bg-white grid md:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-xl p-8 shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={plan.image}
              alt={plan.name}
              width={120}
              height={120}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-2xl font-semibold mb-3 text-black">{plan.name}</h3>
            <p className="text-xl font-bold text-gray-800">{plan.price}</p>
            <ul className="text-black mt-4 text-left space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">- {feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

// Pricing Section Component

interface Plan {
  image: string;
  name: string;
  price?: string;
  features?: string[];
}

interface HaldiProps {
  title: string;
  description: string;
  plans: Plan[];
}

const Haldi: React.FC<HaldiProps> = ({ title, description, plans }) => (
  <motion.section
    className="py-16 bg-cover bg-white px-8 md:px-20"
    style={{ backgroundImage: "url('/images/hdbg.png')" }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }} >
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-6 text-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10 justify-center">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-xl p-8 shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 100 }} // Cards move up when scrolled
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={plan.image}
              alt={plan.name}
              width={120}
              height={120}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-2xl font-semibold mb-3 text-black">{plan.name}</h3>
            {plan.price && <p className="text-xl font-bold text-gray-800">{plan.price}</p>}
            {plan.features ? (
              <ul className="text-black mt-4 text-left space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    - <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

//  wedding Package Plans

const plans = [
  {
    name: "Basic Package",
    price: "₹2,50,000 - ₹4,00,000",
    features: [
      "Venue decoration (basic floral & draping)",
      "Photography & videography (standard coverage)",
      "Catering (Veg/Non-Veg, 200 guests)",
      "Basic DJ & sound system",
      "Entry setup (basic floral arch)",
      "Standard seating & table arrangements",
    ],
    image: "/images/mbasic.jpg",
  },
  {
    name: "Premium Package",
    price: "₹5,00,000 - ₹8,00,000",
    features: [
      "Themed venue decoration",
      "Professional wedding photography & cinematic videography",
      "Premium catering (Veg/Non-Veg, 300+ guests)",
      "Luxury vehicle for bride & groom",
      "DJ, sound system & lighting setup",
      "Exclusive bridal entry & varmala theme setup",
    ],
    image: "/images/mvenue.jpg",
  },
  {
    name: "Luxury Package",
    price: "₹10,00,000+",
    features: [
      "Luxury venue selection",
      "High-end decor with imported flowers & LED lighting",
      "Drone photography & live streaming",
      "5-star catering with multi-cuisine buffet",
      "Designer bridal stage & mandap",
      "Luxury car rentals (BMW, Audi, etc.)",
      "Celebrity performers/DJs",
    ],
    image: "/images/mluxuary.jpg",
  },
];

function WeddingPricingSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-black">Wedding Packages</h2>
        <p className="text-lg text-gray-700 mb-10">
          Choose the perfect wedding package for your special day.
        </p>

        {/* Package Cards with Animation */}
        <div className=" bg-white flex flex-wrap justify-center gap-10">
          {plans.map((pkg, index) => (
            <motion.div
              key={index}
              className="bg-white border rounded-xl p-6 shadow-lg w-80"
              initial={{ opacity: 0, x: -100 }} // Start hidden
              whileInView={{ opacity: 1, x: 0 }} // Animate into view
              transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered effect
              viewport={{ once: true, amount: 0.2 }} // Ensure it animates when visible
            >
              <Image
                src={pkg.image}
                alt={pkg.name}
                width={250}
                height={150}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-semibold mb-3 text-black">{pkg.name}</h3>
              <p className="text-xl font-bold text-gray-800">{pkg.price}</p>
              <ul className="text-black mt-4 text-left space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    ✅ <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




// haldi Plans
const haldi = [
  {
    name: "Basic Package",
    price: "₹50,000 - ₹1,00,000",
    features: [
      "Simple floral decoration",
      "Basic photography",
      "Small sound system & background music",
      "Seating & rangoli setup",
   
    ],
    image: "/images/hbasic.jpg",
  },
  {
    name: "Premium Package",
    price: "₹1,50,000 - ₹3,00,000",
    features: [
      "Themed floral & marigold decoration",
      "Professional photography & videography",
      "Sound system & customized playlist",
      "Photo booth & props",
      "Customized Haldi bowls & thalis",

    ],
    image: "/images/bpremium.jpg",
  },
  
];

// engagement Plans
const engagement = [
  {
    name: "Basic Package",
    price: "₹1,50,000 - ₹3,00,000",
    features: [
      "Standard venue decoration",
      "Photography & videography",
      "Catering for 100-150 guests",
      "Basic DJ & sound system",
   
    ],
    image: "/images/ebasic.jpg",
  },
  {
    name: "Premium Package",
    price: "₹4,00,000 - ₹7,00,000",
    features: [
      "Elegant venue decoration (theme-based)",
      "Drone photography & cinematic shoot",
      "High-end catering",
      "LED stage, couple entry setup, & special effects",

    ],
    image: "/images/epremium.jpg",
  },
  
];

// corporate Plans
const corporate = [
  {
    name: "Basic Package",
    price: "₹1,50,000 - ₹3,00,000",
    features: [
      "Stage setup & backdrop",
      "Sound & lighting system",
      "Photography & event coverage",
      "Tea, snacks, and basic catering",
   
    ],
    image: "/images/cbasic.jpg",
  },
  {
    name: "Premium Package",
    price: "₹4,00,000 - ₹8,00,000",
    features: [
    "LED stage, podium, & branding setup",
    "High-end sound & AV system",
    "Professional photography & videography",
    "Multi-cuisine catering for guests",
    "Event hosting & entertainment",
    ],
    image: "/images/cpremium.jpg",
  },
  
];

// birthday party Plans
const bday = [
  {
    name: "Basic Package",
    price: "₹50,000 - ₹1,00,000",
    features: [
      "Balloon decoration",
      "Themed cake table setup",
      "Photography & videography",
      "Small sound system & music",
   
    ],
    image: "/images/bbasic.jpg",
  },
  {
    name: "Premium Package",
    price: "₹1,50,000 - ₹3,00,000",
    features: [
      "Grand themed decoration",
      "Magic show/entertainment",
      "Themed birthday cake",
      "DJ, lighting, & sound setup",
      "Catering for 100+ guests",
    ],
    image: "/images/bday.jpg",
  },
  
];

export default function Contact() {
  return (
    <>
      <Head>
        <title>Packages - Event Management</title>
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/annual.webp"
          alt="Event Background"
          fill
          priority
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 w-full text-center px-6 md:px-20">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-white font-serif leading-tight">
            Our Packages
          </h1>
          <div className="w-16 h-1 bg-white my-4 mx-auto"></div>
         
        </div>
      </section>

      {/* Pricing Section wedding */}
<div id="wedding-packages">
  <PricingSection
    title="Wedding Packages"
    description="Choose a plan that suits your needs and budget."
    plans={plans}
  />
</div>
       {/* Pricing Section haldi */}
<div id="haldi-packages">
  <Haldi
    title="Haldi Packages"
    description=""
    plans={haldi}
  />
</div>

{/* Pricing Section engagement */}
<div id="engagement-packages">
  <Haldi
    title="Engagement Packages"
    description=""
    plans={engagement}
  />
</div>

{/* Pricing Section corporate */}
<div id="corporate-packages">
  <Haldi
    title="Corporate Packages"
    description=""
    plans={corporate}
  />
</div>

{/* Pricing Section birthday */}
<div id="birthday-packages">
  <Haldi
    title="Birthday Packages"
    description=""
    plans={bday}
  />
</div>
      {/* Footer */}
      <footer className="bg-gray-50 text-black py-10">
        <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-3 text-center md:text-left">
                    <Image src="/images/luxora.png" width={70} height={70} alt="Company Logo" className="mx-auto md:mx-0" />
            <p className="text-gray-600">
            United Arcade, Ground Floor 42 <br/>Hyderabad, Telangana India <br/> 500048
            </p>
            <p className="text-gray-600">+91-0000000000</p>
            <div className="flex justify-center md:justify-start space-x-4 text-blue-600 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
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
          &copy; Select Event Group. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
