import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";
function App() {
  let [barsOpen, setBarsOpen] = useState(false);
  return (
    <div>
      <Navbar barsOpen={barsOpen} setBarsOpen={setBarsOpen} />
      <Hero />
    </div>
  );
}

export default App;
