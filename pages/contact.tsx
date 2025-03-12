import Head from "next/head";
import Navbar from "@/components/Navbar";
import "../app/globals.css";
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      
      <Navbar />

      <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
        <video
          src="/videos/contact.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-center space-x-0 lg:space-x-10 space-y-10 lg:space-y-0 px-5 py-20 w-full">

          {/* Contact Form Section */}
          <div className="bg-white p-4 md:p-10 shadow-md rounded-md w-full max-w-[320px] md:max-w-[800px] h-auto m-5 md:ml-0 lg:ml-[200px]">

            <h2 className="text-2xl font-bold mb-6 text-black font-playfair text-center lg:text-left">CONTACT US</h2>
            <form className="flex flex-col space-y-6">
              <input 
                type="text" 
                placeholder="Enter your Name" 
                className="border-b border-sky-400 p-2 focus:outline-none text-black" 
              />
              <input 
                type="email" 
                placeholder="Enter a valid email address" 
                className="border-b border-sky-400 p-2 focus:outline-none text-black" 
              />
              <select 
  className="border-b border-sky-400 p-2 focus:outline-none text-black bg-white font-'var(--font-lato)'"
  defaultValue=""
>
  <option value="" disabled hidden>Select Package</option>
  <option value="basic">Wedding Package</option>
  <option value="basic">Haldi Package</option>
  <option value="standard">Engagement Package</option>
  <option value="premium">Corporate Event Package</option>
  <option value="basic">Birthday Party Package</option>
</select>


              <textarea 
                placeholder="Enter your message" 
                className="border-b border-sky-400 p-2 focus:outline-none text-black"
              ></textarea>
               
              <button 
                className="mt-2 bg-black text-white py-1 px-4 rounded-md hover:bg-gray-800 transition text-sm self-start"
              >
                
                SUBMIT
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="bg-gray-800 text-white p-6 md:p-4 rounded-md shadow-md w-full max-w-[400px] md:max-w-[500px] lg:max-w-[1000px] h-auto m-4 relative lg:left-[-50px] lg:top-[200px] flex flex-col space-y-6 md:space-y-4">

            <div>
              <div className="flex items-center mb-1">
                <FaPhone className="text-xl text-orange-400 mr-2" />
                <span className="font-bold text-lg">CALL US</span>
              </div>
              <p className="text-gray-300">1 (234) 567-891, 1 (234) 987-654</p>
            </div>

            <div>
  <div className="flex items-center mb-1">
    <FaMapMarkerAlt className="text-xl text-orange-400 mr-2" />
    <span className="font-bold text-lg">LOCATION</span>
  </div>
  <p className="text-gray-300 mb-3">
    United Arcade, Ground Floor 42 <br/>Hyderabad, Telangana, India 500048
  </p>
  
  <a
    href="https://maps.app.goo.gl/iVoyoLATv6oJA3Qa7"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button 
      className="mt-2 bg-orange-400 text-white py-1 px-4 rounded-md hover:bg-orange-500 transition-colors"
    >
      View on Map
    </button>
  </a>
</div>


            <div>
              <div className="flex items-center mb-1">
                <FaMapMarkerAlt className="text-xl text-orange-400 mr-2" />
                <span className="font-bold text-lg">EMAIL</span>
              </div>
              <p className="text-gray-300">
              Sales@luxoraevents.in 
              </p>
            </div>

            <div>
              <div className="flex items-center mb-1">
                <FaClock className="text-xl text-orange-400 mr-2" />
                <span className="font-bold text-lg">BUSINESS HOURS</span>
              </div>
              <p className="text-gray-300">Mon - Fri: 9 am - 6 pm </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
