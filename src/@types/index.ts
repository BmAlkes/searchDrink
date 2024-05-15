import { z } from "zod";
import {
  CategoriesApiResponseSchema,
  DrinkApiResponse,
  DrinksApiResponse,
  RecipeAPIResponseSchema,
  SearchFilterResponseSchema,
} from "../schemas/recipes-schema";

export type Categories = z.infer<typeof CategoriesApiResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterResponseSchema>;
export type Drinks = z.infer<typeof DrinksApiResponse>;
export type Drink = z.infer<typeof DrinkApiResponse>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;
