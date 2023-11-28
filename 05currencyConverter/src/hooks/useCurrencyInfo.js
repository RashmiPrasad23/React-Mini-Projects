// custom hook can use builtin hook
import { useEffect,useState } from "react"

// useEffect is a hook that gets invoked when any component mounts or its life cycle event gets triggered

function useCurrencyInfo(currency){
    const[data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // //conversion of response into json
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        // console.log(data)

    },[currency])
    // console.log(data)
    return data
}

export default useCurrencyInfo;