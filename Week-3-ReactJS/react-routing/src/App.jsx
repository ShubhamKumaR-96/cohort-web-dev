import "./App.css";
import { BulbProvider } from "./components/ContextApi/createContext";
import LightBulb from "./components/ContextApi/LightBulb";

const App = () => {
  return (
    <BulbProvider>
      <div style={{ textAlign: "center", fontSize: "20px " }}>
        <LightBulb />
      </div>
    </BulbProvider>
  );
};

export default App;
