"use client";
import { FaLayerGroup, FaHandshake, FaPuzzlePiece } from "react-icons/fa";

const features = [
  {
    icon: <FaLayerGroup className="text-gray-400 text-5xl" />,
    title: "Versatile & Responsive",
    description:
      "At Luxora Event, flexibility is our hallmark. Our dedicated team collaborates with trusted global partners to orchestrate outstanding events. As the landscape evolves, we continuously refine our skills and engage with all stakeholders to achieve mutual objectives. With our adept team, we adeptly navigate any scenario, ensuring unparalleled service for our clients.",
  },
  {
    icon: <FaHandshake className="text-gray-400 text-5xl" />,
    title: "Dedicated to Partnership",
    description:
      "Our ethos revolves around collaboration, as we integrate seamlessly with our clients, embodying an extension of their team. This deepens our understanding of their objectives, hurdles, and opportunities. By fostering enduring relationships, we strive for mutual success and enduring partnerships.",
  },
  {
    icon: <FaPuzzlePiece className="text-gray-400 text-5xl" />,
    title: "Customized Solutions",
    description:
      "Luxora Event prides itself on tailoring solutions to fit the unique needs of each client. Through personalized consultations and meticulous attention to detail, we craft bespoke strategies that maximize impact and exceed expectations.",
  },
];

export default function FeatureSection() {
  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="grid grid-cols-12 gap-6 items-center mb-12">
            {/* Left Side: Icon & Title */}
            <div className="col-span-5 flex items-center space-x-4">
              <div className="flex-shrink-0">{feature.icon}</div>
              <h3 className="text-gray-700 text-2xl font-semibold">{feature.title}</h3>
            </div>

            {/* Right Side: Description */}
            <div className="col-span-7">
              <p className="text-gray-500 text-left text-1xl">{feature.description}</p>
            </div>

            {/* Horizontal Line */}
            <div className="col-span-12 flex justify-center">
              <div className="w-[60%] h-[2px] bg-green-500 mt-6"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
