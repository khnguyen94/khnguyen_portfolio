import React, { Component } from "react";
import { Row, Col } from "../../Components/Grid";
import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery.js";

class Gallery extends Component {
  render() {
    return (
      <div className="photo-gallery">
        <Row>
          <PhotoGallery />
        </Row>
      </div>
    );
  }
}

export default Gallery;
