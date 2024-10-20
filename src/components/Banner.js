import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.jpeg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Hi! I'm Aryan Jangir`} <span className="wrap">Web Developer</span></h1>
                  <p>I specialize in full stack web development, utilizing both front-end and back-end technologies to create dynamic and interactive websites. With my skills in HTML, CSS, JavaScript, and various frameworks and libraries, I can bring your ideas to life and deliver high-quality web solutions.</p>
                  <a href="https://drive.google.com/file/d/1B_LPzLRIZfEpwApP70-p9jcjWOkLP1Wk/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <button>Resume <ArrowRightCircle size={25} /></button>
                  </a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""} >
                  <img style={{ borderRadius: "50%" }} src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
