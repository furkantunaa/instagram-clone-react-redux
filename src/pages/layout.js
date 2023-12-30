import Header from "components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <div className="w-full px-10 pt-4 overflow-hidden	">
        <Outlet />
      </div>
    </>
  );
}
