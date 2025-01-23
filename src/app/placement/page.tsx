"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";

const Placement = () => {
  return (
    <>
      <Breadcrumb pageName="Placement Page" description="" />
      <div className="px-30 overflow-hidden py-16 md:py-20 lg:py-28">
        {" "}
        {/* Stack elements vertically and center them */}
        {/* Centered Image */}
        {/* <div className="flex justify-center">
               <Image
                 src="/images/blog/blog-01.jpg" // Corrected the image path
                 alt="Placement Icon"
                 width={500} // Adjust width as needed
                 height={500} // Adjust height as needed
                 className="object-contain"
               />*/}
        {/* Text content below the image */}
        <div className="flex-row">
          <h1 className="flex-row text-3xl font-bold">
            Technical Training and Placement: A Pathway to Professional
            Excellence
          </h1>
          <p>
            Technical training serves as a cornerstone for building a successful
            professional career, and the right placement is essential to
            initiate this journey effectively. At Technoglobe, our Placement
            Cell is dedicated to ensuring the seamless transition of our
            students into the professional world. This commitment extends to
            students enrolled in a variety of technical programs offered by our
            institution.
          </p>
          <p>
            Our Training and Placement Officer plays a pivotal role in preparing
            students for the competitive job market. Through a combination of
            personality development sessions and placement assistance, students
            are groomed for success. Placement opportunities are provided
            through in-campus and off-campus placement drives, ensuring
            comprehensive support for their career aspirations.
          </p>
          <p>
            Recently, Technoglobe organized a Mega Job Fair at its Gopalpura
            Campus and the Bhandari Hospital auditorium. This event witnessed
            the participation of over 300 candidates and 15+ reputed companies.
            The job fair concluded with remarkable success, as more than 50
            candidates secured positions across diverse domains, including IT,
            Sales, Finance, SEO, Administration, and Accounting.
          </p>
          <p>
            The event was also attended by several esteemed guests who
            recognized and appreciated Technoglobe's dedicated efforts in
            bridging the gap between education and employment. Their presence
            inspired and motivated students to achieve their professional goals.
          </p>
        </div>
      </div>
    </>
  );
};

export default Placement;

// <div className="flex flex-row items-center space-y-4"> {/* Stack elements vertically and center them */}
//             {/* Centered Image */}
//             {/* <div className="flex justify-center">
//               <Image
//                 src="/images/blog/blog-01.jpg" // Corrected the image path
//                 alt="Placement Icon"
//                 width={500} // Adjust width as needed
//                 height={500} // Adjust height as needed
//                 className="object-contain"
//               />*/}
//             </div>

//             {/* Text content below the image */}
//             <div className="flex-row">
//               <h1 className="text-3xl font-bold flex-row">Technical Training and Placement: A Pathway to Professional Excellence</h1>
//               <p>
//                 Technical training serves as a cornerstone for building a successful professional career,
//                 and the right placement is essential to initiate this journey effectively.
//                 At Technoglobe, our Placement Cell is dedicated to ensuring the seamless transition of our
//                 students into the professional world. This commitment extends to students enrolled in a
//                 variety of technical programs offered by our institution.
//               </p>
//               <p>
//                 Our Training and Placement Officer plays a pivotal role in preparing students for the
//                 competitive job market. Through a combination of personality development sessions and
//                 placement assistance, students are groomed for success. Placement opportunities are provided
//                 through in-campus and off-campus placement drives, ensuring comprehensive support for their
//                 career aspirations.
//               </p>
//               <p>
//                 Recently, Technoglobe organized a Mega Job Fair at its Gopalpura Campus and the Bhandari
//                 Hospital auditorium. This event witnessed the participation of over 300 candidates and
//                 15+ reputed companies. The job fair concluded with remarkable success, as more than 50
//                 candidates secured positions across diverse domains, including IT, Sales, Finance, SEO,
//                 Administration, and Accounting.
//               </p>
//               <p>
//                 The event was also attended by several esteemed guests who recognized and appreciated
//                 Technoglobe's dedicated efforts in bridging the gap between education and employment.
//                 Their presence inspired and motivated students to achieve their professional goals.
//               </p>
//             </div>
//           </div>
//         }
//       />
//     </div>
