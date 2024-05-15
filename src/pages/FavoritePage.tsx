import { useEffect } from "react";
import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

const FavoritePage = () => {
  const { favorites, loadFromStorage } = useAppStore();
  useEffect(() => {
    loadFromStorage();
  }, []);
  return (
    <>
      {favorites.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 container">
          {favorites.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <>
          <p className="text-center mt-30 my-10 text-2xl">
            There are no results yet, use the form to search for recipes
          </p>
        </>
      )}
    </>
  );
};

export default FavoritePage;
