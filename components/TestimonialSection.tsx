import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

// Testimonials Data
const testimonials = [
  {
    name: "Santosh Marathe",
    image: "/images/user2.jpg",
    text: "The services provided by this company are excellent and professional. Thank you!",
  },
  {
    name: "John Doe",
    image: "/images/user1.jpg",
    text: "An outstanding team that ensures our events run smoothly. Highly recommended!",
  },
  {
    name: "Jane Smith",
    image: "/images/user3.jpg",
    text: "Very professional and great attention to detail. Our event was a success!",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 2000);
    return () => clearInterval(interval); // Cleanup function to prevent memory leaks
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <div className="relative bg-white py-16 px-6 md:px-12 font-lato flex justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/testimonial-bg.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-4xl text-center">
        {/* Profile Image */}
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            width={96}
            height={96}
            className="transition-opacity duration-500"
          />
        </div>

        {/* Testimonial Content */}
        <h2 className="text-xl md:text-2xl font-semibold font-playfair text-gray-800 transition-opacity duration-500">
          {testimonials[currentIndex].text}
        </h2>

        {/* Name */}
        <p className="mt-4 font-bold text-sky-800 text-lg">{testimonials[currentIndex].name}</p>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center mt-6 space-x-4">
          <button
            onClick={prevTestimonial}
            className="bg-white text-gray-600 p-2 rounded-full shadow-md hover:bg-sky-800 hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          {/* Profile Thumbnails */}
          <div className="flex space-x-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-10 h-10 rounded-full overflow-hidden border-2 transition duration-300 cursor-pointer ${
                  index === currentIndex ? "border-sky-800" : "border-gray-300 hover:border-sky-800"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <Image src={testimonial.image} alt={testimonial.name} width={40} height={40} />
              </div>
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="bg-white text-gray-600 p-2 rounded-full shadow-md hover:bg-sky-800 hover:text-white transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
