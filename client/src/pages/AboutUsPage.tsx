import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutMe from "../assets/about1-img.jpg";
import aboutBook from "../assets/about2-img.jpg";
import divider from "../assets/divider-img.webp";

const AboutUsPage = () => {
  return (
    <div className="about-page">
      <Row>
        <Col sm={8}>
          <img src={aboutMe} className="about1-img" alt="About me image" />
          <p>
            Hi, I’m Angela. Welcome to Oh She Glows – an award-winning recipe
            blog featuring over 500 healthy recipes (and growing)! For the past
            6 years, I’ve shared energizing, plant-based recipes that my family
            and I enjoy on a daily basis. My goal is to inspire you to embrace
            more plant-based foods in your diet without feeling the least bit
            deprived. And yes, my recipes are great for meat-eaters and picky
            kids too! Most of my recipes are gluten-free and many are
            allergy-friendly (just check the recipe for the allergy info). My
            first cookbook, The Oh She Glows Cookbook (released March 4, 2014)
            is a New York Times Bestseller. It was also selected as
            Chapters/Indigo’s BOOK OF THE YEAR for 2014. It features over 100
            plant-based recipes (including 85 gluten-free recipes) using real,
            whole food ingredients. The book also contains over 100 full-page,
            full-colour photographs shot by yours truly!{" "}
          </p>
        </Col>
        <Col sm={4}>
          <h4>About Angela</h4>
          <img src={divider} className="divider-img"></img>
          <p>
            About Angela I’m Angela, the founder of Oh She Glows. Since 2008,
            I’ve been on a journey to glow from the inside out by creating
            crowd-pleasing plant-based recipes. I’m a New York Times Bestselling
            cookbook author and award-winning app creator. Click below for my
            full story!
          </p>
          <img src={aboutBook} className="about1-img" alt="About me image" />
        </Col>
      </Row>
    </div>
  );
};

export default AboutUsPage;
