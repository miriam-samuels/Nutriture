import React from 'react'
import Rect from '../Images/Rectangle.jpg';
function Agent() {
    return (
        <>
            <div className="agentImg">
                <img src={Rect} alt="agentpic" />
            </div>
            <div className="agentWords">
                <h3>Are you an Agent ?</h3>
                <p>Register as a Community health worker, Nutrition and health Agent, health Messengers to extend health
                        Solutions to the last miles </p>
                <button>Get Started</button>
            </div>
        </>
    )
}

export default Agent
