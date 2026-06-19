import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google/com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

//this works because reacts never sees the jsx directly
// const AnotherElement = (
//   <a href="https://google.com" target="_blank">
//     visit google
//   </a>
// );

const anotherUser = "xyz";

// if vite or other tools were not present this is how reeact would have been written
const ReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotherUser,
);

createRoot(document.getElementById("root")).render(ReactElement);
