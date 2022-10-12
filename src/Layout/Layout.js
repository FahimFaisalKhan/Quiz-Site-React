import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";

const Layout = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
