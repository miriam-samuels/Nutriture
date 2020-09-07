import React from 'react'
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
import { Link } from 'react-router-dom';

function signup() {
    return (
        <div id="signup"> 
            <img src={Logo} alt="nutriture logo" className="logo" />

            <div className="signupWords">
                <h2>Choose Account type</h2>
                <p>Choose the account type that best describes your purpose
                for patronizing us either as a individual or as a
                organization. 
            </p>
            <div className="signupBtns">
                <Link to = "/patient"><button>Patients</button></Link>
                <Link to = "/doctor"><button>Doctor</button></Link>
                <Link to = "/nutritionist"><button>Nutritionist</button></Link>
                <Link to = "/doctor"><button>Health Pros</button></Link>
                <Link to = "/pharmacy"><button>Pharmacy</button></Link>
                <Link to = "/company"><button>Company</button></Link>
            </div>
            </div>
            <img src={Vector} alt="nutriture vector" className="vector" />
        </div>
    )
}

export default signup

