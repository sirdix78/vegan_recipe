import Row from "react-bootstrap/Row";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandInstagram } from "react-icons/tb";
import { IoLogoTiktok } from "react-icons/io5";
import { TbBrandLinkedin } from "react-icons/tb";
import Col from "react-bootstrap/Col";
import divider from "../assets/divider-img.webp";

const Footer = () => {
  return (
    <div className="footer">
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
            <RiFacebookCircleLine /> <TbBrandInstagram /> <IoLogoTiktok />
            <TbBrandLinkedin />
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
