"use client";
// import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import PlacementContent1 from "./PlacementContent1";
import PlacementHeroSection from "./PlacementHeroSection";
import PlacementCertificate from "./PlacementCertificate";
import OurAlumini from "./OurAlumini";

const PlacementOne = () => {
  return (
    <>  
       
      
      <div className="overflow-hidden py-16 xs:py-20 md:py-24 lg:py-28 px-4 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-25">

      <PlacementHeroSection/>
      <section className=" py-20 px-6 md:px-12 lg:px-20">

      <div className="flex flex-col space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Technical Training and Placement: A Pathway to Professional Excellence
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Technical training serves as a cornerstone for building a successful professional career, and the right placement is essential to initiate this journey effectively. At Technoglobe, our Placement Cell is dedicated to ensuring the seamless transition of our students into the professional world. This commitment extends to students enrolled in a variety of technical programs offered by our institution.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Our Training and Placement Officer plays a pivotal role in preparing students for the competitive job market. Through a combination of personality development sessions and placement assistance, students are groomed for success. Placement opportunities are provided through in-campus and off-campus placement drives, ensuring comprehensive support for their career aspirations.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The event was also attended by several esteemed guests who recognized and appreciated Technoglobe&apos;s dedicated efforts in bridging the gap between education and employment. Their presence inspired and motivated students to achieve their professional goals.
        </p>

      </div>
      <PlacementContent1/>
       <PlacementCertificate/>
       <OurAlumini/>
      </section>
      
    </div>
    </>
  );
};

export default PlacementOne;
