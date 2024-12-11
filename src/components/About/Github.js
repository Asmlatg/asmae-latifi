import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const transformData = (data) => {
    const startMonth = 10; 
    const startYear = 2022;

    return data.filter((day) => {
      const date = new Date(day.date);
      return (
        date.getFullYear() > startYear || 
        (date.getFullYear() === startYear && date.getMonth() >= startMonth)
      );
    });
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Asmlatg"
        year={2024}
        transformData={transformData}
        blockSize={15}
        blockMargin={5}
        color="#98c1ff"
        fontSize={16}
      />
    </Row>
  );
}


export default Github;
