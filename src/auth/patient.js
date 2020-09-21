// NOTE
// the company/pharmacy name is the username for companies or pharmacies
// so when referring to state use this.state.username as the organization name, pharmacy name or hospital name
// refer to mothercomp.js for the state object

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
import UpdatedComponent from "../components/mothercomp.js"
class Patient extends Component {
    
    formSubmitted = (event) => {
        const { history } = this.props;
        history.push('/profile/patient');
        event.preventDefault()
    }
    render() {
        const { username, email, number, genotype, bloodgroup, height, weight, password, cpassword } = this.props;
        const { usernameChange, emailChange, numberChange, genotypeChange, bloodgroupChange, heightChange, weightChange, passwordChange, cpasswordChange } = this.props;
        return (
            <div id="login">
                <Link to="/"><img src={Logo} alt="nutriture logo" className="logo" /></Link>
                <div className="userlogin">
                    <h1>Register as Patient</h1>
                    <p>Kindly fill in your details as requested</p>
                    <form onSubmit={this.formSubmitted}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={emailChange} required />
                        <span><label htmlFor="username" >Username</label>
                            <input type="text" id="username" value={username} onChange={usernameChange} required />
                        </span>
                        <span><label htmlFor="number">Phone Number</label>
                            <input type="tel" id="number" value={number} onChange={numberChange} required />
                        </span>
                        <span><label htmlFor="genotype">Genotype</label>
                            <select id="genotype" value={genotype} onChange={genotypeChange}>
                                <option>AA</option>
                                <option>AS</option>
                                <option>SS</option>
                                <option>AC</option>
                            </select>
                        </span>
                        <span><label htmlFor="bloodgroup">Blood Group</label>
                            <select id="bloodgroup" value={bloodgroup} onChange={bloodgroupChange} >
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                        </span>
                        <span><label htmlFor="height">Height</label>
                            <input type="text" id="height" value={height} onChange={heightChange} required />
                        </span>
                        <span><label htmlFor="weight">Weight</label>
                            <input type="text" id="weight" value={weight} onChange={weightChange} required />
                        </span>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={passwordChange} required />
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" id="cpassword" value={cpassword} onChange={cpasswordChange} required />
                        <input type="checkbox" id="agree" checked required />
                        <label htmlFor="agree" className="agree">By signing up, you agree to our <span>terms of service</span></label>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <img src={Vector} alt="vector" className="vector" />
            </div>
        )
    }
}

export default UpdatedComponent(Patient)
