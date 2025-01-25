"use client"; // Mark this as a Client Component

import { useEffect, useRef, useState } from "react";

export default function Tech() {
  const industries = [
    { name: "eCommerce", icon: "🛒" },
    { name: "Media", icon: "🎥" },
    { name: "Education", icon: "🎓" },
    { name: "Retail", icon: "🛍️" },
    { name: "Logistics", icon: "🚚" },
    { name: "Wellness", icon: "💙" },
    { name: "Social Networking", icon: "🔗" },
    { name: "Aviation", icon: "✈️" },
  ];

  const technologies = [
    { name: "Strapi", icon: "⚙️" },
    { name: "Zoho", icon: "🧩" },
    { name: "AWS", icon: "☁️" },
    { name: "WordPress", icon: "📘" },
    { name: "Google Cloud", icon: "☁️" },
    { name: "Golang", icon: "🐹" },
    { name: "Azure", icon: "☁️" },
    { name: "SQL Server", icon: "🗄️" },
  ];

  const industriesRef = useRef(null);
  const technologiesRef = useRef(null);
  const [industriesData, setIndustriesData] = useState(industries);
  const [technologiesData, setTechnologiesData] = useState(technologies);

  // Infinite scroll handler
  const handleScroll = (divRef, data, setData) => {
    if (divRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = divRef.current;

      // Check if scrolled to the bottom
      if (scrollTop + clientHeight >= scrollHeight) {
        // Add more items to the list
        setData((prevData) => [...prevData, ...data]);
      }
    }
  };

  useEffect(() => {
    const industriesContainer = industriesRef.current;
    const technologiesContainer = technologiesRef.current;

    const handleIndustriesScroll = () =>
      handleScroll(industriesContainer, industries, setIndustriesData);
    const handleTechnologiesScroll = () =>
      handleScroll(technologiesContainer, technologies, setTechnologiesData);

    // Add scroll listeners
    if (industriesContainer) {
      industriesContainer.addEventListener("scroll", handleIndustriesScroll);
    }
    if (technologiesContainer) {
      technologiesContainer.addEventListener("scroll", handleTechnologiesScroll);
    }

    return () => {
      // Cleanup listeners
      if (industriesContainer) {
        industriesContainer.removeEventListener(
          "scroll",
          handleIndustriesScroll
        );
      }
      if (technologiesContainer) {
        technologiesContainer.removeEventListener(
          "scroll",
          handleTechnologiesScroll
        );
      }
    };
  }, [industries, technologies]);


  return (
    <div className="relative  py-10 px-8 rounded-lg border-dotted border-2 border-gray-300">
      <div className="px-2 container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 relative">
        {/* Industries (Left Column) */}
        <div
          ref={industriesRef}
          className="px-3 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:w-1/2 max-h-96 overflow-y-auto scroll-smooth hide-scrollbar"
        >
          {industriesData.map((industry, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <div className="text-3xl text-blue-500">{industry.icon}</div>
              <p className="mt-2 text-center font-semibold text-gray-700">
                {industry.name}
              </p>
            </div>
          ))}
        </div>

        {/* Center Text */}
        <div className="text-center w-full lg:w-1/3">
          <h2 className="text-3xl md:text-3xl font-bold text-inherit-800">
            Industry & Technology
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Lksolution, a web & mobile app development company, is a team of
            experienced professionals measuring dozens of completed projects.
            Expand your business with zero limitations. Connect with all your
            favorite technologies to fuel your growth.
          </p>
        </div>

        {/* Technologies (Right Column) */}
        <div
          ref={technologiesRef}
          className=" px-3 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:w-1/2 max-h-96 overflow-y-auto scroll-smooth hide-scrollbar"
        >
          {technologiesData.map((technology, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <div className="text-3xl text-blue-500">{technology.icon}</div>
              <p className="mt-2 text-center font-semibold text-gray-700">
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
