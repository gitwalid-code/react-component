import "./App.css";
//import Jobs components
import Jobs from "./Components/Jobs";
import Data from "./data.json";
import { useState } from "react";

function App() {
  let [counter, setConter] = useState(0);
  const inc = () => {
    if (counter == Data.length - 1) {
      setConter(0);
      return;
    }
    setConter(counter + 1);
  };
  const dec = () => {
    if (counter == 0) {
      setConter(Data.length - 1);
      return;
    }
    setConter(counter - 1);
  };
  return (
    <div className="App">
      <Jobs data={Data[counter]} />
      {/* {Data.map((elem) => (
        <Jobs data={elem} />
      ))} */}

      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
}

export default App;
