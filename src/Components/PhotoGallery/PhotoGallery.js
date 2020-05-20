import React, { Component } from "react";
import "./PhotoGallery.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Carousel from "react-bootstrap/Carousel";
import img3 from "../../Images/GalleryImages/img3.jpg";
import img4 from "../../Images/GalleryImages/img4.jpg";
import img5 from "../../Images/GalleryImages/img5.jpg";
import img6 from "../../Images/GalleryImages/img6.jpg";
import img7 from "../../Images/GalleryImages/img7.jpg";

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="photo-gallery-disp">
        <Jumbotron>
            <h3 className="gallery-title-text">GALLERY</h3>

            <hr />
            <br />

          <Carousel fade={true}>
            <Carousel.Item>
              <img className="carousel-image" src={img3} alt="1" />
              <Carousel.Caption>
                <p className="image-location">Stanford University</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="carousel-image" src={img4} alt="2" />
              <Carousel.Caption>
                <p className="image-location">Monterrey, CA</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="carousel-image" src={img5} alt="3" />
              <Carousel.Caption>
                <p className="image-location">Monterrey Bay Aquarium</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="carousel-image" src={img6} alt="4" />
              <Carousel.Caption>
                <p className="image-location">Land's End</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="carousel-image" src={img7} alt="5" />
              <Carousel.Caption>
                <p className="image-location">Monterrey, CA</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Jumbotron>
      </div>
    );
  }
}

export default PhotoGallery;
