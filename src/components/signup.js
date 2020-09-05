import React, { Component } from 'react'
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'

class signup extends Component {
    render() {
        return (
            <div>
        <img src={Logo} alt="nutriture logo" className="logo" />
        
        <div className="signupWords">
            <h2>Choose Account type</h2>
            <p>Choose the account type that best describes your purpose 
                for patronizing us either as a individual or as a 
                organization
            </p>
        </div>
        <div className="signupBtns">
            <button>Patients</button>
            <button>Doctor</button>
            <button>Nutritionist/Dietician</button>
            <button>Health Professionals</button>
            <button>Pharmacy</button>
            <button>Organization</button>
        </div>
        <img src={Vector} alt="nutriture vector" />
            </div>
        )
    }
}

export default signup

