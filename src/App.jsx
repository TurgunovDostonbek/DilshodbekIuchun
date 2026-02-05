import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Hobby from './Components/Hobby/Hobby';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  let [barsOpen, setBarsOpen] = useState(false);
  return (
    <div>
      <Navbar barsOpen={barsOpen} setBarsOpen={setBarsOpen} />
      <Hero />
      <About /> 
      <Skills />
      <Hobby/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
