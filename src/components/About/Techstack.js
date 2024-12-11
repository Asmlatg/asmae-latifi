import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiSqllite, DiPython, DiJavascript1, DiDotnet, DiAngularSimple, DiDjango, DiNodejs, DiMongodb, DiGit, DiJava } from "react-icons/di";
import { SiRedis, SiPostgresql, SiTensorflow, SiPandas, SiNumpy, SiKeras, SiApachespark, SiDocker, SiKubernetes, SiR, SiScikitlearn, SiHadoop } from "react-icons/si";

function Techstack() {
  // A reusable function to render tooltips
  const renderTooltip = (name) => <Tooltip>{name}</Tooltip>;

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core programming languages */}
      <OverlayTrigger placement="top" overlay={renderTooltip("Python")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={renderTooltip("JavaScript")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={renderTooltip("Java")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={renderTooltip(".NET")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiDotnet />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" overlay={renderTooltip("Angular")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiAngularSimple />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={renderTooltip("Django")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiDjango />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={renderTooltip("Node.js")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
      </OverlayTrigger>

      {/* Database technologies */}
      <OverlayTrigger placement="top" overlay={renderTooltip("MongoDB")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={renderTooltip("SQLite")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiSqllite />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={renderTooltip("PostgreSQL")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={renderTooltip("Redis")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedis />
        </Col>
      </OverlayTrigger>

      {/* Data science and AI libraries */}
      <OverlayTrigger placement="top" overlay={renderTooltip("NumPy")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiNumpy />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={renderTooltip("Pandas")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPandas />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={renderTooltip("Scikit-Learn")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiScikitlearn />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={renderTooltip("R Programming")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiR />
        </Col>
      </OverlayTrigger>

      {/* Big data and containerization */}
      <OverlayTrigger placement="top" overlay={renderTooltip("Apache Spark")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiApachespark />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={renderTooltip("Docker")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker />
        </Col>
      </OverlayTrigger>

      {/* Version control */}
      <OverlayTrigger placement="top" overlay={renderTooltip("Git")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Techstack;
