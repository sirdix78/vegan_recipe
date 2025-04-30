import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Feedback from "../components/Feedback";

interface FeedbackItem {
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
  feedback: FeedbackItem[];
}

const RecipeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  // const [feedback, setFeedback] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5005/api/recipes/${id}`);
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe", error);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <>
    <div className = "recipe-detail">
      <h1>{recipe.title}</h1>
      {recipe.image && <img src={recipe.image} alt={recipe.title} className="detail-image" />}
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
    <Feedback recipeId={Number(id)} />
    {/* <div className = "recipe-feedback">
      
      <p>{feedback.reviewer_name}</p>
      <p>{feedback.rating}</p>
      <p>{feedback.comment}</p>
    </div> */}
    </>
  );
};

export default RecipeDetailPage;