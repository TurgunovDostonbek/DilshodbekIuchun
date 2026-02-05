import "./Bars.css"
import { IoMdClose } from "react-icons/io";

function Bars({barsOpen, setBarsOpen}) {
  return (
    <div className='bars_modal'>
      <button onClick={() => {setBarsOpen(false)}} className="bars_modal--closebtn"><IoMdClose /></button>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#hobby">Hobby</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Bars