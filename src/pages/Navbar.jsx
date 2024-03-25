// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   const navOptions = (
//     <>
//        <NavLink className="text-emerald-50 text-xl p-3 rounded-sm" to="/">Home</NavLink>
//        <NavLink className="text-emerald-50 text-xl p-3 rounded-sm" to="/about">About</NavLink>
//        <NavLink className="text-emerald-50 text-xl p-3 rounded-sm" to="/service">Service</NavLink>
//        <NavLink className="text-emerald-50 text-xl p-3 rounded-sm" to="/contact">Contact</NavLink>
      
//     </>
//   );
//   return (
//     <>
//       <div className="navbar bg-rose-300 opacity-15 max-w-screen-xl bg-opacity-30">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn mr-4 bg-red-200  lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 pl-4 bg-black bg-opacity-30 rounded w-42"
//             >
//               {navOptions}
//             </ul>
//           </div>
//           <h2 className="text-3xl md:pl-12 text-white font-semibold"><span className="text-orange-400">E</span> D <span className="text-rose-400">R</span></h2>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navOptions}</ul>
//         </div>
//         <div className="navbar-end">
//           <Link to='/blog'>
//           <button
//             type="button"
//             className="bg-orange-500 bg-opacity-75 px-6 py-3 rounded text-emerald-50 text-xl hover:bg-red-400 duration-200"
//           >
//             Blog
//           </button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import {  Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);
  return (
    <nav className="flex items-center justify-between  bg-[#393E46] px-4 py-2 text-white mb-24">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
        <Link to='/'>
        <h2 className="text-3xl md:pl-12 text-white font-semibold"><span className="text-orange-400">E</span> D <span className="text-rose-400">R</span></h2>
        </Link>
        </div>
        <ul className="hidden items-center justify-between gap-10 md:flex">
          <NavLink to='/'>
          <li className="group flex  cursor-pointer flex-col">
            Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          </NavLink>
          <NavLink to='service'>
          <li className="group flex  cursor-pointer flex-col">
            Services<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          </NavLink>
          
          <NavLink to='about'>
          <li className="group flex  cursor-pointer flex-col">
            About<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li></NavLink>
          <NavLink to='contact'>
          <li className="group flex  cursor-pointer flex-col">
            Contact<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          </NavLink>
        </ul>
        <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
          {dropDownState && (
            <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
             <NavLink to='/'>
             <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                Home
              </li>
             </NavLink>
              <NavLink to='service'>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                Services
              </li>
              </NavLink>
              <NavLink to='about'>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                About
              </li>
              </NavLink>
              <NavLink to='contact'>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                Contact
              </li>
              </NavLink>
            </ul>
          )}
        </div>
</nav>
  );
};

export default Navbar;



   
