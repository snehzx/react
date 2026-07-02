import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState<number>(0);
  const [numAllowed, setNumAllowed] = useState<boolean>(false);
  const [charAllowed, setCharAllowed] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const passwordRef = useRef<HTMLInputElement | null>(null);

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGen = useCallback(() => {
    let pass: string = "";
    let str: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-+={}[]<>?/|";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGen();
  }, [length, numAllowed, charAllowed, passwordGen]);

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black p-4 ">
      <div className="w-[90%] max-w-[550px] border p-10 rounded-3xl shadow-[5px_5px_10px_rgba(255,182,193,0.9)] bg-zinc-950">
        <div className="text-center text-5xl mb-10 text-pink-200">
          Password Generator
        </div>
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="password"
            value={password}
            ref={passwordRef}
            readOnly
            className="flex-1 px-4 py-2 bg-rose-200 text-lg rounded-md outline-indigo-500"
          ></input>
          <button
            onClick={copyPassToClipboard}
            className="shrink-0 bg-indigo-600 py-2 px-4 rounded-md text-pink-200 text-xl hover:bg-indigo-800 cursor-pointer transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110"
          >
            copy
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setLength(Number(e.target.value));
              }}
            ></input>
            <label className="text-pink-200 text-lg">Length:{length}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            ></input>
            <label htmlFor="numInput" className="text-pink-200 text-lg">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            ></input>
            <label htmlFor="charInput" className="text-pink-200 text-lg">
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
