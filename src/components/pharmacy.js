import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
import UpdatedComponent from "../components/mothercomp.js"
export class pharmacy extends Component {
    render() {
            const {formSubmitted} = this.props;

        return (
            <div id="login">
                <img src={Logo} alt="nutriture logo" className="logo" />
                <div className="userlogin">
                    <h1 id="heading">Register as a Pharmacy</h1>
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
                        <span><label htmlFor="country">Country</label>
                        <input type="text" id="country" required />
                        </span> 
                        <span><label htmlFor="number">Phone Number</label>
                        <input type="tel" id="number"  required /> 
                        </span>
                        <label htmlFor="pharmacy">Pharmacy Name</label>
                        <input type="text" id="pharmacy"  />
                        <label htmlFor="address">Pharmacy Address</label>
                        <input type="text" id="address"  required />
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

export default UpdatedComponent(pharmacy)
