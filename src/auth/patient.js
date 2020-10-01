// NOTE
// the company/pharmacy name is the patientUsername for companies or pharmacies
// so when referring to state use this.state.patientUsername as the organization name, pharmacy name or hospital name
// refer to mothercomp.js for the state object

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
import PatientHoc from '../components/patientHoc';
class Patient extends Component {
    
    formSubmitted = (event) => {
        const { history } = this.props;
        history.push('/profile/patient');
        event.preventDefault()
    }
    render() {
        const { patientUsername, patientEmail, patientNumber, patientGenotype, patientBloodgroup, patientHeight, patientWeight, patientPassword, cpatientPassword } = this.props;
        const { patientUsernameChange, patientEmailChange, patientNumberChange, patientGenotypeChange, patientBloodgroupChange, patientHeightChange, patientWeightChange, patientPasswordChange, cpatientPasswordChange } = this.props;
        return (
            <div id="login">
                <Link to="/"><img src={Logo} alt="nutriture logo" className="logo" /></Link>
                <div className="userlogin">
                    <h1>Register as Patient</h1>
                    <p>Kindly fill in your details as requested</p>
                    <form onSubmit={this.formSubmitted}>
                        <label htmlFor="patientEmail">Email</label>
                        <input type="email" id="patientEmail" value={patientEmail} onChange={patientEmailChange} required />
                        <span><label htmlFor="patientUsername" >Username</label>
                            <input type="text" id="patientUsername" value={patientUsername} onChange={patientUsernameChange} required />
                        </span>
                        <span><label htmlFor="patientNumber">Phone Number</label>
                            <input type="tel" id="patientNumber" value={patientNumber} onChange={patientNumberChange} required />
                        </span>
                        <span><label htmlFor="patientGenotype">Genotype</label>
                            <select id="patientGenotype" value={patientGenotype} onChange={patientGenotypeChange}>
                                <option>AA</option>
                                <option>AS</option>
                                <option>SS</option>
                                <option>AC</option>
                            </select>
                        </span>
                        <span><label htmlFor="patientBloodgroup">Blood Group</label>
                            <select id="patientBloodgroup" value={patientBloodgroup} onChange={patientBloodgroupChange} >
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
                        <span><label htmlFor="patientHeight">Height</label>
                            <input type="text" id="patientHeight" value={patientHeight} onChange={patientHeightChange} required />
                        </span>
                        <span><label htmlFor="patientWeight">Weight</label>
                            <input type="text" id="patientWeight" value={patientWeight} onChange={patientWeightChange} required />
                        </span>
                        <label htmlFor="patientPassword">Password</label>
                        <input type="password" id="patientPassword" value={patientPassword} onChange={patientPasswordChange} required />
                        <label htmlFor="cpatientPassword">Confirm Password</label>
                        <input type="password" id="cpatientPassword" value={cpatientPassword} onChange={cpatientPasswordChange} required />
                        <input type="checkbox" id="agree" checked required />
                        <label htmlFor="agree" className="agree">By signing up, you agree to our <Link to="/terms"><span>terms of service</span></Link></label>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <img src={Vector} alt="vector" className="vector" />
            </div>
        )
    }
}

export default PatientHoc(Patient)
