import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png'
import Fb from '../Images/Facebook.svg';
import Ig from '../Images/Instagram.svg';
import Tweet from '../Images/Twitter.svg';
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
                    </div>
                </div>
                <div className="credit links">
                    <div className="link">
                        <ul>
                            <li> <b>QuickLinks</b></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li className="contact">Contact <span>nutritureinfo@gmail.com</span></li>
                        </ul>
                    </div>
                    <div className="link">
                        <ul>
                            <li><b>Nutriture</b></li>
                            <li><Link to="/terms">Terms of use</Link></li>
                            <li><Link to="/privacy_policy">Privacy Policy</Link></li>
                            <li><Link to="/market">Health Market</Link></li>
                            <li><a href = "https://www.facebook.com/groups/fortifiedfoodsinititiative/">Health Community</a></li>
                        </ul>
                    </div>

                </div>
                <div className="credit">

                    <ul>
                        <li><b>App Download</b></li>
                        <li><a href = "https://www.fortifiedfoodsinititiative/"><img src={Ios} alt="IOS" /></a></li>
                        <li><a href = "https://www.fortifiedfoodsinititiative/"><img src={Android} alt="Andriod" /></a></li>
                    </ul>

                </div>
                <p>&copy;copyright 2020 Nutriture All Right Reserved</p>

            </div>
        </>
    )
}

export default Footer
