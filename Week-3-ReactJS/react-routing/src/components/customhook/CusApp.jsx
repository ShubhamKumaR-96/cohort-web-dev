import { useCustHook } from "./custHook"

const CusApp = () => {

  const {count,incCount}=useCustHook()
  return (
    <div>
      <button onClick={incCount}>Increment : {count}</button>
    </div>
  )
}

export default CusApp
