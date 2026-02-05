import './Contact.css'
import contactimage from '../../assets/images/contact.png'

function Contact() {
  return (
    <div id='contact' className='mycontact container'>
      <h1>Contact.</h1><br />
      <div className='mycontact__cards'>
        <div className='mycontact__card'>
          <img src={contactimage} alt="" />
        </div><br />
        <div className='mycontact__card'>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.</h3>
          <a href="">credom896@gmail.com</a>
          <a href="">@DilshodWorldEdits</a>
          <a href="">DWE</a>
          <a href="">+998919090515</a>
        </div>
      </div>
    </div>
  )
}

export default Contact