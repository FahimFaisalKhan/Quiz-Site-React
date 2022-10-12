import { Outlet } from "react-router-dom";
import AppFooter from "../Components/AppFooter/AppFooter";
import Navigation from "../Components/Navigation/Navigation";

const Layout = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>

      <AppFooter></AppFooter>
    </div>
  );
};

export default Layout;
