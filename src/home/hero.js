import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png'
import Hero1 from '../Images/hero1.png';
import Hero2 from '../Images/hero2.png';
function Hero() {
    return (
        <>
            <nav className="navBar">
                <img src={Logo} alt="Nutriturelogo" />
                <ul>
                    <li className="navItem" ><Link to="/about" >About</Link></li>
                    <li className="navItem"><Link to="/products" >Products</Link></li>
                    {/* <li className="navItem"><Link to="/blog" >Blog</Link></li> */}
                    <li className="navItem contact">Contact  <span>nutritureinfo@gmail.com</span></li>
                </ul>
                <div className="login">
                    <span><Link to="/login">Log In </Link></span>
                    <button><Link to="/signups">Sign Up </Link></button>
                </div>
            </nav>
            <div className="heroContent">
                <div className="heroWords">
                    <h2>We place complete health on your palms</h2>
                    <p>Stay Alive, Stay Healthy, Fufill your Dreams, Make today Count,
                        Prepare for the Future, Get all-round Happiness, Just make one choice
                        ... "Get Nutriture"
                        </p>
                    <Link to="/signup"><button>Sign Up</button></Link>
                </div>
                <div className="heroImg">
                    <img src={Hero2} alt="hero" className="hero2" />
                    <img src={Hero1} alt="hero" className="hero1" />
                </div>
            </div>
        </>
    )
}

export default Hero
