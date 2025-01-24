"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./override.css";
const MyCarousel = () => {
  const baseUrl = "/images/carousel";
  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
  const headind = ["Elevate Your Vision with Robust And Scalable Mobile App Development!",
    "Level Up Your Business Game with Fantasy Sports App Development!",
    "Enhance Your Brand Presence with Innovative Web Development Solutions!",
    "Hire Dedicated Professionals And Unleash Business Potential Beyond Borders!",
    "Unlock Access to Bespoke Apps And Product Innovation with Us!",
  ]

  return (
    <div className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
      <Carousel 
        autoPlay
        infiniteLoop
        centerMode={true}
        centerSlidePercentage={90}
        showThumbs={false}
        showStatus={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="object-cover w-full h-full rounded-lg"
              alt={`Image ${index + 1}`}
              src={`${baseUrl}/${image}`}
            />
            <div className="legend">
              <h1>
                {headind[index]}
              </h1>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
