import { create } from "zustand";
import { RecipeSliceType, createRecipesSlice } from "./recipeSlice";
import { FavoritesSliceType, createFavoriteSlice } from "./favoriteSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipeSliceType & FavoritesSliceType>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
  }))
);
