import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

const Header = () => {
  const [seachFilters, setSearchFilters] = useState({
    ingredient: "",
    category: "",
  });
  const { pathname } = useLocation();
  const { fetchCategories, categories, searchRecipes } = useAppStore();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchFilters({ ...seachFilters, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO:Validar
    if (Object.values(seachFilters).includes("")) {
      console.log("All fields are oblique");
      return;
    }
    //Search recipes
    searchRecipes(seachFilters);
  };

  return (
    <header
      className={
        isHome
          ? "bg-header bg-center bg-cover"
          : "bg-header2 bg-center bg-cover h-96"
      }
    >
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img src="/logo.svg" alt="logotype" className="w-32" />
            </Link>
          </div>
          <div>
            <nav className="flex gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 uppercase font-bold"
                    : " text-white uppercase font-medium"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/favorite"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 uppercase font-bold"
                    : " text-white uppercase font-medium"
                }
              >
                Favorites
              </NavLink>
            </nav>
          </div>
        </div>
        {isHome && (
          <form
            className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <label
                htmlFor="ingredients"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Ingredients
              </label>
              <input
                type="text"
                id="ingredient"
                name="ingredient"
                placeholder="Ingredients Names Ex: Vodka,Tequila and Coffee"
                className="p-3 w-full rounded-lg focus:outline-none"
                onChange={handleChange}
                value={seachFilters.ingredient}
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none"
                onChange={handleChange}
                value={seachFilters.category}
              >
                <option value="">--Selected --</option>
                {categories.drinks.map((drink) => (
                  <option value={drink.strCategory} key={drink.strCategory}>
                    {drink.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Search Recipt"
              className="cursor-pointer bg-orange-700 hover:bg-orange-800 text-white p-2 font-extrabold w-full rounded-lg uppercase"
            />
          </form>
        )}
      </div>
    </header>
  );
};

export default Header;
