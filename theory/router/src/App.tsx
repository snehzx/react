import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import DashBoardLayout from "./layouts/DashBoardlayout";
import DashboardHome from "./pages/dashboard/DashBoardHome";
import Settings from "./pages/dashboard/Settings";
import User from "./pages/User";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/dashboard" element={<DashBoardLayout />}>
            <Route path="dashBoardHome" element={<DashboardHome />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
