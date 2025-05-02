import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

interface Feedback {
  id: number;
  reviewer_name: string;
  rating: number;
  comment?: string;
}

interface FeedbackProps {
  recipeId: number;
}

const StarRating = ({
  rating,
  onChange,
}: {
  rating: number;
  onChange: (value: number) => void;
}) => (
  <div style={{ textAlign: "center", gap: "5px" }}>
    {[1, 2, 3, 4, 5].map((value) => (
      <FaStar
        key={value}
        size={20}
        style={{ cursor: "pointer" }}
        color={value <= rating ? "#ffc107" : "#e4e5e9"}
        onClick={() => onChange(value)}
      />
    ))}
  </div>
);
const Feedback: React.FC<FeedbackProps> = ({ recipeId }) => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [newComment, setNewComment] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState(5);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editComment, setEditComment] = useState("");
  const [editRating, setEditRating] = useState(5);

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

  const handleEdit = (fb: Feedback) => {
    setEditingId(fb.id);
    setEditComment(fb.comment || "");
    setEditRating(fb.rating);
  };

  const handleUpdate = async (id: number) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:5005/api/feedback/${id}`,
        {
          rating: editRating,
          comment: editComment,
        }
      );

      setFeedback((prevFeedback) =>
        prevFeedback.map((fb) =>
          fb.id === id ? { ...fb, ...response.data } : fb
        )
      );
      setEditingId(null);
    } catch (error) {
      console.error("Error updating feedback:", error);
    }
  };

  // Delete feedback
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://127.0.0.1:5005/api/feedback/${id}`);
      setFeedback(feedback.filter((fb) => fb.id !== id));
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };
  return (
    <div className="edit-detail">
      <hr />
      <h4>Comments:</h4>
      {feedback.map((fb) => (
        <div key={fb.id}>
          {editingId === fb.id ? (
            <div className="edit-comments">
              <label>Change your feedback</label>
              <textarea
                value={editComment}
                onChange={(e) => setEditComment(e.target.value)}
                className="comment-textarea"
              />
              <label>Change your rating</label>
              <StarRating rating={editRating} onChange={setEditRating} />
              <button onClick={() => handleUpdate(fb.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          ) : (
            <>
              <strong>{fb.reviewer_name}</strong> ({fb.rating}/5): {fb.comment}
              <button onClick={() => handleEdit(fb)}>
                <BiEdit />
              </button>
              <button onClick={() => handleDelete(fb.id)}>
                <RiDeleteBin6Line />
              </button>
            </>
          )}
        </div>
      ))}
      <form onSubmit={handleSubmit} className="edit-form">
        <hr />
        <h4>Add Feedback</h4>
        <label>Username</label>
        <input
          type="text"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          placeholder="Your name"
          required
        />
        <label>Write your comment</label>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave a comment"
          required
        />
        <label>Give your rating</label>
        <StarRating rating={rating} onChange={setRating} />
        <button type="submit" className="recipe-btn">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default Feedback;
