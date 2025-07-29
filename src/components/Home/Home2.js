import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/logo.PNG";
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
              I am a passionate <span className="purple"> Software Engineer</span> with a strong interest in harnessing 
              the power of <span className="purple">Computer Science</span> to solve real-world challenges.  
              <br />
              <br />
              I am dedicated to doing things the right way, consistently conducting extensive research before starting any project and holding myself to the highest standards. 
              I never allow myself to do a sloppy job—<span className="purple"> perfection is what I strive for</span>.
              <br />
              <br />
              These qualities directly translate into my ability to build <span className="purple">scalable</span> and <span className="purple">maintainable</span> applications, quickly learn new concepts and technologies, and produce <span className="purple">high-quality code</span>. 
              My commitment has also given me a <span className="purple">strong foundation</span> in <span className="purple">software development</span> and a solid knowledge base in <span className="purple">AI</span> and <span className="purple">data</span>.
              
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
