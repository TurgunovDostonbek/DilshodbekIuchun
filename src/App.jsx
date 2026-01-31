import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";
import Skills from './Components/Skills/Skills';
function App() {
  let [barsOpen, setBarsOpen] = useState(false);
  return (
    <div>
      <Navbar barsOpen={barsOpen} setBarsOpen={setBarsOpen} />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
