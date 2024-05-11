import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-800">
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
      </div>
    </header>
  );
};

export default Header;
