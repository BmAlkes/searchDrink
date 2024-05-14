import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

const indexPage = () => {
  const { drinks } = useAppStore();

  const hasDrikns = useMemo(() => drinks.drinks.length > 0, [drinks]);
  return (
    <>
      <h1 className="text-6xl font-semibold py-4">Recipes</h1>
      {hasDrikns ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 container">
          {drinks.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <>
          <p className="text-center my-10 text-2xl">
            There are no results yet, use the form to search for recipes
          </p>
        </>
      )}
    </>
  );
};

export default indexPage;
