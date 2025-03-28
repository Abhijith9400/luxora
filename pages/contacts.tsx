"use client";

import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import "../app/globals.css";
import { FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [packageType, setPackageType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("✅ Message recorded successfully! (Email not sent)");

    // Clear form fields
    setName("");
    setPhone("");
    setEmail("");
    setPackageType("");
    setMessage("");

    // Reset status after 5 seconds
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <>
      <Navbar />

      <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
        {/* Background Video */}
        <video
          src="/videos/contact.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-center px-5 py-20 w-full">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-10 shadow-lg rounded-md w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 text-black text-center">
              CONTACT US
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Name"
                className="border-b border-sky-400 p-2 focus:outline-none text-black"
                required
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="border-b border-sky-400 p-2 focus:outline-none text-black"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter a valid email address"
                className="border-b border-sky-400 p-2 focus:outline-none text-black"
                required
              />
              <select
                value={packageType}
                onChange={(e) => setPackageType(e.target.value)}
                className="border-b border-sky-400 p-2 focus:outline-none text-black bg-white"
                required
              >
                <option value="" disabled>
                  Select Package
                </option>
                <option value="Wedding Package">Wedding Package</option>
                <option value="Haldi Package">Haldi Package</option>
                <option value="Engagement Package">Engagement Package</option>
                <option value="Corporate Event Package">
                  Corporate Event Package
                </option>
                <option value="Birthday Party Package">
                  Birthday Party Package
                </option>
              </select>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                className="border-b border-sky-400 p-2 focus:outline-none text-black"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition text-sm"
              >
                SUBMIT
              </button>

              {/* Status Message */}
              {status && (
                <p
                  className={`text-center mt-3 ${
                    status.includes("✅") ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-800 text-white p-6 rounded-md shadow-lg w-full max-w-md lg:max-w-xl mt-10 lg:mt-0 lg:ml-10">
            <div className="space-y-4">
              {/* Call Us */}
              <div className="flex items-center">
                <FaPhone className="text-xl text-orange-400 mr-2" />
                <span className="font-bold text-lg">CALL US</span>
              </div>
              <p className="text-gray-300">
                +917306205146 | +918712365841 | +918919138745
              </p>

              {/* Location */}
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-xl text-orange-400 mr-2" />
                <span className="font-bold text-lg">LOCATION</span>
              </div>
              <p className="text-gray-300">
                United Arcade, Ground Floor 42
                <br />
                Hyderabad, Telangana, India 500048
              </p>

              <a
                href="https://maps.app.goo.gl/iVoyoLATv6oJA3Qa7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-2 bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500 transition">
                  View on Map
                </button>
              </a>

              {/* Email */}
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-xl text-orange-400 mr-2" />
                <span className="font-bold text-lg">EMAIL</span>
              </div>
              <p className="text-gray-300">Sales@luxoraevents.in</p>

              {/* Business Hours */}
              <div className="flex items-center">
                <FaClock className="text-xl text-orange-400 mr-2" />
                <span className="font-bold text-lg">BUSINESS HOURS</span>
              </div>
              <p className="text-gray-300">Mon - Fri: 9 am - 6 pm</p>

              {/* WhatsApp Contact */}
              <div className="flex items-center mt-4">
                <FaWhatsapp className="text-xl text-green-500 mr-2" />
                <a
  href="https://wa.me/918712365841?text=Hello, I’d like to know more about your services!"
  target="_blank"
  rel="noopener noreferrer"
  className="text-green-400 hover:text-green-300 font-bold"
>
  Contact Us on WhatsApp
</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
