import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiAnaconda,
  SiDocker,
  SiKubernetes,
  SiTableau,
  SiPowerbi,
  SiAmazonaws,
  SiGooglecloud,
  SiDatabricks,
  SiAzuredevops,
  SiLinux,
} from "react-icons/si";

function Toolstack() {
  // A reusable function to render tooltips
  const renderTooltip = (name) => <Tooltip>{name}</Tooltip>;

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* IDEs and Development Tools */}
      <OverlayTrigger placement="top" overlay={renderTooltip("Visual Studio Code")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
      </OverlayTrigger>

      {/* Cloud and Big Data Platforms */}
      <OverlayTrigger placement="top" overlay={renderTooltip("Amazon Web Services (AWS)")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonaws />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={renderTooltip("Azure DevOps")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiAzuredevops />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={renderTooltip("Databricks")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiDatabricks />
        </Col>
      </OverlayTrigger>

      {/* Data Visualization Tools */}
      <OverlayTrigger placement="top" overlay={renderTooltip("Power BI")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPowerbi />
        </Col>
      </OverlayTrigger>

      {/* Operating Systems and Containers */}
      <OverlayTrigger placement="top" overlay={renderTooltip("Linux")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiLinux />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={renderTooltip("Docker")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Toolstack;
