import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Engineer",
          "Data Scientist",
          "Artificial Intelligence Enthusiast",
          "Software Developer",
          "Big Data Engineer",
          "Business Intelligence Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
