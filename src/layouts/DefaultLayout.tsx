import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="mx-auto mt-10 px-10 max-w-[1120px]">
        <Outlet />
      </div>
    </>
  );
}
