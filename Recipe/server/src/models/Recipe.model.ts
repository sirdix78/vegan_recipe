import { Feedback } from "./Feedback.model";

export interface Recipe {
  id: number;
  title: string;
  image?: string | null;
  description?: string | null;
  ingredients?: string | null;
  instructions?: string | null;
  feedback: Feedback[];
}
