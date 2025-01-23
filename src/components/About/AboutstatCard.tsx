import React from "react";

const AboutstatCard = () => {
  const stats = [
    { number: "2+", text: "Years Of Delivering Excellence", bg: "bg-transparent" },
    { number: "20+", text: "Available Career Courses", bg: "bg-transparent" },
    { number: "200+", text: "Tie-Up Companies For Placement", bg: "bg-transparent" },
    { number: "1,000+", text: "Trained & Placed Students", bg: "bg-transparent" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex flex-col justify-center items-center w-full md:w-1/4 py-8 text-white rounded-md  outline ${stat.bg}`}
        >
          <h2 className="text-3xl font-bold">{stat.number}</h2>
          <p className="text-center text-sm md:text-base">{stat.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutstatCard;
