import React from "react";

const features = [
  { id: 1, title: "Counseling", imgSrc: "/images/blog/author-01.png" },
  { id: 2, title: "Training", imgSrc: "/images/blog/author-01.png" },
  { id: 3, title: "Assignments", imgSrc: "/images/blog/author-01.png" },
  { id: 4, title: "Projects", imgSrc: "/images/blog/author-01.png" },
  { id: 5, title: "CV Building", imgSrc: "/images/blog/author-01.png" },
  { id: 6, title: "Career Growth", imgSrc: "/images/blog/author-01.png" },
  { id: 7, title: "Mock Interview", imgSrc: "/images/blog/author-01.png" },
  { id: 8, title: "Grooming", imgSrc: "/images/blog/author-01.png" },
  { id: 9, title: "Interview", imgSrc: "/images/blog/author-01.png" },
  { id: 10, title: "Placement", imgSrc: "/images/blog/author-01.png" },
];

const PlacementContent1 = () => {
  return (
    <div className="py-10 px-5 md:py-16 lg:py-20">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600">
          Salient hallmarks of the{" "}
          <span className="text-blue-600">10 Placement Steps</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Get unlimited access to structured course & doubt clearing sessions
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4"
          >
            <img
              src={feature.imgSrc}
              alt={feature.title}
              className="h-20 w-20 object-contain mb-4"
            />
            <h3 className="text-blue-900 text-sm md:text-base font-semibold text-center">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementContent1;
