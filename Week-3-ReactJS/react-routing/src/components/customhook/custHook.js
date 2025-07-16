import { useState } from "react"

export const useCustHook=()=>{
    const [count,setCount]=useState(0)

      function incCount(){
        setCount(c=>c+1)
    }

    return {
        count:count,
        incCount:incCount
    }
}