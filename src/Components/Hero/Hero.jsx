import './Hero.css'
import Im from '../../assets/images/fjjfjf.png'

function Hero() {
  return (
    <div className='hero container'>
      <div className="hero__left">
        <h1 className='hero__left--title'>I'm Dilshodbek</h1>
        <p className='hero__left--desc'>A passionate Frontend Developer</p>
        <button className='hero__left--btn'>Hire Me</button>
      </div>
      <div className="hero__right">
        <div className="hero__right--imgbox">
          <img className='hero__right--img' src={Im} alt="Hero Image"  />  
        </div>
      </div>
    </div>
  )
}

export default Hero