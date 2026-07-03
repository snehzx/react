import { NavLink, Outlet } from "react-router";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-center gap-6">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/user/:id">User</NavLink>
      </div>
      <Outlet />
    </>
  );
}
