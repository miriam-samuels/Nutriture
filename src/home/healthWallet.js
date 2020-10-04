import React from 'react'
import Doc from '../Images/doc.svg';
import Steto from '../Images/steto.svg';
import Docbag from '../Images/docbag.svg';
import Planner from '../Images/planner.svg';
import Clock from '../Images/clock.svg';
function HealthWallet() {
    return (
        <>
                          <div className="walletWords">
                        <h3>Create Health Wallet</h3>
                        <p>Add funds into your wallet in your convenience, for health purposes
                            ahead of time, to shop, buy, consult and save money with your personalized
                            Health Wallet today. </p>
                    </div>
                    <div className="healthTabs">
                        <div className="tabs">
                            <img src={Doc} alt="doc" /><br />
                            <b>Consult a doctor</b>
                            <p>Get quick access to a doctor with ease, online. Register complains, Have a personalized chat, upload
                            tests, etc with a verified, professional doctor for your health issues.</p>
                        </div>
                        <div className="tabs">
                            <img src={Steto} alt="stetoscope" /><br />
                            <b>Consult a dietician / Nutritionist</b>
                            <p>Get in touch with a dietician, get proven meal plans suited to you, get educated on food,
                            health, physical therapy and fitness solutions that will get you fast and sustainable results</p>
                        </div>
                        <div className="tabs">
                            <img src={Docbag} alt="Doctor Bag" /><br />
                            <b>Consult for Mental Health</b>
                            <p>Speak with trained and highly friendly and trustworthy personnels, who will guide you through a better
                                mental well being while ensuring your utmost privacy .
                            </p>
                        </div>
                        <div className="tabs">
                            <img src={Planner} alt="planner" /><br />
                            <b>Create Meal Plan</b>
                            <p>You can Automatically Generate meal plans to suit different types of ages, family size, health challenges
                            and normal health maintainance, to keep you healthy and fit</p>
                        </div>
                        <div className="tabs">
                            <img src={Clock} alt="clock" /><br />
                            <b>Use Symptom Checker</b>
                            <p>Get quick potential diagnosis as you Enter your symptoms and Specific conditions to get an insight into
                            possible ailments you have.</p>
                        </div>
                    </div>   
        </>
    )
}

export default HealthWallet
