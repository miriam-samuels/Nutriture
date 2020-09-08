import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
import UpdatedComponent from "../components/mothercomp.js"
export class patient extends Component {
    render() {
        const {formSubmitted} = this.props;
        return (
            <div id="login">
                <img src={Logo} alt="nutriture logo" className="logo" />
                <div className="userlogin">
                    <h1>Register as Patient</h1>
                    <p>Kindly fill in your details as requested</p>
                    <form onSubmit={formSubmitted}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                        <span><label htmlFor="username">Username</label>
                        <input type="text" id="username" required />
                        </span>
                        <span><label htmlFor="number">Phone Number</label>
                        <input type="tel" id="number" required />
                        </span>
                        <span><label htmlFor="genotype">Genotype</label>
                        <input type="text" id="genotype" required />
                        </span>
                        <span><label htmlFor="bloodgroup">Blood Group</label>
                        <input type="text" id="bloodgroup" required />
                        </span>
                        <span><label htmlFor="height">Height</label>
                        <input type="text" id="height" required />
                        </span>
                        <span><label htmlFor="weight">Weight</label>
                        <input type="text" id="weight" required />
                        </span>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" id="cpassword" required />
                        <br/><input type="checkbox" id="agree"/>
                        <label htmlFor="agree" className="agree">By signing up, you agree to our <span>terms of service</span></label>
                        <button type="submit">Sign Up</button><br/>
                    </form>
                </div>
                <img src={Vector} alt="vector" className="vector" />
            </div> 
        )
    }
}

export default UpdatedComponent(patient)
