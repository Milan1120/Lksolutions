import React from "react";

const certifications = [
  {
    id: 1,
    imgSrc: "public/images/hero/mca.jpeg",
    alt: "Ministry of Corporate Affairs",
    description: "Ministry of Corporate Affairs",
  },
  {
    id: 2,
    imgSrc: "/images/msme-logo.png",
    alt: "MSME",
    description: "Micro, Small and Medium Enterprises",
  },
  {
    id: 3,
    imgSrc: "/images/hero/DigitalIndia.jpeg",
    alt: "Digital India",
    description: "Digital India - Power to Empower",
  },
];

const PlacementCertificate = () => {
  return (
    <section className=" py-12 px-6 md:px-12 lg:px-20">
      <div className="text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-inherit-800">
          We are Proudly Certified by
        </h2>
        {/* Subtitle */}
        <p className="text-inherit-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          We’re thrilled to announce that InternElite has been certified for its
          outstanding educational offerings, assuring professionals and students of
          our commitment to excellence.
        </p>
      </div>
      {/* Certifications */}
      <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
        {certifications.map((cert) => (
          <div key={cert.id} className="flex flex-col items-center">
            <img
              src={cert.imgSrc}
              alt={cert.alt}
              className="h-16 w-auto md:h-20"
            />
            <p className="text-inherit-700 text-xs md:text-sm text-center mt-2">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlacementCertificate;
