import { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import divider from "../assets/divider-img.webp";
import bigDivider from "../assets/big-divider.webp";
import axios from "axios";
import "../index.css";
import { Link } from "react-router-dom";


interface Recipe {
  id: number;
  title: string;
  image?: string;
  description?: string;
  ingredients?: string;
  instructions?: string;
  category: string;
 
}

const HomePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5005/api/recipes");
        setRecipes(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipes", error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderCategory = (title: string, category: string) => (
    <div className="category-container">
      <img src={bigDivider} className="big-divider-img"></img>
      <h2>{title}</h2>
      <Row>
        {recipes
          .filter((recipe) => recipe.category === category)
          .map((recipe) => (
            <Col sm={3} key={recipe.id}>
              <Link to={`/details/${recipe.id}`} className="recipe-link">
                <Card className="recipe-card">
                  {recipe.image && (
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="recipe-image"
                    />
                  )}
                  <img src={divider} className="divider-img"></img>
                  <div className="recipe-title">{recipe.title}</div>
                </Card>
                </Link>
            </Col>
          ))}
      </Row>
    </div>
  );

  return (
    <>
      {renderCategory("Salads", "Salads")}
      {renderCategory("Soups", "Soups")}
      {renderCategory("Main Dishes", "Dishes")}
      {renderCategory("Desserts", "Desserts")}
      {renderCategory("Drinks", "Drinks")}
    </>
  );
};

export default HomePage;
