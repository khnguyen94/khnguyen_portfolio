import React, { Component } from "react";
import "./ProjectsDisp.css";
import { Jumbotron } from "react-bootstrap";
import { Row, Col } from "../../Components/Grid";
import { Button } from "react-bootstrap";
import ProjectImg1 from "../../Images/proj-airball.png";
import ProjectImg2 from "../../Images/proj-traveleaze.png";
import ProjectImg3 from "../../Images/proj-eatbook.png";
import ProjectImg4 from "../../Images/proj-googlebooks.png";
import ProjectImg5 from "../../Images/proj-nytscraper.png";
import ProjectImg6 from "../../Images/proj-friendfinder.png";
import ProjectImg7 from "../../Images/proj-bamazon.png";
import ProjectImg8 from "../../Images/proj-trainscheduler.png";
import ProjectImg9 from "../../Images/proj-liri.png";
import ProjectImg10 from "../../Images/proj-rps.png";
import ProjectImg11 from "../../Images/proj-gif.gif";
import ProjectImg12 from "../../Images/proj-mario.png";
import ProjectImg13 from "../../Images/proj-mvc.png";

function ProjectsDispRender() {
  return (
    <div className="project-grid">
      <Row className="project-row">
        <div className="project-item">
          <h5 className="project-title">Air Ball</h5>
          <div className="image-box">
            <img className="project-image" src={ProjectImg1} alt="#" />
          </div>
          <div className="project-details">
            <div className="project-details-content">
              <p className="project-summary">
                The premier game and stats notification web app for avid NBA
                fans!
              </p>
              <ul className="techs-list">
                <li className="techs-item">React</li>
                <li className="techs-item">Node</li>
                <li className="techs-item">MongoDB</li>
                <li className="techs-item">Express</li>
              </ul>
              <div className="project-links">
                <Button
                  href="https://heroku-dunkitapp.herokuapp.com/"
                  variant="secondary"
                  size="sm"
                >
                  Link
                </Button>
                <Button
                  href="https://github.com/khnguyen94/Project_3"
                  variant="secondary"
                  size="sm"
                >
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">TravelEAZE</h5>
          <div className="image-box">
            <img className="project-image" src={ProjectImg2} alt="#" />
          </div>
          <div className="project-details">
            <div className="project-details-content">
              <p className="project-summary">
                TravelEAZE is an easy to use, all-in-one web app that combines
                airline booking and translation services!
              </p>
              <ul className="techs-list">
                <li className="techs-item">React</li>
                <li className="techs-item">Node</li>
                <li className="techs-item">MongoDB</li>
                <li className="techs-item">Express</li>
              </ul>
              <div className="project-links">
                <Button
                  href="https://project2kkca.herokuapp.com/"
                  variant="secondary"
                  size="sm"
                >
                  Link
                </Button>
                <Button
                  href="https://github.com/khnguyen94/project_2"
                  variant="secondary"
                  size="sm"
                >
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">EatBook</h5>
          <div className="image-box">
            <img className="project-image" src={ProjectImg3} alt="#" />
          </div>
          <div className="project-details">
            <div className="project-details-content">
              <p className="project-summary">
                Are your friends bombarding you with restaurant suggestions? Use
                our platform to review all their recommendations and keep track
                of them for later visits!
              </p>
              <ul className="techs-list">
                <li className="techs-item">Node</li>
                <li className="techs-item">MongoDB</li>
                <li className="techs-item">Express</li>
              </ul>
              <div className="project-links">
                <Button
                  href="https://khnguyen94.github.io/Restaurant_Tracker/"
                  variant="secondary"
                  size="sm"
                >
                  Link
                </Button>
                <Button
                  href="https://github.com/khnguyen94/Restaurant_Tracker"
                  variant="secondary"
                  size="sm"
                >
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">Google Books Tracker</h5>
          <div className="image-box">
            <img className="project-image" src={ProjectImg4} alt="#" />
          </div>
          <div className="project-details">
            <div className="project-details-content">
              <p className="project-summary">
                Blurb is already part of Lightroom Classic! Never leave your
                everyday workflow with the book module.
              </p>
              <ul className="techs-list">
                <li className="techs-item">React</li>
                <li className="techs-item">Node</li>
                <li className="techs-item">MongoDB</li>
                <li className="techs-item">Express</li>
                <li className="techs-item">Angular</li>
              </ul>
              <div className="project-links">
                <Button href="#" variant="secondary" size="sm">
                  Link
                </Button>
                <Button href="#" variant="secondary" size="sm">
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">NYT Webscaper</h5>
          <div className="image-box">
            <img className="project-image" src={ProjectImg5} alt="#" />
          </div>
          <div className="project-details">
            <div className="project-details-content">
              <p className="project-summary">
                Blurb is already part of Lightroom Classic! Never leave your
                everyday workflow with the book module.
              </p>
              <ul className="techs-list">
                <li className="techs-item">express</li>
                <li className="techs-item">express-handlebars</li>
                <li className="techs-item">mongoose</li>
                <li className="techs-item">cheerio</li>
                <li className="techs-item">axios</li>
              </ul>
              <div className="project-links">
                <Button href="#" variant="secondary" size="sm">
                  Link
                </Button>
                <Button href="#" variant="secondary" size="sm">
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">Celebrity Friend Finder</h5>
          <div className="image-box">
            <img className="project-image" src={ProjectImg6} alt="#" />
          </div>
          <div className="project-details">
            <div className="project-details-content">
              <p className="project-summary">
                Here's your chance to brush shoulders with the rich and famous!
                Who knew you need a friend in Hollywood!
              </p>
              <ul className="techs-list">
                <li className="techs-item">express</li>
                <li className="techs-item">express-handlebars</li>
                <li className="techs-item">mongoose</li>
                <li className="techs-item">cheerio</li>
                <li className="techs-item">axios</li>
              </ul>
              <div className="project-links">
                <Button
                  href="https://gentle-wave-87887.herokuapp.com/"
                  variant="secondary"
                  size="sm"
                >
                  Link
                </Button>
                <Button
                  href="https://github.com/khnguyen94/Celebrity_Friend_Finder"
                  variant="secondary"
                  size="sm"
                >
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">Amazon Stocker</h5>
          <div className="image-box">
            <img className="project-image" src={ProjectImg7} alt="#" />
          </div>
          <div className="project-details">
            <div className="project-details-content">
              <p className="project-summary">
                Blurb is already part of Lightroom Classic! Never leave your
                everyday workflow with the book module.
              </p>
              <ul className="techs-list">
                <li className="techs-item">express</li>
                <li className="techs-item">express-handlebars</li>
                <li className="techs-item">mongoose</li>
                <li className="techs-item">cheerio</li>
                <li className="techs-item">axios</li>
              </ul>
              <div className="project-links">
                <Button href="#" variant="secondary" size="sm" disabled>
                  Link
                </Button>
                <Button
                  href="https://github.com/khnguyen94/bamazon"
                  variant="secondary"
                  size="sm"
                >
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">Train Scheduler</h5>
          <div className="image-box">
            <img className="project-image" src={ProjectImg8} alt="#" />
          </div>
          <div className="project-details">
            <div className="project-details-content">
              <p className="project-summary">
                Thinking of traveling by railway in the Looney Toons Universe?
                Coyote's got you covered!
              </p>
              <ul className="techs-list">
                <li className="techs-item">express</li>
                <li className="techs-item">express-handlebars</li>
                <li className="techs-item">mongoose</li>
                <li className="techs-item">cheerio</li>
                <li className="techs-item">axios</li>
              </ul>
              <div className="project-links">
                <Button
                  href="https://khnguyen94.github.io/Train_Scheduler/"
                  variant="secondary"
                  size="sm"
                >
                  Link
                </Button>
                <Button
                  href="https://github.com/khnguyen94/Train_Scheduler"
                  variant="secondary"
                  size="sm"
                >
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">SIRI for Music</h5>
          <div className="image-box">
            <img className="project-image" src={ProjectImg9} alt="#" />
          </div>
          <div className="project-details">
            <div className="project-details-content">
              <p className="project-summary">
                Blurb is already part of Lightroom Classic! Never leave your
                everyday workflow with the book module.
              </p>
              <ul className="techs-list">
                <li className="techs-item">express</li>
                <li className="techs-item">express-handlebars</li>
                <li className="techs-item">mongoose</li>
                <li className="techs-item">cheerio</li>
                <li className="techs-item">axios</li>
              </ul>
              <div className="project-links">
                <Button href="#" variant="secondary" size="sm" disabled>
                  Link
                </Button>
                <Button
                  href="https://github.com/khnguyen94/LIRI"
                  variant="secondary"
                  size="sm"
                >
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">RPS (Multiplayer)</h5>
          <div className="image-box">
            <img className="project-image" src={ProjectImg10} alt="#" />
          </div>
          <div className="project-details">
            <div className="project-details-content">
              <p className="project-summary">
                This is a multiplayer RPS game with integrated chat room and powered by Google's Firebase.
              </p>
              <ul className="techs-list">
              <li className="techs-item">HTML</li>
                <li className="techs-item">CSS</li>
                <li className="techs-item">JS</li>
                <li className="techs-item">jQuery</li>
                <li className="techs-item">Bootstrap</li>
                <li className="techs-item">Google Firebase</li>
              </ul>
              <div className="project-links">
                <Button href="#" variant="secondary" size="sm" disabled>
                  Link
                </Button>
                <Button href="#" variant="secondary" size="sm">
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">GIF Collector</h5>
          <div className="image-box">
            <img className="project-image" src={ProjectImg11} alt="#" />
          </div>
          <div className="project-details">
            <div className="project-details-content">
              <p className="project-summary">
                Use this site to find and bookmark all your favorite memes!
              </p>
              <ul className="techs-list">
                <li className="techs-item">HTML</li>
                <li className="techs-item">CSS</li>
                <li className="techs-item">JS</li>
                <li className="techs-item">jQuery</li>
                <li className="techs-item">Bootstrap</li>
                <li className="techs-item">GIPHY API</li>
              </ul>
              <div className="project-links">
                <Button
                  href="https://khnguyen94.github.io/GIF_Generator/"
                  variant="secondary"
                  size="sm"
                >
                  Link
                </Button>
                <Button
                  href="https://github.com/khnguyen94/GIF_Generator"
                  variant="secondary"
                  size="sm"
                >
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">Mario RPG</h5>
          <div className="image-box">
            <img className="project-image" src={ProjectImg12} alt="#" />
          </div>
          <div className="project-details">
            <div className="project-details-content">
              <p className="project-summary">
                Play as your favorite Super Smash Bros characters in this turn
                based RPG battle game!
              </p>
              <ul className="techs-list">
                <li className="techs-item">HTML</li>
                <li className="techs-item">CSS</li>
                <li className="techs-item">JS</li>
                <li className="techs-item">jQuery</li>
                <li className="techs-item">Bootstrap</li>
              </ul>
              <div className="project-links">
                <Button
                  href="https://khnguyen94.github.io/Mario-RPG-Game-2/"
                  variant="secondary"
                  size="sm"
                >
                  Link
                </Button>
                <Button
                  href="https://github.com/khnguyen94/Mario-RPG-Game-2"
                  variant="secondary"
                  size="sm"
                >
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">Marvel Vs. Capcom Word Guess </h5>
          <div className="image-box">
            <img className="project-image" src={ProjectImg13} alt="#" />
          </div>
          <div className="project-details">
            <div className="project-details-content">
              <p className="project-summary">
                Play this fun version of the classic Hangman game and test your
                knowledge of Marvel and Capcome characters!
              </p>
              <ul className="techs-list">
                <li className="techs-item">HTML</li>
                <li className="techs-item">CSS</li>
                <li className="techs-item">JS</li>
                <li className="techs-item">jQuery</li>
                <li className="techs-item">Bootstrap</li>
              </ul>
              <div className="project-links">
                <Button
                  href="https://khnguyen94.github.io/MvC-Hangman/"
                  variant="secondary"
                  size="sm"
                >
                  Link
                </Button>
                <Button
                  href="https://github.com/khnguyen94/MvC-Hangman"
                  variant="secondary"
                  size="sm"
                >
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h5 className="project-title">NBA Trivia</h5>
          <div className="image-box">
            <img className="project-image" src={ProjectImg13} alt="#" />
          </div>
          <div className="project-details">
            <div className="project-details-content">
              <p className="project-summary">
              This is a basic trivia game that challenges player's knowledge of basketball history. Some of these questions are tough for even the most avid NBA fans!
              </p>
              <ul className="techs-list">
                <li className="techs-item">HTML</li>
                <li className="techs-item">CSS</li>
                <li className="techs-item">JS</li>
                <li className="techs-item">jQuery</li>
                <li className="techs-item">Bootstrap</li>
                <li className="techs-item">Timers</li>
              </ul>
              <div className="project-links">
                <Button
                  href="https://khnguyen94.github.io/NBA-Trivia/"
                  variant="secondary"
                  size="sm"
                >
                  Link
                </Button>
                <Button
                  href="https://github.com/khnguyen94/NBA-Trivia"
                  variant="secondary"
                  size="sm"
                >
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>


      </Row>
    </div>
  );
}

export default ProjectsDispRender;
