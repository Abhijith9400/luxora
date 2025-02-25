"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const events = [
  {
    title: "Camping Embrace Nature",
    description:
      "Nexus Events' camping excursions offer an immersive escape into the heart of nature, where adventure awaits at every turn.",
    image: "/images/bb1.jpg",
  },
  {
    title: "Trade Events",
    description:
      "Our trade events serve as pivotal platforms for industry growth, bringing together key players to explore trends and forge connections.",
    image: "/images/bb2.jpg",
  },
  {
    title: "Corporate Gatherings",
    description:
      "Specializing in corporate events, we create impactful experiences that enhance company cultures and drive success.",
    image: "/images/ga1.jpg",
  },
  {
    title: "Networking Conferences",
    description:
      "Elevate your professional network with our exclusive networking conferences designed to connect like-minded individuals.",
    image: "/images/ga2.jpg",
  },
];

export default function EventCarousel() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;

      // Ensure navigation is enabled before modifying it
      if (swiperInstance.params.navigation && typeof swiperInstance.params.navigation !== "boolean") {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col justify-center items-center px-6 py-12">
      {/* Content Container */}
      <div className="relative z-10 w-[90%] max-w-6xl">
        {/* Title & Navigation Buttons */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-serif text-black">Our Variant Events</h2>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              ref={prevRef}
              className="bg-black p-3 rounded-full shadow-md hover:bg-gray-700 text-white transition"
            >
              <FaArrowLeft />
            </button>
            <button
              ref={nextRef}
              className="bg-black p-3 rounded-full shadow-md hover:bg-gray-700 text-white transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={true} // Enable navigation
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (
                  prevRef.current &&
                  nextRef.current &&
                  swiper.params.navigation &&
                  typeof swiper.params.navigation !== "boolean"
                ) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
          >
            {events.map((event, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="max-w-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-[280px] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-black">{event.title}</h3>
                    <p className="text-gray-600 mt-2">{event.description}</p>
                    <div className="mt-4 flex justify-end">
                      <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-md transition-all">
                        <FaArrowRight className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
