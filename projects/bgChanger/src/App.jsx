import { useState } from "react";
import "./App.css";

const colours = [
  { name: "Fuchsia", bg: "bg-fuchsia-500", hover: "hover:bg-fuchsia-700" },
  { name: "Emerald", bg: "bg-emerald-600", hover: "hover:bg-emerald-800" },
  { name: "Teal", bg: "bg-teal-700", hover: "hover:bg-teal-900" },
  { name: "Rose", bg: "bg-rose-500", hover: "hover:bg-rose-700" },
  { name: "Slate", bg: "bg-slate-500", hover: "hover:bg-slate-700" },
  { name: "Amber", bg: "bg-amber-400", hover: "hover:bg-amber-700" },
  { name: "Mauve", bg: "bg-mauve-600", hover: "hover:bg-mauve-800" },
];
const buttonStyle =
  "outline-none px-4 py-1 rounded-full text-white shadow-md transition delay-100 duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-110 cursor-pointer transition-all duration-300";

function App() {
  const [color, setColor] = useState("bg-cyan-700");

  return (
    <>
      <div
        className={`w-full h-screen transition-colors duration-500 ${color}`}
      ></div>
      <div className="fixed flex flex-wrap justify-center top-12 right-3.5 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white/20 backdrop-blur-md border border-white/20 px-4 py-3 rounded-3xl">
          {colours.map((item) => (
            <button
              key={item.name}
              onClick={() => setColor(item.bg)}
              className={` ${buttonStyle} ${item.bg} ${item.hover}  `}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
