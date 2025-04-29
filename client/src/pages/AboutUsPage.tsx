import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutMe from "../assets/about1-img.jpeg";
import aboutMe2 from "../assets/about2-img.jpg";
import divider from "../assets/divider-img.webp";
import "./AboutUsPage.css";

const AboutUsPage = () => {
  return (
    <div className="about-page">
      <Row>
        <Col sm={8}>
        
  
          <p>
          Welcome to our recipe space — a place born from our passion for wholesome, nourishing food and a deep respect for all living beings. 
    We created this website because we believe that eating well can go hand in hand with caring for the planet and the animals we share it with.
    Here you’ll find a growing collection of plant-based recipes made from simple, real ingredients that fuel both body and soul.
    Our mission is to inspire you to embrace delicious, mindful eating without compromise. Whether you're vegan, plant-curious, or simply 
    looking to add more vibrant, ethical meals to your table — you're in the right place!{" "}
          </p>
          <img src={aboutMe2} className="about2-img" alt="About me image" />
        </Col>
        <Col sm={4}>
          <h4>About Us</h4>
          <img src={aboutMe} className="about1-img" alt="About me image" />
          <img src={divider} className="divider-img"></img>
          <p>
          Behind every recipe on this site is our belief that good food should nourish, uplift, and respect all life. 
    We care about the ingredients we use, the impact we have on the world, and the animals who call it home.
    This is more than just a recipe collection — it’s our way of promoting compassion, health, and mindful living.
    Join us on this journey to discover how joyful and flavorful ethical eating can be.
          </p>
          {/* <img src={aboutBook} className="about1-img" alt="About me image" /> */}
        </Col>
      </Row>
    </div>
  );
};

export default AboutUsPage;
