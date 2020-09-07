import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
import UpdatedComponent from "../components/mothercomp.js"
export class Doctor extends Component {
    render() {
            const {formSubmitted} = this.props;

        return (
            <div id="login">
                <img src={Logo} alt="nutriture logo" className="logo" />
                <div className="userlogin">
                    <h1 id="heading">Register as Doctor</h1>
                    <p>Kindly fill in your details as requested</p>
                    <form onSubmit={formSubmitted}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                        <span><label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" required />
                        </span>
                        <span><label htmlFor="surname">Last Name</label>
                        <input type="text" id="surname"  required />
                        </span>
                        <span><label htmlFor="gender">Gender</label>
                        <input type="text" id="gender"  required />
                        </span>
                        <span><label htmlFor="number">Phone Number</label>
                        <input type="tel" id="number"  required /> 
                        </span>
                        <label htmlFor="hospital">Hospital Name</label>
                        <input type="text" id="hospital"  />
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address"  required />
                        <span><label htmlFor="licenseNum">License ID Number</label>
                        <input type="text" id="licenseNum" required />
                        </span>
                        <span><label htmlFor="issueDate">License Issue Date</label>
                        <input type="date" id="issueDate" required />
                        </span>
                        <span><label htmlFor="expiryDate">License Expiry Date</label>
                        <input type="date" id="expiryDate"  required />
                        </span>
                        <span><label htmlFor="country">Country</label>
                        <input type="text" id="country" required />
                        </span>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" id="cpassword" required />
                        <input type="checkbox" id="agree"/>
                        <label htmlFor="agree" className="agree">By signing up, you agree to our <span>terms of service</span></label>
                        <button type="submit">Sign Up</button><br/>
                    </form>
                </div>
                <img src={Vector} alt="vector" className="vector" />
            </div> 
        )
    }
}

export default UpdatedComponent(Doctor)
