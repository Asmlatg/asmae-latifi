/*
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function BlogCards(props) {
  return (
    <Card className="blog-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="blog-card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.blogLink} target="_blank">
          <BsGithub /> &nbsp;
          Blog
        </Button>
        {"\n"}
        {"\n"}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Read More"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

function Blogs() {
    const blogs = [
    {
      title: "My Journey into Web Development",
      description: "A personal reflection on my path to becoming a web developer, exploring the challenges, learnings, and moments that shaped my career.",
      imgPath: "path/to/blog-image-1.jpg", // Replace with actual image path
      blogLink: "https://github.com/yourprofile/blog-post-1",
      demoLink: "/blog/journey-into-web-development"
    },
    {
      title: "Mastering React Hooks",
      description: "An in-depth guide to understanding and implementing React Hooks, covering everything from useState to custom hooks with real-world examples.",
      imgPath: "path/to/blog-image-2.jpg", // Replace with actual image path
      blogLink: "https://github.com/yourprofile/blog-post-2",
      demoLink: "/blog/mastering-react-hooks"
    },
    {
      title: "Web Accessibility Best Practices",
      description: "Exploring essential techniques to make web applications more inclusive, with practical tips and real-world implementation strategies.",
      imgPath: "path/to/blog-image-3.jpg", // Replace with actual image path
      blogLink: "https://github.com/yourprofile/blog-post-3",
      demoLink: "/blog/web-accessibility"
    }
  ];

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Blogs</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my blog posts and writings
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {blogs.map((blog, index) => (
            <Col key={index} md={4} className="blog-card">
              <BlogCards
                imgPath={blog.imgPath}
                title={blog.title}
                description={blog.description}
                blogLink={blog.blogLink}
                demoLink={blog.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;*/

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function BlogsSoonCard() {
  return (
    <Card className="blog-card-view">
      <Card.Body className="text-center">
        <Card.Title>Blogs Coming Soon!</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Blogs</strong>
        </h1>
        <p style={{ color: "white" }}>
          Fresh content is on its way
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="blog-card">
            <BlogsSoonCard />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;