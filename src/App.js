import "./App.css";
import { useState, useEffect } from "react";
function App() {
  // var sum=24;
  const [sum, setSum] = useState(24);
  useEffect(() => {
    // alert(`You clicked ${sum} times`);
  }, []);
  const sub = () => {
    var a = sum - 1;
    // sum++
    setSum(a);
    console.log(a);
    // console.log("hi");
  };
  const add = () => {
    var a = sum + 1;
    // sum++
    setSum(a);
    console.log(a);
  };

  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      <h1> total{sum} </h1>

      <button onClick={add}>Addition</button>
      <button onClick={sub}>Subtraction</button>
    </div>
  );
}

export default App;
