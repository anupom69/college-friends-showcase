import { Link, NavLink } from "react-router-dom";
import Search from "./components/Search";
export function Navigation() {
  return (
    <>
      <div className="bg-background-700 text-text-500 p-4 fixed top-0 w-full z-10">
        <div className="flex items-center justify-between md:max-w-[80%] lg:max-w-[83%] mx-auto flex-col md:flex-row">
          <Link to="/" className="text-lg font-bold text-primary-500">
            Home
          </Link>

          <div className="flex space-x-4">
            <NavLink to="/science" className="nav-link">
              Science
            </NavLink>
            <NavLink to="/humanities" className="nav-link">
              Humanities
            </NavLink>
            <NavLink to="/business" className="nav-link">
              Business
            </NavLink>
          </div>
        <Search/>
        </div>
      </div>
    </>
  );
}
