import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png'
import Hero1 from '../Images/hero1.png';
import Hero2 from '../Images/hero2.png';
import Union from '../Images/Union.svg';
import Rect from '../Images/Rectangle.jpg';
import Doc from '../Images/doc.svg';
import Steto from '../Images/steto.svg';
import Docbag from '../Images/docbag.svg';
import Planner from '../Images/planner.svg';
import Clock from '../Images/clock.svg';
import Ellipse from '../Images/ellipse.png';
import Playstore from '../Images/playstore.png'
import Applestore from '../Images/applestore.png'
import Frutty from '../Images/frutty.png'

class home extends Component {    
    render() {
        return (
            <div>
                <section id = "heroBg">
                    <nav className = "navBar">
                        <img src = {Logo} alt="Nutriturelogo"/>
                        <ul>
                        <li className="navItem" ><Link to = "/about" >About</Link></li>
                            <li className="navItem"><Link to = "/features" >Features</Link></li>
                            <li className="navItem"><Link to = "/blog" >Blog</Link></li>
                            <li className="navItem"><Link to = "/contact" >Contact</Link></li>
                        </ul>
                        <div className="login">
                        <span><Link to = "/login">Log In </Link></span>
                        <button><Link to = "/signup">Sign Up </Link></button>
                        </div>
                    </nav>
                    <div className="heroContent">
                    <div className="heroWords">
                        <h2>We place complete health on your palms</h2>
                        <p>Stay Alive, Stay Healthy, Fufill your Dreams, Make today Count, 
                            Prepare for the Future, Get all-round Happiness, Just make one choice
                            ... "Get Nutriture"
                        </p>
                        <button>Sign Up</button>
                    </div>
                    <div className="heroImg">
                        <img src={Hero2} alt="hero" className="hero2"/>
                        <img src={Hero1} alt="hero" className="hero1"/>
                    </div>
                    </div>
                    <img src={Union} alt="union" className="union1 union"/>
                    <img src={Union} alt="union" className="union2 union"/>
                    <img src={Union} alt="union" className="union3 union"/>
                    <img src={Union} alt="union" className="union4 union"/>
                    <img src={Union} alt="union" className="union5 union"/>
                    <img src={Union} alt="union" className="union6 union"/>
                    <img src={Union} alt="union" className="union7 union"/>
                    <img src={Union} alt="union" className="union8 union"/>
                </section>

                <section id="why"> 
                    <div className="whyImg">
                        <img src={Rect} alt="whydocpic" />
                    </div>
                    <div className="whyWords">
                        <h3>Why Use Nutriture ?</h3>
                        <p>We understand what you need to stay healthy, we have brought the benefits professionals,medicals and 'naturals'
                            and skills you can trust from around the world, to serve you. We ensured the development,
                             effective and innovative application of technology taillored to your personal health management.                         </p>
                        <ul>
                            <li className="whyItem">Safe and Secure</li>
                            <li className="whyItem">Fast Response</li>
                            <li className="whyItem">Instant Access</li>
                        </ul>
                    </div>
                </section>

                <section id="who">
                    <div className="whoWords">
                    <h3>Who Can Use Nutriture ?</h3>
                    <p>We offer end to end health solutions, built to accomodate
                        all help needed for standard health care </p>
                    </div>
                    <div className="whoBtns">
                        <button>Patients</button>
                        <button>Doctors</button>
                        <button>Hospitals</button>
                        <button>Pharmacies</button>
                        <button>Nuritionists</button>
                        <button>Companies</button>
                        <button>Health Vendors</button>
                        {/* <button>HMOs</button> */}
                    </div>
                    <img src={Union} alt="union" className="union9"/>
                    <img src={Union} alt="union" className="union10"/>
                </section>

                <section id="healthWallet">
                    <div className="walletWords">
                        <h3>Create Health Wallet</h3>
                        <p>Add funds into your wallet in your convenience, for health purposes
                            ahead of time, to shop, buy, consult and save money with your personalized
                            Health Wallet today. </p>
                    </div>
                    <div className="healthTabs">
                        <div className="tabs">
                            <img src={Doc} alt="doc" /><br/>
                            <b>Consult a doctor</b>
                            <p>Get quick access to a doctor with ease, online. Register complains, Have a personalized chat, upload
                            tests, etc with a verified, professional doctor for your health issues.</p>
                        </div>
                        <div className="tabs">
                            <img src={Steto} alt="stetoscope" /><br/>
                            <b>Consult a dietician</b>
                            <p>Get in touch with a dietician, get proven meal plans suited to you, get educated on food,
                            health, physical therapy and fitness solutions that will get you fast and sustainable results</p>
                        </div>
                        <div className="tabs">
                            <img src={Docbag} alt="Doctor Bag" /><br/>
                            <b>Consult a nutritionist</b>
                            <p>Get nutrition support, diet prescription and nutritient intake information from a professional
                                Nutritionist, for yourself, family, and many more</p>
                        </div>
                        <div className="tabs">
                            <img src={Planner} alt="planner" /><br/>
                            <b>Create Meal Plan</b>
                            <p>You can Automatically Generate meal plans to suit different types of ages, family size, health challenges
                            and normal health maintainance, to keep you healthy and fit</p>
                        </div>
                        <div className="tabs">
                            <img src={Clock} alt="clock" /><br/>
                            <b>Use Symptom Check</b>
                            <p>Get quick potential diagnosis as you Enter your symptoms and Specific conditions to get an insight into
                            possible ailments you have.</p>
                        </div>
                    </div>
                </section>

                <section id="benefits">
                    <img src={Ellipse} alt="ellipse" className="ellipse" />
                    <div className="benefitWords">
                        <h3>Amazing Benefits</h3>
                        <p>Nutriture health is your best health companion, with which you can be assured many things lacking,
                        including:</p>
                    </div>
                    <div className="benefitBtns">
                        <button>Health supplies near you</button>
                        <button>Free Health Resources</button>
                        <button>Free Meal Plan</button>
                        <button>Free Health Game</button>
                        <button>Referral Bonuses</button>
                    </div>
                    <img src={Union} alt="union" className="union11"/>
                    <img src={Union} alt="union" className="union12"/>
                    <img src={Union} alt="union" className="union13"/>
                </section>

                <section id="resources">
                    <div className="resourcesWords">
                        <h3>Health Resources</h3>
                        <p>Explore our vast and robust knowledge base on numerous health related topics and trends. Get to listen
                        to health podcast, read Specific blogs and videos to guide your health </p>
                    </div>
                    <div className="resourcesTabs">
                    <div className="tab">
                        <b>Learn About Your Health</b><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt. lorem Ut eiusmod tempor incididunt.tempor incididunt. </p>
                        <button>&#8620;</button>
                    </div>
                    <div className="tab">
                        <b>Visit Health Market</b><br/>
                        <p>Shop for health supplements, gadgets, and nutritious and organic food products from our various food-
                        Nutrition Brands and health-based Vendors </p>
                        <button>&#8620;</button>
                    </div>
                    <div className="tab">
                        <b>Health Community</b><br/>
                        <p>Join the largest growing community of health conscious minds and get valuable health 
                        tips, also get a chance to create awareness on health in Africa. </p>
                        <button>&#8620;</button>
                    </div>
                    </div>
                </section>
    
                <section id="agent"> 
                    <div className="agentImg">
                        <img src={Rect} alt="agentpic" />
                    </div>
                    <div className="agentWords">
                        <h3>Are you an Agent ?</h3>
                        <p>Register as a Community health worker, Nutrition and health Agent, health Messengers to extend health
                        Solutions to the last miles </p>
                        <button>Get Started</button>
                    </div>
                </section>

                <section id="games"> 
                    <div className="gamesWords">
                        <h3>Play Health Games</h3>
                        <p>Download and play our educative health/fun games on android and iOS devices, to boost your health
                        knowledge, improve mental health, and win some great freebies </p>
                        <img src={Playstore} alt="play store" />
                        <img src={Applestore} alt="Apple store" />
                    </div>
                    <div className="gamesImg">
                        <img src={Frutty} alt="gamepic" />
                    </div>
                </section>

                <section id="unlimited">
                    <div className="unlimitedWords">
                        <h3>Enjoy unlimited health services</h3>
                        <button>Sign Up</button>
                    </div>
                    <img src={Union} alt="union" className="union1 union"/>
                    <img src={Union} alt="union" className="union2 union"/>
                    <img src={Union} alt="union" className="union3 union"/>
                </section>
            </div>
        )
    }
}

export default home
