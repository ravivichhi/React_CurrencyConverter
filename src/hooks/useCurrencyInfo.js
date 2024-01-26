import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((resp) => resp.json(resp))
        .then((resp) => setData(resp[currency]))
    }, [currency])
    return data;
}

export default useCurrencyInfo;