import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrInfo";
import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center "
        style={{
          backgroundColor: "#D6E8D3",
          backgroundImage:
            "radial-gradient(circle, #2D6A2D, 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      >
        <div
          className="w-full
          max-w-md
          mx-auto
          bg-[#EBF5E9]
          border-4
          border-[#1A3D1A]
          rounded-3xl
          shadow-[8px_8px_0px_#4fb142]
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[10px_10px_0px_#16a34a]
          "
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                  setConvertedAmount(0);
                }}
                selectCurrency={from}
                onAmountChange={(value) => {
                  setAmount(value);
                  setConvertedAmount(0);
                }}
              />
            </div>
            <div className="relative w-full h-0.5 my-4 ">
              <button
                type="button"
                onClick={swap}
                className="absolute
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  bg-white
                  border-3
                  border-[#4fb142]
                  rounded-xl
                  w-20
                  h-15
                  text-2xl
                  font-bold
                  text-green-700
                  shadow-[4px_4px_0px_#4fb142]
                  transition-all
                  duration-200
                  hover:translate-y-[-55%]
                  hover:shadow-[6px_6px_0px_#4fb142]
                  active:translate-y-[-45%]
                  active:shadow-none"
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                selectCurrency={to}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                  setConvertedAmount(0);
                }}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full
                mt-4
                font-nunito
                bg-[#4fb142]
                text-white
                font-extrabold
                text-2xl
                py-4
                rounded-xl
                border-3
                border-[#1A3D1A]
                shadow-[6px_6px_0px_0px_#1A3D1A]
                transition-all
                hover:bg-[#4a8a42]
                hover:-translate-y-1
                hover:shadow-[8px_8px_0px_0px_#1A3D1A]
                active:translate-y-1
                active:shadow-none"
            >
              Convert {from.toUpperCase()} → {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
