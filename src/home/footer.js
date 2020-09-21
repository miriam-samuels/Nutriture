import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png'
import Fb from '../Images/Facebook.svg';
import Ig from '../Images/Instagram.svg';
import Tweet from '../Images/Twitter.svg';
import Whatsapp from '../Images/Whatsapp.svg';
import Android from '../Images/adr.svg';
import Ios from '../Images/ios.svg';
function Footer() {
    return (
        <>
            <div className="credits">
                <div className="credit lg">
                    <img src={Logo} alt="Logo" className="logo" /><br />
                    <div className="connect"><br />
                        <span><a href="https://web.facebook.com/nutriturehealth"><img src={Fb} alt="FB" /></a></span>
                        <span><a href="https://instagram.com/nutriturehealth?igshid=111u1udt7uxnu"><img src={Ig} alt="IG" /></a></span>
                        <span><a href="http://twitter.com/nutriturehealth?s=09"><img src={Tweet} alt="TWITTER" /></a></span>
                        <span><a href="https://web.facebook.com/nutriturehealth"><img src={Whatsapp} alt="WHATSAPP" /></a></span>
                    </div>
                </div>
                <div className="credit links">
                    <div className="link">
                        <ul>
                            <li> <b>QuickLinks</b></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="link">
                        <ul>
                            <li><b>Nutriture</b></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/terms">Terms of use</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/market">Health Market</Link></li>
                            <li><Link to="/community">Health Community</Link></li>
                        </ul>
                    </div>

                </div>
                <div className="credit">

                    <ul>
                        <li><b>App Download</b></li>
                        <li><Link to="/AddRestaurant"><img src={Ios} alt="IOS" /></Link></li>
                        <li><Link to="/AddDriver"><img src={Android} alt="Andriod" /></Link></li>
                    </ul>

                </div>
                <p>&copy;copyright 2020 TasteClan All Right Reserved</p>

            </div>
        </>
    )
}

export default Footer
