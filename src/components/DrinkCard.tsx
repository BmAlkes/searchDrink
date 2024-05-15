import { Drink } from "../@types";
import { useAppStore } from "../stores/useAppStore";

type DrinkCardProps = {
  drink: Drink;
};

const DrinkCard = ({ drink }: DrinkCardProps) => {
  const { selectRecipes } = useAppStore();
  return (
    <div className="border shadow-lg">
      <div className="overflow-hidden">
        <img
          src={drink.strDrinkThumb}
          alt={`image of ${drink.strDrink}`}
          className="hover:scale-110 cursor-pointer transition-transform"
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
        <button
          type="button"
          className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-medium text-white text-lg rounded-md"
          onClick={() => selectRecipes(drink.idDrink)}
        >
          See Recipe
        </button>
      </div>
    </div>
  );
};

export default DrinkCard;
