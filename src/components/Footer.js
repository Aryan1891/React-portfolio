import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon4.svg';
import navIcon3 from '../assets/img/nav-icon5.svg';

export const Footer = () => {
  return (
    <footer className="footer" style={{ paddingTop: "20px" }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h2 className=" text-white">AJ</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/aryan-jangir1891"><img src={navIcon1} alt="" /></a>
                <a href="https://www.github.com/Aryan1891"><img src={navIcon2} alt="" /></a>
                <a href="https://x.com/aryan_1891"><img src={navIcon3} alt="" /></a>
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
