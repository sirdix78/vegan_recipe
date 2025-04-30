import React, { useEffect, useState } from "react";
import axios from "axios";

interface Feedback {
  id: number;
  reviewer_name: string;
  rating: number;
  comment?: string;
}

interface FeedbackProps {
  recipeId: number;
}

const Feedback: React.FC<FeedbackProps> = ({ recipeId }) => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [newComment, setNewComment] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState(5);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(
        `http://127.0.0.1:5005/api/feedback/recipe/${recipeId}`
        );
        setFeedback(response.data);
      } catch (error) {
        console.error("Error fetching feedback", error);
      }
    };

    fetchFeedback();
  }, [recipeId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://127.0.0.1:5005/api/feedback/recipe/${recipeId}`,
        {
          reviewer_name: reviewerName,
          rating,
          comment: newComment,
        }
      );

      setFeedback((prevFeedback) => [...prevFeedback, response.data]);  
      setNewComment("");
      setReviewerName("");
      setRating(5);
    } catch (error) {
      console.error("Error adding feedback", error);
    }
  };
  
    // Handle bulk update of all feedback
    const handleBulkUpdate = async () => {
      try {
        // Update feedback items on the backend
        await Promise.all(
          feedback.map((fb) =>
            axios.put(`http://127.0.0.1:5005/api/feedback/${fb.id}`, {
              rating: fb.rating,
              comment: fb.comment,
            })
          )
        );
  
       
        const refreshed = await axios.get(
        `http://127.0.0.1:5005/api/feedback/recipe/${recipeId}`
        );
        setFeedback(refreshed.data);
        setEditMode(false); // Exit edit mode after saving
      } catch (error) {
        console.error("Error updating feedback:", error);
      }
    };
  
    // Handle deleting a feedback
    const handleDelete = async (id: number) => {
      try {
        // Send a DELETE request to the server to remove the feedback
        await axios.delete(`http://127.0.0.1:5005/api/feedback/${id}`);
        
        // If deletion is successful, we also update the local state
        setFeedback(feedback.filter((fb) => fb.id !== id));
    
        const refreshed = await axios.get(
          `http://127.0.0.1:5005/api/recipes/${recipeId}/feedback`
        );
        setFeedback(refreshed.data); // Ensure feedback is up-to-date from the server
    
      } catch (error) {
        console.error("Error deleting feedback:", error);
      }
    };
    

  return (
    <div>
      <h4>Comments:</h4>
  
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? "Exit Edit Mode" : "Edit All Feedback"}
      </button>
  
      {feedback.map((fb, index) => (
        <div key={fb.id} style={{ marginBottom: "1rem" }}>
          <strong>{fb.reviewer_name}</strong>
  
          {editMode ? (
            <>
              <div>
                <label>Rating:</label>
                <input
                  type="number"
                  value={fb.rating}
                  min="1"
                  max="5"
                  onChange={(e) => {
                    const updated = [...feedback];
                    updated[index].rating = Number(e.target.value);
                    setFeedback(updated);
                  }}
                />
              </div>
              <div>
                <label>Comment:</label>
                <textarea
                  value={fb.comment}
                  onChange={(e) => {
                    const updated = [...feedback];
                    updated[index].comment = e.target.value;
                    setFeedback(updated);
                  }}
                />
              </div>
            </>
          ) : (
            <p>
              ({fb.rating}/5): {fb.comment}
            </p>
          )}
  
          <button onClick={() => handleDelete(fb.id)}>Delete</button>
        </div>
      ))}
  
      {editMode && (
        <button onClick={handleBulkUpdate} style={{ marginBottom: "1rem" }}>
          Save All Changes
        </button>
      )}
  
      <h4>Add New Comment:</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          placeholder="Your name"
          required
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave a comment"
          required
        />
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          min="1"
          max="5"
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
  
};

export default Feedback;
