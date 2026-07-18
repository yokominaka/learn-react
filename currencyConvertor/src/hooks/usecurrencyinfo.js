import { useEffect, useState } from "react";
//standardized approach to use "use" before custom hook name
//custom hooks
function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    },[currency])
    return data
}
export default useCurrencyInfo;