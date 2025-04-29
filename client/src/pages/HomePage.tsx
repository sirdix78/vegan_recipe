import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import "./HomePage.css";

interface Feedback {
  reviewer_name: string;
  rating: number;
  comment?: string;
}

interface Recipe {
  id: number;
  title: string;
  image?: string;
  description?: string;
  ingredients?: string;
  instructions?: string;
  category: string;
  feedback: Feedback[];
}

const HomePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5005/api/recipes");
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
      <h2>{title}</h2>
      <Row className="recipe-row">
        {recipes
          .filter((recipe) => recipe.category === category)
          .map((recipe) => (
            <Col sm key={recipe.id}>
              <div className="recipe-card">
                <div className="recipe-title">{recipe.title}</div>
                {recipe.image && (
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="recipe-image"
                  />
                )}
              </div>
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
      {renderCategory("Drinks", "Drinks")}
    </>
  );
};

export default HomePage;