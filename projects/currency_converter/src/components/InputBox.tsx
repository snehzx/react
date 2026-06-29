import React, { useId } from "react";

type InputBoxType = {
  label: string;
  amount: number;
  onAmountChange?: (value: number) => void;
  onCurrencyChange?: (value: string) => void;
  currencyOptions?: string[];
  selectCurrency?: string;
  amountDisable?: boolean;
  currencyDisable?: boolean;
  className?: string;
};

export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}: InputBoxType): React.JSX.Element {
  const amountInputId = useId();

  //  Math.random will generate new ids every render so it is not recomended
  //dont use this to generate keys in a list ..

  return (
    <div
      className={` bg-white
    border-4
    border-[#2D6A2D]
    rounded-2xl
    px-5
    py-4
    flex
    items-center
    justify-between

    shadow-[6px_6px_0px_0px_#4A8C3F]

    transition-all
    duration-200

    focus-within:-translate-x-1px
    focus-within:-translate-y-1px
    focus-within:shadow-[6px_6px_0px_0px_#2E7D32]
${className}`}
    >
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-green-700
              font-bold
              text-sm
              mb-2
              uppercase
              tracking-wide"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="flex-1 w-full
              outline-none
              text-xl
              font-medium
              text-gray-700
              placeholder:text-gray-500"
          placeholder="0"
          disabled={amountDisable}
          value={amount === 0 ? "" : amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
        {/* it means if A is falsy return A else return B*/}
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Types</p>
        <select
          className="
            border-3
            border-green-600
            rounded-xl
            px-3
            py-2
            outline-none
            cursor-pointer
            bg-transparent        
            text-lg
            font-semibold
            text-gray-700
            transition-all
            duration-200
            hover:bg-green-50
            focus:ring-2
            focus:ring-green-300
"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
