
import { useParams, useNavigate } from "react-router-dom";
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
  category?: string;
  feedback: FeedbackItem[];
}

const categories = ["Salads", "Soups", "Dishes", "Desserts", "Drinks"];

const RecipeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Recipe>({
    id: 0,
    title: "",
    image: "",
    description: "",
    ingredients: "",
    instructions: "",
    feedback: [],
    category: "",
  });

  const [newRecipe, setNewRecipe] = useState<Recipe>({
    id: 0,
    title: "",
    image: "",
    description: "",
    ingredients: "",
    instructions: "",
    feedback: [],
    category: "",
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5005/api/recipes/${id}`);
        setRecipe(response.data);
        setFormData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchRecipe();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNewRecipeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewRecipe((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async () => {
    if (recipe) {
      try {
        const response = await axios.put(
          `http://127.0.0.1:5005/api/recipes/${id}`,
          formData
        );
        setRecipe(response.data);
        setIsEditing(false);
      } catch (error) {
        console.error("Error updating recipe", error);
      }
    }
  };

  const handleDelete = async () => {
    if (recipe) {
      try {
        await axios.delete(`http://127.0.0.1:5005/api/recipes/${id}`);
        navigate("/recipes");
      } catch (error) {
        console.error("Error deleting recipe", error);
      }
    }
  };

  const handleCancel = () => {
    if (recipe) setFormData(recipe);
    setIsEditing(false);
  };

  const handleAddNewRecipe = async () => {
    if (!newRecipe.title || !newRecipe.description || !newRecipe.ingredients || !newRecipe.instructions || !newRecipe.category) {
      console.error("All fields are required.");
      return;
    }

    console.log("Sending new recipe data:", newRecipe);

    try {
      const response = await axios.post(
        `http://127.0.0.1:5005/api/recipes`,
        {
          title: newRecipe.title,
          image: newRecipe.image || "",
          description: newRecipe.description,
          ingredients: newRecipe.ingredients,
          instructions: newRecipe.instructions,
          feedback: [],
          category: newRecipe.category,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Recipe added successfully:", response.data);
      navigate(`/recipes/${response.data.id}`);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Error adding new recipe", error.response?.data || error.message);
      } else {
        console.error("Unexpected error", error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!recipe && id) return <div>Recipe not found</div>;

  return (
    <>
      <div className="recipe-detail">
        {isEditing ? (
          <>
            <h1>Edit Recipe</h1>
            <form>
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Image URL:</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image || ""}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Description:</label>
                <textarea
                  name="description"
                  value={formData.description || ""}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Ingredients:</label>
                <textarea
                  name="ingredients"
                  value={formData.ingredients || ""}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Instructions:</label>
                <textarea
                  name="instructions"
                  value={formData.instructions || ""}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Category:</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <button type="button" onClick={handleUpdate}>
                Save Changes
              </button>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </form>
          </>
        ) : (
          <>
            <h1>{recipe?.title}</h1>
            {recipe?.image && <img src={recipe.image} alt={recipe.title} className="detail-image" />}
            <p>{recipe?.description}</p>
            <h3>Ingredients</h3>
            <p>{recipe?.ingredients}</p>
            <h3>Instructions</h3>
            <p>{recipe?.instructions}</p>
            <p><strong>Category:</strong> {recipe?.category}</p>
            <div>
              <button onClick={() => setIsEditing(true)}>Edit Recipe</button>
              <button onClick={handleDelete}>Delete Recipe</button>
            </div>
          </>
        )}
      </div>

      <div className="add-new-recipe">
        <h2>Add a New Recipe</h2>
        <form>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newRecipe.title}
              onChange={handleNewRecipeChange}
              required
            />
          </div>
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              value={newRecipe.image}
              onChange={handleNewRecipeChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={newRecipe.description}
              onChange={handleNewRecipeChange}
            />
          </div>
          <div>
            <label>Ingredients:</label>
            <textarea
              name="ingredients"
              value={newRecipe.ingredients}
              onChange={handleNewRecipeChange}
            />
          </div>
          <div>
            <label>Instructions:</label>
            <textarea
              name="instructions"
              value={newRecipe.instructions}
              onChange={handleNewRecipeChange}
            />
          </div>
          <div>
            <label>Category:</label>
            <select
              name="category"
              value={newRecipe.category}
              onChange={handleNewRecipeChange}
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button type="button" onClick={handleAddNewRecipe}>
            Add Recipe
          </button>
        </form>
      </div>

      <Feedback recipeId={Number(id)} />
    </>
  );
};

export default RecipeDetailPage;