import React from "react";

// Static array for company images
const companies = [
    { name: "img1", logo: "/images/CompanyLogo/1.jpeg", alt: "logo1" },
    { name: "img2", logo: "/images/CompanyLogo/2.jpeg", alt: "logo2" },
    { name: "img3", logo: "/images/CompanyLogo/3.jpeg", alt: "logo3" },


    { name: "img12", logo: "/images/about/12.png", alt: "logo12" },
    { name: "img13", logo: "/images/about/13.png", alt: "logo13" },
    { name: "img14", logo: "/images/about/14.png", alt: "logo14" },
    { name: "img15", logo: "/images/about/15.png", alt: "logo15" },
    { name: "img16", logo: "/images/about/16.png", alt: "logo16" },
    { name: "img17", logo: "/images/about/17.png", alt: "logo17" },
    { name: "img18", logo: "/images/about/18.png", alt: "logo18" },



    { name: "img4", logo: "/images/CompanyLogo/4.jpeg", alt: "logo4" },
    { name: "img5", logo: "/images/CompanyLogo/5.jpeg", alt: "logo5" },
    { name: "img6", logo: "/images/CompanyLogo/6.jpeg", alt: "Logo6" },
    { name: "img7", logo: "/images/CompanyLogo/7.jpeg", alt: "Logo7" },
    { name: "img8", logo: "/images/CompanyLogo/8.jpeg", alt: "Logo8" },
    { name: "img9", logo: "/images/CompanyLogo/9.jpeg", alt: "Logo9" },
    { name: "img10", logo: "/images/CompanyLogo/10.jpeg", alt: "Logo10" },
    { name: "img11", logo: "/images/CompanyLogo/11.jpeg", alt: "Logo11" },
];

const OurAlumini = () => {
    return (
        <section className="py-10 px-4 sm:px-6 lg:px-[30px] overflow-hidden">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
                Our Alumini Works at
            </h2>
            <div className="relative w-full overflow-hidden">
                {/* Animated scrolling container */}
                <div className="flex w-max animate-scroll gap-4 sm:gap-6 items-center">
                    {/* Duplicate companies array for seamless scrolling */}
                    {[...companies, ...companies, ...companies].map((company, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-md p-4 flex justify-center items-center w-28 h-20 sm:w-32 sm:h-24 md:w-40 md:h-28"
                        >
                            <img
                                src={company.logo}
                                alt={company.alt}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>




    );
};

export default OurAlumini;
