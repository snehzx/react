import "./App.css";
import { useState } from "react";
import LyricsEdit from "./components/loading";
import LyricsEdit2 from "./components/dashboard";

function App() {
  const [showFlyingWords, setShowFlyingWords] = useState(false);
  return (
    <>
      {!showFlyingWords ? (
        <LyricsEdit onComplete={() => setShowFlyingWords(true)} />
      ) : (
        <LyricsEdit2 />
      )}
    </>
  );
}

export default App;
