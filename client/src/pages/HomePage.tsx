import { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import divider from "../assets/divider-img.webp";
import bigDivider from "../assets/big-divider.webp";
import { Link, useLocation } from "react-router-dom";
import BackToTopButton from "../components/BackToTop";
import axios from "axios";
import "../index.css";

interface Recipe {
  id: number;
  title: string;
  image?: string;
  description?: string;
  ingredients?: string;
  instructions?: string;
  category: string;
}

interface HomePageProps {
  searchTerm: string;
}

const HomePage: React.FC<HomePageProps> = ({ searchTerm }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/recipes`
        );
        setRecipes(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipes", error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    if (!loading && location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [loading, location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderCategory = (title: string, category: string) => (
    <div className="category-container" id={category}>
      <img src={bigDivider} className="big-divider-img" />
      <h2>{title}</h2>
      <div className="container">
        <Row>
          {recipes
            .filter(
              (recipe) =>
                recipe.category === category &&
                recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((recipe) => (
              <Col xs={12} sm={6} md={3} key={recipe.id}>
                <Link to={`/details/${recipe.id}`} className="recipe-link">
                  <Card className="recipe-card">
                    {recipe.image && (
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="recipe-image"
                      />
                    )}
                    <img src={divider} className="divider-img" />
                    <p className="recipe-title">{recipe.title}</p>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );

  return (
    <>
      {renderCategory("Salads", "Salads")}
      {renderCategory("Soups", "Soups")}
      {renderCategory("Main Dishes", "Dishes")}
      {renderCategory("Desserts", "Desserts")}
      {renderCategory("Drinks", "Drinks")}
      <BackToTopButton />
    </>
  );
};

export default HomePage;
