import Head from "next/head";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import "../app/globals.css"; // Adjust if Tailwind isn't applying
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact Us - Event Management</title>
        <meta
          name="description"
          content="Get in touch with FitU Floors & Decors for premium home design solutions."
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Background Section */}
      <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-4 bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/hdbg.png')" }}>
        

        {/* Content Wrapper */}
        <div className="relative z-10 text-center text-white max-w-5xl">
          <h1 className="text-5xl text-black md:text-6xl font-extrabold">
            Everything is designed, <br />
            But some <span className="text-yellow-400">things are designed Well.</span>
          </h1>
          <p className="text-lg text-gray-500 mt-3">
            We help people build beautifully designed functions.
          </p>
        </div>
        {/* Horizontal Line Further Below the Text */}
<div className="w-[70%] h-[1px] bg-black mt-12 mx-auto"></div>

      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto py-12 px-6">
        {/* Email */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-gray-900">
          <FaEnvelope className="text-3xl text-yellow-500 mb-3" />
          <h3 className="text-2xl font-semibold">Email</h3>
          <p className="text-gray-700 mt-2 text-center">
          Sales@luxoraevents.in
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-gray-900">
          <FaPhoneAlt className="text-3xl text-yellow-500 mb-3" />
          <h3 className="text-2xl font-semibold">Phone</h3>
          <p className="text-gray-700 mt-2">+91735268844</p>
          <p className="text-gray-700">+91 9736476481</p>
          <p className="text-gray-700">+91 8237278473</p>
        </div>

        {/* Location */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-gray-900">
          <FaMapMarkerAlt className="text-3xl text-yellow-500 mb-3" />
          <h3 className="text-2xl font-semibold">Location</h3>
          <p className="text-gray-700 mt-2 text-center">
          United Arcade, Ground Floor 42 <br/>Hyderabad, Telangana India <br/> 500048
          </p>
          <a
            href="https://maps.app.goo.gl/yvuk3gorn8s3HSS27 " // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-5 py-2 bg-cyan-700 text-white rounded-lg shadow-md hover:bg-cyan-900 transition"
          >
            View on Google Maps
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto p-8 bg-cyan-800 rounded-lg shadow-md mb-12">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block font-semibold text-white-500">Name*</label>
              <input
                type="text"
                placeholder="Please enter your full name."
                className="w-full p-3 border rounded-md bg-white text-gray-700 focus:ring focus:ring-yellow-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold text-white-500">Email Address*</label>
              <input
                type="email"
                placeholder="Enter an active email address."
                className="w-full p-3 border rounded-md bg-white text-gray-700 focus:ring focus:ring-yellow-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location */}
            <div>
              <label className="block font-semibold text-white-500">Location*</label>
              <input
                type="text"
                placeholder="Please enter your company's location."
                className="w-full p-3 border rounded-md bg-white text-gray-700 focus:ring focus:ring-yellow-300"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block font-semibold text-white-500">Contact Number*</label>
              <input
                type="tel"
                placeholder="Please share your phone number."
                className="w-full p-3 border rounded-md bg-white text-gray-700 focus:ring focus:ring-yellow-300"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold text-white-500">Message</label>
            <textarea
              placeholder="Got something to say? We're all ears!"
              className="w-full p-3 border rounded-md bg-white text-gray-700 focus:ring focus:ring-yellow-300"
              rows={4}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Get A Quote
            </button>
          </div>
        </form>
        
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
    </div>
    

    
  );
}
