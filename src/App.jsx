import { useState } from "react";
import Accordian from "./Components/Accordian";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Accordian />
    </>
  );
}

export default App;
