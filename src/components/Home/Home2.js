import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.webp";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="purple"> introduce </span> myself
            </h1>
            <p className="home-about-body">
              I am a passionate <span className="purple">Data Scientist</span> and 
              <span className="purple"> Software Developer</span> with a strong interest in harnessing 
              the power of <span className="purple">Artificial Intelligence</span> and 
              <span className="purple"> Machine Learning</span> to solve real-world challenges.  
              <br />
              <br />
              My expertise includes working with programming languages such as 
              <span className="purple"> C#, Python,</span> and <span className="purple">Java</span>.
              <br />
              <br />
              I enjoy building efficient and scalable 
              <span className="purple"> Data-Driven Applications</span> and exploring the 
              intersection of mathematics and technology in AI advancements.
              <br />
              <br />
              I am always eager to learn, collaborate, and innovate to create meaningful 
              solutions in the world of <span className="purple">Data Science</span> and beyond.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact Me</h1>
            <p>
              Feel free to <span className="purple">connect with me </span>and let's create something amazing together!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Asmlatg"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/asmae-latifi-873b19292/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:asmaelatifi63@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
