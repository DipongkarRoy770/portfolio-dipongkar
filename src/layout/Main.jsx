import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

const Main = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar></Navbar>
      <div>
      {navigation.state === 'loading' ?<span className="bg-white loading loading-bars loading-lg"></span>:''}
     </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
