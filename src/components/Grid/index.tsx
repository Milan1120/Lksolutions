"use client";
import Image from "next/image";
import React from "react";

const Grid = () => {
    return (<>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 sm:grid-cols-2 gap-4 my-12 relative">
          <div
            className="bg-purple-300 rounded-md p-3 text-center sm:p-3 lg:p-5"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
          >
            <Image
              width="69"
              height="74"
              src="https://www.appnwebtechnologies.com/storage/about/UZSXEADqRd6D9Bp4e_1709271572.png"
              alt="Years of Experience"
              loading="lazy"
              className="mx-auto"
            />
            <span className="counter count-digit counter-loaded font-bold">
              14
            </span>
            <span className="font-bold">+</span>
            <p className="font-semibold text-black">
              Years of Experience
            </p>
          </div>
          <div
            className="bg-sky-300 rounded-md p-3 text-center sm:p-3 lg:p-5"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
          >
            <Image
              width="69"
              height="74"
              src="https://www.appnwebtechnologies.com/storage/about/dCT2cek7JI4HFuzGop_1709271572.png"
              alt="Projects Delivered"
              loading="lazy"
              className="mx-auto"
            />
            <span className="counter count-digit counter-loaded font-bold">
              1850
            </span>
            <span className="font-bold">+</span>
            <p className="font-semibold text-black">
              Projects Delivered
            </p>
          </div>
          <div
            className="bg-green-300 rounded-md p-3 text-center sm:p-3 lg:p-5"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
          >
            <Image
              width="69"
              height="74"
              src="https://www.appnwebtechnologies.com/storage/about/xbTZkgVALG3QDH5Z7qsm_1709271572.png"
              alt="Revenue Generated"
              loading="lazy"
              className="mx-auto"
            />
            <span className="counter count-digit counter-loaded font-bold">
              26
            </span>
            <span className="font-bold">M+</span>
            <p className="font-semibold text-black">
              Revenue Generated
            </p>
          </div>
          <div
            className="bg-orange-300 rounded-md p-3 text-center sm:p-3 lg:p-5"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
          >
            <Image
              width="69"
              height="74"
              src="https://www.appnwebtechnologies.com/storage/about/IvT2DQqzBhjxm3pQ_1709271572.png"
              alt="Team Members"
              loading="lazy"
              className="mx-auto"
            />
            <span className="counter count-digit counter-loaded font-bold">
              70
            </span>
            <span className="font-bold">+</span>
            <p className="font-semibold text-black">Team Members</p>
          </div>
          <div
            className="bg-pink-300 rounded-md p-3 text-center sm:p-3 lg:p-5"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
          >
            <Image
              width="69"
              height="74"
              src="https://www.appnwebtechnologies.com/storage/about/mnT0OYHQVLOKD_1709271572.png"
              alt="Satisfied Clients"
              loading="lazy"
              className="mx-auto"
            />
            <span className="counter count-digit counter-loaded font-bold">
              1200
            </span>
            <span className="font-bold">+</span>
            <p className="font-semibold text-black">
              Satisfied Clients
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start">
            <a href="" target="_blank" className="px-5 py-2 bg-purple-500 rounded-md text-white sm:mr-4 font-normal block text-center btn-data btn-utl">Become
                a Partner</a>
            <a href="" className="px-5 py-2 bg-red-500 rounded-md text-white  sm:mr-4 font-normal block text-center btn-data  btn-utl">Get
                a Quote</a>
            <a href="" className="px-5 py-2 bg-blue-500 rounded-md text-white font-normal block text-center btn-data  btn-utl">Hire
                Resources</a>
        </div>
    </>);
}

export default Grid;