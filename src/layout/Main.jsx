import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import Loader from "../components/Loader";

const Main = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar></Navbar>
      <div>
        {navigation.state === 'loading' ? <Loader></Loader> : ''}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
