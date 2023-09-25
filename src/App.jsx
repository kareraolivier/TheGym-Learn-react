import { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import "./scss/App.scss";
import Hero from "./page/Hero";
import MemePage from "./page/MemePage";
import HousePage from "./page/HousePage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      {/* <Hero /> */}
      <HousePage />
      <MemePage />
    </>
  );
}

export default App;
