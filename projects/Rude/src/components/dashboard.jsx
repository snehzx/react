import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const phase1Words = ["He", "WaS", "LiKe", "yOu", "ArE"];
const dramaticWords = ["SoOoOoOo~~", " RuDe..."];
const phase2 = " and i was like boy does it look like i could care???".split(
  " ",
);
const phase3 = " i  couldn't  even  care  less!!".split(" ");

const dramaticLetterCount = dramaticWords.join("").length;

const WORD_STAGGER = 0.3; // s between each chaotic flying word (phase 1 only)
const WORD_DURATION = 3; // s each flying word takes to fly/fade (phase 1 only)
const LETTER_STAGGER = 0.09; // s between each dramatic letter popping in
const LETTER_DURATION = 0.4; // s for each letter's bounce-in
const DRAMATIC_HOLD = 100; // ms to hold "sooooo rude" before cutting to phase 2

const PHASE2_WORD_INTERVAL = 200; // ms each phase 2 word punches in, holds, then cuts
const PHASE2_PAUSE_AFTER_WORD = "boy"; // word after which we add an extra beat
const PHASE2_PAUSE_EXTRA_DELAY = 200; // extra ms pause after that word
const PHASE2_END_HOLD = 320; // ms to linger on the last phase 2 word before phase 3 begins

const PHASE3_WORD_INTERVAL = 250; // ms between each phase 3 word reveal
const PHASE3_LAST_WORD_DELAY = 430; // extra ms pause before the final word ("less") lands

const PUNCH_TRANSITION = {
  type: "spring",
  stiffness: 700,
  damping: 18,
  mass: 0.5,
};

export default function LyricsEdit2() {
  const [phase, setPhase] = useState(1); // 1 | 2 | 3
  const [phase2WordIndex, setPhase2WordIndex] = useState(0);
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    const dramaticStart = phase1Words.length * WORD_STAGGER * 1000;
    const lastLetterDelay =
      dramaticStart + dramaticLetterCount * LETTER_STAGGER * 1000;
    const dramaticEnd = lastLetterDelay + LETTER_DURATION * 1000;
    const totalTime = dramaticEnd + DRAMATIC_HOLD;

    const timer = setTimeout(() => setPhase(2), totalTime);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === 2) setPhase2WordIndex(0);
  }, [phase]);

  useEffect(() => {
    if (phase !== 2) return;

    if (phase2WordIndex < phase2.length - 1) {
      const isPauseWord = phase2[phase2WordIndex] === PHASE2_PAUSE_AFTER_WORD;
      const delay =
        PHASE2_WORD_INTERVAL + (isPauseWord ? PHASE2_PAUSE_EXTRA_DELAY : 0);
      const timer = setTimeout(() => setPhase2WordIndex((i) => i + 1), delay);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => setPhase(3), PHASE2_END_HOLD);
    return () => clearTimeout(timer);
  }, [phase, phase2WordIndex]);

  useEffect(() => {
    if (phase !== 3) return;
    if (focusIndex < phase3.length - 1) {
      const isAboutToRevealLastWord = focusIndex === phase3.length - 2;
      const delay =
        PHASE3_WORD_INTERVAL +
        (isAboutToRevealLastWord ? PHASE3_LAST_WORD_DELAY : 0);
      const timer = setTimeout(() => setFocusIndex((i) => i + 1), delay);
      return () => clearTimeout(timer);
    }
  }, [focusIndex, phase]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1461696114087-397271a7aedc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          {phase === 1 && (
            <motion.div
              key="phase1"
              className="absolute inset-0"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {phase1Words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{
                    scale: 0,
                    opacity: 0,
                    x: (Math.random() - 0.5) * 200,
                    y: (Math.random() - 0.5) * 200,
                  }}
                  animate={{
                    scale: [0, 1.5, 1],
                    opacity: [0, 1, 1, 0],
                    x: (Math.random() - 0.5) * 1000,
                    y: (Math.random() - 0.5) * 600,
                    rotate: (Math.random() - 0.5) * 180,
                  }}
                  transition={{
                    duration: WORD_DURATION,
                    delay: i * WORD_STAGGER,
                  }}
                  className="absolute left-1/2 top-1/2 text-4xl font-semibold text-rose-300"
                >
                  {word}
                </motion.span>
              ))}

              <div className="absolute inset-0 flex items-center justify-center gap-4 px-4">
                {dramaticWords.map((word, wordIndex) => {
                  const precedingLetters = dramaticWords
                    .slice(0, wordIndex)
                    .join("").length;
                  return (
                    <span key={word} className="flex">
                      {word.split("").map((letter, li) => (
                        <motion.span
                          key={li}
                          initial={{ opacity: 0, scale: 0, y: 40, rotate: -15 }}
                          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                          transition={{
                            delay:
                              phase1Words.length * WORD_STAGGER +
                              (precedingLetters + li) * LETTER_STAGGER,
                            duration: LETTER_DURATION,
                            type: "spring",
                            bounce: 0.55,
                          }}
                          className="text-6xl sm:text-7xl font-semibold text-rose-500"
                          style={{ textShadow: "0 0 5px rgba(200,68,68,0.6)" }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          )}

          {phase === 2 && (
            <motion.div
              key="phase2"
              className="absolute inset-0 flex items-center justify-center"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={phase2WordIndex}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: PUNCH_TRANSITION,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.85,
                    transition: { duration: 0.08, ease: "easeIn" },
                  }}
                  className="text-7xl font-semibold text-fuchsia-400 uppercase"
                >
                  {phase2[phase2WordIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          )}

          {phase === 3 && (
            <motion.div
              key="phase3"
              className="absolute inset-0 flex items-center justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {phase3.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{
                    opacity: i <= focusIndex ? 1 : 0,
                    y: i <= focusIndex ? 0 : 20,
                    scale: i === focusIndex ? 1.4 : i < focusIndex ? 1 : 0.5,
                    transition:
                      i === focusIndex ? PUNCH_TRANSITION : { duration: 0.2 },
                  }}
                  className="text-6xl font-normal text-pink-600 uppercase"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
