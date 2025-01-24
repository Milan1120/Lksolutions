"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import PlacementOne from "@/components/Placement/PlacementContent";
import PlacementContent1 from "@/components/Placement/PlacementContent1";
import React from "react";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Placement Page | Lksolution ",
//   description: "This is Placement Page ",
//   // other metadata
// };

const Placement = () => {
  return (
    <>
      <Breadcrumb 
      pageName="Placement Page" 
      description="" />
      
      <PlacementOne/>
    
    </>
  );
};

export default Placement;
