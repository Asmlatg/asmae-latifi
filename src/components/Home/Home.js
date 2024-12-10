import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photo.jpg";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi,{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Asmae Latifi</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            
            <Col md={5} className="d-flex justify-content-center align-items-center" style={{ paddingBottom: 20 }}>
              <div 
                className="image-container"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                }}
              >
                <img 
                  src={myImg}
                  alt="Asmae Latifi"
                  className="w-100"
                  style={{ 
                    objectFit: "cover",
                    height: "400px",
                    transition: "opacity 0.3s ease",
                    position: "relative",
                    zIndex: 1
                  }}
                />
                {/* Fade overlay */}
                <div 
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.2) 100%)",
                    zIndex: 2,
                    pointerEvents: "none"
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;