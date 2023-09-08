import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
       <NavLink className="text-emerald-50 text-xl p-3 rounded-sm" to="/">Home</NavLink>
       <NavLink className="text-emerald-50 text-xl p-3 rounded-sm" to="/about">About</NavLink>
       <NavLink className="text-emerald-50 text-xl p-3 rounded-sm" to="/service">Service</NavLink>
       <NavLink className="text-emerald-50 text-xl p-3 rounded-sm" to="/contact">Contact</NavLink>
      
    </>
  );
  return (
    <>
      <div className="navbar bg-rose-300 opacity-15 max-w-screen-xl bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn mr-4 bg-red-200  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 pl-4 bg-black bg-opacity-30 rounded w-42"
            >
              {navOptions}
            </ul>
          </div>
          <h2 className="text-3xl md:pl-12 text-white font-semibold"><span className="text-orange-400">E</span> D <span className="text-rose-400">R</span></h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <Link to='/blog'>
          <button
            type="button"
            className="bg-orange-500 bg-opacity-75 px-6 py-3 rounded text-emerald-50 text-xl hover:bg-red-400 duration-200"
          >
            Blog
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
