import TheNavBar from "../components/TheNavBar";
import { Outlet } from "react-router-dom";
import PreventPullToRefresh from "../components/ThePreventPullToRefresh";

const TheGuestLayout = () => {
  return (
    <div className="font-Sen">
      <PreventPullToRefresh>
        <TheNavBar />
        <Outlet />
      </PreventPullToRefresh>
    </div>
  );
};

export default TheGuestLayout;
