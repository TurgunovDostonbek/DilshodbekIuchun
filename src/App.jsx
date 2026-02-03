import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
function App() {
  let [barsOpen, setBarsOpen] = useState(false);
  return (
    <div>
      <Navbar barsOpen={barsOpen} setBarsOpen={setBarsOpen} />
      <Hero />
      <Skills />
      <About />
    </div>
  );
}

export default App;
