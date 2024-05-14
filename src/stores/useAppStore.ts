import { create } from "zustand";
import { RecipeSliceType, createRecipesSlice } from "./recipeSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipeSliceType>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
  }))
);
