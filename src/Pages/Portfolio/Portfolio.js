import React, { Component } from "react";
import { Row, Col } from "../../Components/Grid";
import ProjectsDisp from "../../Components/ProjectsDisp/ProjectsDisp.js";

class Portfolio extends Component {
  render() {
    return(
      <div className="portfolio">
        <Row>
          <ProjectsDisp />
        </Row>
      </div>
    );
  }
};

export default Portfolio;