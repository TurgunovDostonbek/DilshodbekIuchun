import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Hobby from './Components/Hobby/Hobby';
function App() {
  let [barsOpen, setBarsOpen] = useState(false);
  return (
    <div>
      <Navbar barsOpen={barsOpen} setBarsOpen={setBarsOpen} />
      <Hero />
      <Skills />
      <About />
      <Hobby/>
    </div>
  );
}

export default App;
