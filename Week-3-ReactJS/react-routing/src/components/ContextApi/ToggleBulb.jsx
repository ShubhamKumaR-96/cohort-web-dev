import { useContext } from "react"
import { BulbContext } from "./createContext"

const ToggleBulb = () => {
    const {setBulbOn}=useContext(BulbContext)
    function toggle(){
        setBulbOn(curr=>!curr)
    }
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default ToggleBulb
