import React from "react";
import image from "../assets/images/Bacgroundimg.png";
function About() {
  return (
    <div>
      <main
        className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start px-4 py-8"
        style={{ backgroundImage: `url(${image})` }}
        aria-label="Présentation Chaindev"
      ></main>{" "}
    </div>
  );
}

export default About;
