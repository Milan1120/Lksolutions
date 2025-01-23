import BusinessCarousel from "@/components/About/AboutBusinessCarousel";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutstatCard from "@/components/About/AboutstatCard";
import ClientCompanies from "@/components/About/ClientCompanyCorousel";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="At LKSolution, we specialize in delivering high-quality Web & Mobile App Development services. Our skilled team of developers creates customized, business-focused solutions that cater to your unique needs. With expertise in the latest technologies, we provide reliable, innovative, and affordable solutions, ensuring fast turnaround times and outstanding results.

        As a top Web & Mobile App Development company, we have extensive experience working with clients across various industries worldwide, delivering exceptional solutions that drive business success."
      />
      <AboutstatCard/>
      <ClientCompanies/>
      <BusinessCarousel/>
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
