import { Outlet } from "react-router";

export const App = () => {
  return (
    <div className="app-container">
      <Outlet />
    </div>
  );
};
