import { z } from "zod";
import {
  CategoriesApiResponseSchema,
  SearchFilterResponseSchema,
} from "../schemas/recipes-schema";

export type Categories = z.infer<typeof CategoriesApiResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterResponseSchema>;
