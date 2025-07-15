import { useContext } from "react"
import { BulbContext } from "./createContext"

const BulbState = () => {
   const {bulbOn}=useContext(BulbContext)
  return (
    <div>
      {bulbOn ? "Bulb on" : "bulb off"}
    </div>
  )
}

export default BulbState
