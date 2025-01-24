import React from "react";

const PlacementHeroSection = () => {
  return (
    <section className=" py-20 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-White-800 leading-tight">
            Transform Your Future With{" "}
            <span className="text-blue-800">Lksolution</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-600 mt-4">
            Whether its Machine Learning
          </p>
          <div className="border-b-4 border-purple-800 w-20 mt-2 mx-auto lg:mx-0"></div>
          <p className="text-gray-600 mt-6 text-sm md:text-base leading-relaxed">
            We offer modern training that can help you improve your abilities
            and open doors to exciting new possibilities. It’s time to start
            feeding your success.
          </p>
          {/* Icons Section */}
          <div className="flex flex-wrap justify-center lg:justify-start mt-6 gap-4">
            <div className="flex items-center space-x-2">
              <img
                src="/images/blog/author-03.png"
                alt="Get Skilled"
                className="h-8 w-8"
              />
              <p className="text-gray-700 font-medium text-sm">Get Skilled</p>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/images/blog/author-03.png"
                alt="Get Experienced"
                className="h-8 w-8"
              />
              <p className="text-gray-700 font-medium text-sm">
                Get Experienced
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/images/blog/author-03.png"
                alt="Get Hired"
                className="h-8 w-8"
              />
              <p className="text-gray-700 font-medium text-sm">Get Hired</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src="/images/hero/4565-removebg-preview.png"
            alt="Hero Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PlacementHeroSection;
