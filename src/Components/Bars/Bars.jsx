import "./Bars.css"
import { IoMdClose } from "react-icons/io";

function Bars({barsOpen, setBarsOpen}) {
  return (
    <div className='bars_modal'>
      <button onClick={() => {setBarsOpen(false)}} className="bars_modal--closebtn"><IoMdClose /></button>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Languages</a>
        </li>
      </ul>
    </div>
  )
}

export default Bars