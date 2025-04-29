import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import divider from "../assets/divider-img.webp";
const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col sm={4}>
          <h4>Holy Broccoli</h4>
          <img src={divider} className="divider-img"></img>
          <p>text</p>
          <p>text</p>
          <p>text</p>
        </Col>
        <Col sm={4}>
          <h4>Popular</h4>
          <img src={divider} className="divider-img"></img>
          <p>text</p>
          <p>text</p>
          <p>text</p>
        </Col>
        <Col sm={4}>
          <h4>Follow us</h4>
          <img src={divider} className="divider-img"></img>
          <p>icons</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
