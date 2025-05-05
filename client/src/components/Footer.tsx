import Row from "react-bootstrap/Row";
import { AiOutlineFacebook } from "react-icons/ai";
import { TbBrandInstagram } from "react-icons/tb";
import { AiOutlineTikTok } from "react-icons/ai";
import { TbBrandLinkedin } from "react-icons/tb";
import Col from "react-bootstrap/Col";
import divider from "../assets/divider-img.webp";
import { TbBrandYoutube } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Row>
          <Col sm={4}>
            <h4>Holy Broccoli</h4>
            <img src={divider} className="divider-img"></img>
            <p>My story</p>
            <p>The app</p>
            <p>Archives</p>
          </Col>
          <Col sm={4}>
            <h4>Popular</h4>
            <img src={divider} className="divider-img"></img>
            <p>Recipe search</p>
            <p>Recipe index</p>
            <p>My favorite recipes</p>
          </Col>
          <Col sm={4}>
            <h4>Follow us</h4>
            <img src={divider} className="divider-img"></img>
            <p>
              <AiOutlineFacebook />
              <TbBrandInstagram />
              <AiOutlineTikTok />
              <TbBrandLinkedin />
              <TbBrandYoutube />
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
