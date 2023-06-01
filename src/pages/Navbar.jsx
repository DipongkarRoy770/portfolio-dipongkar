const Navbar = () => {
  const navOptions = (
    <>
      <li>bangla</li>
      <li>english</li>
    </>
  );
  return (
    <>
      <div className="navbar fixed bg-black max-w-screen-xl bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn mr-4 bg-white lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <h2 className="text-2xl md:pl-12 text-white font-semibold">E D R</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
        <button
              type="button"
              className="bg-gradient-to-r from-green-300 to-blue-700 hover:from-pink-100 hover:to-base-400
              px-6 py-3 rounded-sm text-emerald-50"
            >
              Blog
            </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
