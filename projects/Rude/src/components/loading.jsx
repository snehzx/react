import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LyricsEdit({ onComplete }) {
  const words = "you know what he said to me???!!!! WHAT?!".split(" ");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length - 1) {
      const delay = words[index] === "me???!!!!" ? 500 : 200;

      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 500); // wait 1 sec after WHAT?!

      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1461696114087-397271a7aedc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="h-12 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{
              y: 15,
              opacity: 0,
              scale: words[index] === "WHAT?!" ? 0.4 : 0.9,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: words[index] === "WHAT?!" ? 2 : 1,
            }}
            exit={{
              y: -15,
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: words[index] === "WHAT?!" ? 0.25 : 0.12,
              ease: "easeOut",
            }}
            className={`
            font-semibold uppercase text-pink-400
    ${
      words[index] === "WHAT?!"
        ? "text-5xl tracking-wider text-pink-600"
        : "text-4xl tracking-[0.3em]"
    }
  `}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
