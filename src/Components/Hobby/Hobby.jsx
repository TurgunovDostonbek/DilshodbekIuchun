import "./Hobby.css"
import hobbyimg from "../../assets/images/1765336962_uUNkm6w3if.webp"
import hobbyimg1 from "../../assets/images/1-21-mcpe.webp"

function Hobby() {
  return (
    <div className='Hobby_Asosiysi container'>
      <div className="Hobby1">
        <h1>Hobby</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.</p>
      </div>

      <div className="Hobby2">
        <div className='Hobby2_text'>
          <img src={hobbyimg} alt="" /><br />
          <h4>March 20, 2025 (PUBGm)</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quis consectetur veritatis ullam odio, placeat laborum nostrum nobis enim quasi optio voluptate natus eligendi amet. Deserunt officiis aspernatur nisi reprehenderit.</p>
        </div>

        <div className='Hobby2_text'>
          <img src={hobbyimg1} alt="" />
          <h4>June 13, 2020 (MCPE)</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sapiente fuga architecto mollitia cumque, esse enim quam incidunt soluta! Veniam accusamus nihil nulla quod similique voluptates animi neque veritatis suscipit?</p>
        </div>
      </div>
    </div>
  )
}

export default Hobby