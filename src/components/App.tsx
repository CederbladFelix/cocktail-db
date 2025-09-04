import { Outlet } from "react-router";
import { Header } from "./Header";

export const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  );
};
