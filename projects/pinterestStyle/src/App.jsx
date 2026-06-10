import "./App.css";
import { PinterestGrid } from "./Card/pinterestGrid";

const items = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/67/a4/1f/67a41f7ab29cb99747a84a26b853ec9a.jpg",
    title: "",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/1200x/e9/7a/7f/e97a7f21f1fe63a2f15fd32c1f9aae56.jpg",
    title: "",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/1200x/5c/7a/63/5c7a63b0b4ccbbcf381cccf360874324.jpg",
    title: "",
  },
  {
    id: 4,
    src: "https://i.pinimg.com/1200x/5c/36/42/5c3642d9fbe87fc12d99dfea9fe91506.jpg",
    title: "Monstar Bags",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/1200x/32/60/e7/3260e79a0265a9c0408894d96db2358f.jpg",
    title: "Hair Cut",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/736x/b0/97/4f/b0974f3f450badd0e40715407f80faa0.jpg",
    title: "Christopher Tapp",
  },
  {
    id: 7,
    src: "https://i.pinimg.com/736x/77/4a/9a/774a9a11c89f87d4de5d9b01b2b5a3c3.jpg",
    title: "this is soooo cute and its in my fave color",
  },
  {
    id: 8,
    src: "https://i.pinimg.com/736x/f5/0c/ce/f50cced574bdbe5281aaf0c1b80fa77c.jpg",
    title: "So freakinggg good!✨",
  },
  {
    id: 9,
    src: "https://i.pinimg.com/736x/13/0c/77/130c777c5e72e3ac0ddc428dbea31297.jpg",
    title: "ᓚᘏᗢ",
  },
];
function App() {
  return (
    <>
      <div className="w-full">
        <PinterestGrid items={items} />
      </div>
    </>
  );
}
export default App;
