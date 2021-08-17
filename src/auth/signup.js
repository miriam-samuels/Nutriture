import React from 'react'
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div id="signup">
            <Link to="/"><img src={Logo} alt="nutriture logo" className="logo" /></Link>

            <div className="signupWords">
                <h2>Choose Account type</h2>
                <p>Choose the account type that best describes your purpose
                for patronizing us either as a individual or as a
                organization.
                </p>
                <div className="signupBtns">
                    <Link to="/signuppatient"><button>Patients</button></Link>
                    <Link to="/signupdoctor"><button>Doctor</button></Link>
                    <Link to="/signupnutritionist"><button>Nutritionist</button></Link>
                    <Link to="/signupdoctor"><button>Health Pros</button></Link>
                    <Link to="/signuppharmacy"><button>Pharmacy</button></Link>
                    <Link to="/signupcompany"><button>Company</button></Link>
                </div>
            </div>
            <img src={Vector} alt="nutriture vector" className="vector" />
        </div>
    )
}

export default Signup

