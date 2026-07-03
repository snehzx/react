// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App";
// import Layout from "./layout";
// import Home from "./components/home/home";
// import About from "./components/about/about";
// import Footer from "./components/footer/footer";
// import User from "./components/user/user";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "footer",
//         element: <Footer />,
//       },
//     ],
//   },
// ]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="footer" element={<Footer />} />
//       <Route path="user/:id" element={<User />} />
//     </Route>,
//   ),
// );

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
