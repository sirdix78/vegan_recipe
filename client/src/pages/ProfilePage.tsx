import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Ensure correct import
import { Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom"; // Import useParams
import divider from "../assets/divider-img.webp";
import BackToTopButton from "../components/BackToTop";
import "../index.css";

interface Recipe {
  id: number;
  title: string;
  image?: string;
  category: string;
}

const ProfilePage = () => {
  const { userId } = useParams<{ userId: string }>(); // Get the userId from the URL
  const authContext = useContext(AuthContext); // Fetching AuthContext
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Check if the context is null before using the user data
  if (!authContext) {
    return <div>Loading...</div>; // Or redirect to login page
  }

  const { user, logout } = authContext; // Extract user from context

  // Check if `userId` is passed through URL or from the AuthContext.
  const actualUserId = userId || user?.id;

  // Fetch the user’s recipes based on the userId from the URL or context
  useEffect(() => {
    if (actualUserId) {
      const fetchUserRecipes = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/recipes/user/${actualUserId}`
          );
          setUserRecipes(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching user recipes", error);
          setLoading(false);
        }
      };

      fetchUserRecipes();
    }
  }, [actualUserId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h2>{user?.username}'s Profile</h2>
      <p>Email: {user?.email}</p>

      <div className="user-recipes">
        <h3>Your Recipes</h3>
        {userRecipes.length === 0 ? (
          <p>You haven't added any recipes yet.</p>
        ) : (
          <Row>
            {userRecipes.map((recipe) => (
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
        )}
      </div>

      {/* Logout Button */}
      <button onClick={logout} className="logout-button">
        Logout
      </button>

      <BackToTopButton />
    </div>
  );
};

export default ProfilePage;
