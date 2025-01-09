import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-cyan-500 p-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-500 px-4" : "text-yellow-400 px-4"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-red-500 px-4" : "text-white-400 px-4"
          }
        >
          About
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
