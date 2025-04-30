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

  return (
    <div>
      <h4>Comments:</h4>
      {feedback.map((fb) => (
        <div key={fb.id}>
          <strong>{fb.reviewer_name}</strong> ({fb.rating}/5): {fb.comment}
        </div>
      ))}

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
