import './Navbar.css'
import { FaBars } from "react-icons/fa";


function Navbar() {
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
        <a className='bars' href="">
          <FaBars />
        </a>
    </div>
  )
}

export default Navbar