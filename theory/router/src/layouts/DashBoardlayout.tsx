import { NavLink, Outlet } from "react-router";

export default function DashBoardLayout() {
  return (
    <>
      <div className="flex justify-start gap-6">
        <NavLink to="dashBoardHome">DashBoardHome</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </div>
      <Outlet />
    </>
  );
}
