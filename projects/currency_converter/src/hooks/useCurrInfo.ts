import { useEffect, useState } from "react";
import axios from "axios";

type currencyInfo = {
  [key: string]: number;
};
type apiInfo = {
  [key: string]: currencyInfo;
};

export default function useCurrencyInfo(currency: string): currencyInfo {
  const [data, setData] = useState<currencyInfo>({});

  async function getData(): Promise<void> {
    const res = await axios.get<apiInfo>(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    );
    setData(res.data[currency]);
  }

  useEffect(() => {
    if (currency) {
      getData();
    }
  }, [currency]);
  return data;
}
