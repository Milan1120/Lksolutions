import React from "react";

const features = [
    {
        title: "Skilled Techies",
        description:
            "We have a super-skilled and dedicated team of doers and believers.",
        bgColor: "bg-yellow-100",
        icon: "🛠️", // Use an emoji or replace with an actual SVG/icon.
    },
    {
        title: "Award-Winning",
        description:
            "We’re an industry-recognized and awarded web and app development company.",
        bgColor: "bg-pink-100",
        icon: "🏆",
    },
    {
        title: "Equality Driven",
        description:
            "At Lksolution we believe everyone should be valued, seen, heard, and respected.",
        bgColor: "bg-blue-100",
        icon: "⚖️",
    },
];


const BusinessCarousel = () => {
    return (
        <section className="py-16  md:py-16 md:px-8 lg:px-20 lg:py-28  overflow-hidden ">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
                Become a Next Gen Business with{" "}
                <span className="text-blue-500">Lksolution?</span>
            </h2>
            <div className="relative overflow-hidden">
                {/* Animated Scrolling Container */}
                <div className="flex w-max animate-scroll gap-8 md:gap-12 p-8">
                    {/* Duplicate array for seamless scrolling */}
                    {[...features, ...features].map((feature, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105"
                        >
                            <div
                                className={`w-16 h-16 flex items-center justify-center rounded-full text-2xl ${feature.bgColor}`}
                            >
                                {feature.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mt-4">
                                {feature.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 mt-2">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default BusinessCarousel;
