import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/*<Particle />*/}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Business Intelligence: Navigating the Computer Science Job Market"
              description = "I conducted a comprehensive study of job market trends in the computer science field using data scraped from LinkedIn job listings. I applied the ETL process to convert the raw data into a structured data lake. The data was then visualized using Power BI."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={true}
              title="Multi-Object Re-Identification Using AI"
              description="Developed an algorithm from scratch for detecting and re-identifying multiple objects across consecutive frames. This algorithm leverages appearance feature extraction of detected objects and applies advanced mathematical models to accurately re-identify them over time. The solution enhances object tracking and recognition capabilities in dynamic environments."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Evolving Neural Networks Using Genetic Algorithms"
              description="Genetic algorithms were applied to optimize CNN architectures and hyperparameters for CIFAR-10 image classification, improving model performance through automated architecture discovery and optimization. This showcases the use of evolutionary algorithms in enhancing neural network models."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Twitter-like App"
              description="Built a Twitter-like application using Flask, featuring user authentication, real-time posting, and dynamic feeds. Utilized RabbitMQ for handling message queues and Redis for session management and caching to ensure high performance and scalability."
              ghLink="https://github.com/DZburst/4A_ILC_Cloud_Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Big Data Clustering with k-Means"
              description="Implemented k-Means, k-Means++, and mini-batch k-Means on synthetic and real-world datasets. Used PCA for dimensionality reduction and visualization. Applied the elbow and silhouette methods to determine the optimal number of clusters."
              ghLink="https://github.com/Asmlatg/clustering"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Michael Scott AI - Transformer Fine-tuning"
              description="Fine-tuned a transformer model (GPT-2) on a dataset of Michael Scott's lines from The Office. Utilized tokenization and preprocessing to format the data for training. The model was fine-tuned using supervised learning for text generation, optimizing for context retention and dialogue style. Evaluated using perplexity and response coherence, ensuring alignment with Michael Scott’s speech patterns."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
