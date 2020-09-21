import React from 'react'
// import { Link } from 'react-router-dom';
// import Logo from '../Images/nutriturelogo.png';
import Footer from './footer.js'

function contact() {
    return (
        <div id="contact">
            {/* <Link to="/"><img src={Logo} alt="nutriture logo" className="logo" /></Link> */}
            <div className="contact">
            <div className="getintouch">
            <h3>Get in Touch</h3>
            <p>Call us</p>
            <b>07010960034</b>
            <p>Email Us</p>
            <b>nutritureinfo@gmail.com</b>
            <p>Address</p>
            <b>Akure</b>
            </div>
            <div className="msg">
            <h3>Drop a message</h3>
                <form>
                    <label htmlFor="name">Name</label><br/>
                    <input type="text" placeholder="enter your name" id="name"/>
                   <br/> <label htmlFor="email">Email Address</label><br/>
                    <input type="email" placeholder="enter your email address" id="email" />
                    <br/><label htmlFor="msg">Your Message</label><br/>
                    <textarea placeholder="enter your message" rows="10" id="msg"></textarea>
                    <button type="submit"> Submit</button>
                </form>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default contact

