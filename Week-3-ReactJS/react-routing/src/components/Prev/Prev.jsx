import { useState } from "react";
import { usePrev } from "./use-Prev";

const Prev = () => {
  const [state, setState] = useState(0);

  const prev = usePrev(state);

  return (
    <div style={{textAlign:"center", justifyContent:"center",marginTop:"10vh"}}>
      <button onClick={() => setState((cur) => cur + 1)}>
       <h2> {state}</h2>
      </button>
      <h3>Prev value: {prev}</h3>
    </div>
  );
};

export default Prev;
