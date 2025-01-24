import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "This is Contact Page ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="We are here to help! Whether you have questions, need assistance, or want to learn more about our services, feel free to reach out to us. Our dedicated team is ready to provide you with the support you need."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
