import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Feedback from "../components/Feedback";
import bigDivider from "../assets/big-divider.webp";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

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
  const [showAddForm, setShowAddForm] = useState(false); // ← добавил состояние для формы

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
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/recipes/${id}`
        );
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNewRecipeChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setNewRecipe((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async () => {
    if (recipe) {
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_API_URL}/api/recipes/${id}`,
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
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/recipes/${id}`);
        navigate("/");
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
    if (
      !newRecipe.title ||
      !newRecipe.description ||
      !newRecipe.ingredients ||
      !newRecipe.instructions ||
      !newRecipe.category
    ) {
      console.error("All fields are required.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/recipes`,
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
      navigate(`/details/${response.data.id}`);
      setShowAddForm(false); // ← скрыть форму после добавления
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error adding new recipe",
          error.response?.data || error.message
        );
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
            <form className="edit-recipe-form">
              {/* Поля редактирования */}
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title || ""}
                onChange={handleChange}
                required
              />
              <label>Image URL:</label>
              <input
                type="text"
                name="image"
                value={formData.image || ""}
                onChange={handleChange}
              />
              <label>Description:</label>
              <textarea
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
              />
              <label>Ingredients:</label>
              <textarea
                name="ingredients"
                value={formData.ingredients || ""}
                onChange={handleChange}
              />
              <label>Instructions:</label>
              <textarea
                name="instructions"
                value={formData.instructions || ""}
                onChange={handleChange}
              />
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
              <button type="button" className="save-btn" onClick={handleUpdate}>
                Save Changes
              </button>
              <button type="button" className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
            </form>
          </>
        ) : (
          <>
            <h1>{recipe?.title}</h1>
            {recipe?.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="detail-image"
              />
            )}
            <p>{recipe?.description}</p>
            <h3>Ingredients</h3>
            <p>{recipe?.ingredients}</p>
            <h3>Instructions</h3>
            <p style={{ whiteSpace: "pre-line", paddingLeft: "1em" }}>
              {recipe?.instructions}
            </p>
            <p>
              <strong>Category:</strong> {recipe?.category}
            </p>
            <div>
              <button onClick={() => setIsEditing(true)}>
                <FiEdit />
              </button>
              <button onClick={handleDelete}>
                <RiDeleteBin6Line />
              </button>
            </div>
          </>
        )}
      </div>

  
      <button onClick={() => setShowAddForm(!showAddForm)} className="add-btn">
  +
</button>

      {showAddForm && (
        <div className="add-new-recipe">
          <img src={bigDivider} className="big-divider-img" />
          <h2>Add a New Recipe</h2>
          <form className="detail-form">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newRecipe.title}
              onChange={handleNewRecipeChange}
              placeholder="Write a title"
              required
            />
            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              value={newRecipe.image}
              onChange={handleNewRecipeChange}
              placeholder="Insert image url"
            />
            <label>Description:</label>
            <textarea
              name="description"
              value={newRecipe.description}
              onChange={handleNewRecipeChange}
              placeholder="Write the description"
            />
            <label>Ingredients:</label>
            <textarea
              name="ingredients"
              value={newRecipe.ingredients}
              onChange={handleNewRecipeChange}
              placeholder="Write the ingredients"
            />
            <label>Instructions:</label>
            <textarea
              name="instructions"
              value={newRecipe.instructions}
              onChange={handleNewRecipeChange}
              placeholder="Write the instructions"
            />
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
            <button
              type="button"
              onClick={handleAddNewRecipe}
              className="recipe-btn"
            >
              Add Recipe
            </button>
          </form>
        </div>
      )}

      <Feedback recipeId={Number(id)} />
    </>
  );
};

export default RecipeDetailPage;
