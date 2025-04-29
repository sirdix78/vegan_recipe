import { Recipe } from "./Recipe.model";
export interface Feedback {
  id: number;
  recipe_id: number;
  recipe: Recipe;
  reviewer_name: string;
  rating: number;
  comment?: string | null;
}
