import React from "react";
import Card from "react-bootstrap/Card";
import { ImCheckmark2 } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Asmae Latifi </span>
            from <span className="purple"> Dijon, France.</span>
            <br />
            I am currently an apprentice at APRR, where I serve as a Software Engineer.
            <br />
            I am also in my final year at Polytech Dijon, pursuing an engineering degree in Software Engineering and Artificial Intelligence.
            <br />
            <br />
            Apart from coding, here's what I love to do: 
          </p>
          <ul>
            <li className="about-activity">
              <ImCheckmark2 /> Writing blogs on AI and technology, sharing insights gained from my recent learning experiences.
            </li>
            <li className="about-activity">
              <ImCheckmark2 /> Exploring the latest math advancements in data science to sharpen my skills.
            </li>
            <li className="about-activity">
              <ImCheckmark2 /> I enjoy exploring music and learning about different instruments.
            </li>
            <li className="about-activity">
              <ImCheckmark2 /> Caring for our furry little companions-especially cats, as you might have already noticed- is something I truly enjoy!
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Meow."{" "}
          </p>
          <footer className="blockquote-footer">A cat, hopefully</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
