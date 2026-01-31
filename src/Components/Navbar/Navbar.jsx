import './Navbar.css'
import { useState } from 'react';
import Bars from '../Bars/Bars'
import { FaBars } from "react-icons/fa";


function Navbar() {
  let [barsOpen, setBarsOpen] = useState(false);

  return (
    <div className='navbar container'>
      <div className="navbar__logo">
        <h1 className='navbar__logo--title'>
          <a className='navbar__logo--link' href="">Dilshodbek</a>
        </h1>
      </div>

      <div className="navbar__links">
        
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Skills</a>
        <a href="">Language</a>
        <a href="">Contact</a>
      </div>
        <button onClick={() => {setBarsOpen(true)}} className='bars' href="">
          <FaBars />
        </button>
      {barsOpen && <Bars/>}
    </div>
  )
}

export default Navbar