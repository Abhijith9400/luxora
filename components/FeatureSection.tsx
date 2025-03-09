"use client";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaLayerGroup, FaHandshake, FaPuzzlePiece } from "react-icons/fa";

const features = [
  {
    icon: <FaLayerGroup className="text-sky-800 text-4xl md:text-5xl" />,
    title: "Versatile & Responsive",
    description:
      "At Luxora Event, flexibility is our hallmark. Our dedicated team collaborates with trusted global partners to orchestrate outstanding events. We continuously refine our skills and engage with all stakeholders to achieve mutual objectives, ensuring unparalleled service for our clients.",
  },
  {
    icon: <FaHandshake className="text-sky-800 text-4xl md:text-5xl" />,
    title: "Dedicated to Partnership",
    description:
      "Our ethos revolves around collaboration. We integrate seamlessly with our clients, embodying an extension of their team. By fostering enduring relationships, we strive for mutual success and lasting partnerships.",
  },
  {
    icon: <FaPuzzlePiece className="text-sky-800 text-4xl md:text-5xl" />,
    title: "Customized Solutions",
    description:
      "Luxora Event tailors solutions to fit the unique needs of each client. Through personalized consultations and attention to detail, we craft bespoke strategies that maximize impact and exceed expectations.",
  },
];

export default function FeatureSection() {
  return (
    <motion.div
      className="w-full bg-white py-12 px-4 md:px-8 lg:px-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center text-center md:text-left mb-10 md:mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }} // Delay effect for each item
            viewport={{ once: true }}
          >
            {/* Left Side: Icon & Title */}
            <div className="flex items-center space-x-4 w-full md:w-1/3 justify-center md:justify-start">
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.1 }} // Hover Effect
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-gray-800 text-xl md:text-2xl font-semibold">{feature.title}</h3>
            </div>

            {/* Right Side: Description */}
            <div className="w-full md:w-2/3 mt-4 md:mt-0">
              <p className="text-amber-800 text-base md:text-lg leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}

        {/* Horizontal Line Animation */}
        <motion.div 
          className="flex justify-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-[80%] md:w-[60%] h-[2px] bg-sky-800 mt-6"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}
