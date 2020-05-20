import React, { Component } from "react";
import "./Home.css";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import PortfolioPhoto from "../../Images/portfolio-photo.png";

const PortfolioPhoto = require('../../Images/portfolio-photo.png');

class Home extends Component {
  state = {
    currentCopy: "",
    phone: "(206)330-9194",
    phoneCopied: false,
    email: "kh.nguyen0101@gmail.com",
    emailCopied: false
  };

  onClick = ({ target: { innerHTML } }) => {
    console.log(`Clicked on "${innerHTML}"!`); // eslint-disable-line
  };

  onCopyPhone = () => {
    this.setState({
      currentCopy: "(206)330-9194",
      phoneCopied: true,
      emailCopied: false
    });
  };

  onCopyEmail = () => {
    this.setState({
      currentCopy: "kh.nguyen0101@gmail.com",
      emailCopied: true,
      phoneCopied: false
    });
  };

  render() {
    return (
      <div className="home">
        <div className="caption">
          <div className="row caption-row">
            <div className="col-md-3 col-sm-12">
              <img className="portfolio-photo" src={PortfolioPhoto} alt="#" />
            </div>

            <div className="col-md-6 col-sm-12">
              <h1>Khoa Nguyen</h1>

              <h3>Full-Stack Web Developer // Consultant</h3>

              <div className="contact-list">
                <ul>
                  <li>
                    <div className="item-icon">
                      <IoIosPhonePortrait />
                    </div>
                    <div className="tool-tip-text">
                      <CopyToClipboard
                        onCopy={this.onCopyPhone}
                        text={this.state.phone}
                      >
                        <span>(206)330-9194</span>
                      </CopyToClipboard>

                      {console.log("Current copy: " + this.state.currentCopy)}
                      {console.log(
                        "Is email copied: " + this.state.emailCopied
                      )}
                      {console.log(
                        "Is phone copied: " + this.state.phoneCopied
                      )}

                      {this.state.phoneCopied ? (
                        <div className="phone-copied-snackBar">
                          <span>Copied.</span>
                        </div>
                      ) : null}
                    </div>
                  </li>

                  <li>
                    <div className="item-icon">
                      <IoIosMail />
                    </div>
                    <div className="tool-tip-text">
                      <CopyToClipboard
                        onCopy={this.onCopyEmail}
                        text={this.state.email}
                      >
                        <span>kh.nguyen0101@gmail.com</span>
                      </CopyToClipboard>

                      {this.state.emailCopied ? (
                        <div className="email-copied-snackBar">
                          <span>Copied.</span>
                        </div>
                      ) : null}
                    </div>
                  </li>

                  <li>
                    <div className="item-icon">
                      <FaGithub />
                    </div>
                    <a
                      className="tool-tip-text"
                      href="https://github.com/khnguyen94"
                    >
                      <span>khnguyen94</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
