// NOTE
// refer to mothercomp.js for the state object

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
import DoctorHOC from "../components/doctorHOC"
class Doctor extends Component {
    
    formSubmitted = (event) => {
        const { history } = this.props;
        history.push('/profile/doctor');
        event.preventDefault()
    }
    render() {
        const { doctorHospital, doctorGender, doctorFirstname, doctorLastname, doctorEmail, doctorNumber, doctorLicenseId, doctorAddress, doctorCountry, doctorPassword, cdoctorPassword } = this.props;
        const { doctorGenderChange, doctorHospitalChange, nameChange, doctorLastnameChange, doctorEmailChange, doctorNumberChange, doctorLicenseIdChange, doctorAddressChange, doctorCountryChange, doctorPasswordChange, cdoctorPasswordChange } = this.props;

        return (
            <div id="login">
                <Link to="/"><img src={Logo} alt="nutriture logo" className="logo" /></Link>
                <div className="userlogin">
                    <h1 id="heading">Register as Doctor</h1>
                    <p>Kindly fill in your details as requested</p>
                    <form onSubmit={this.formSubmitted}>
                        <label htmlFor="doctorEmail">Email</label>
                        <input type="email" id="doctorEmail" value={doctorEmail} onChange={doctorEmailChange} required />
                        <span><label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" value={doctorFirstname} onChange={nameChange} required />
                        </span>
                        <span><label htmlFor="doctorLastname">Last Name</label>
                            <input type="text" id="doctorLastname" value={doctorLastname} onChange={doctorLastnameChange} required />
                        </span>
                        <span><label htmlFor="doctorGender">Gender</label>
                            <select id="doctorGender" value={doctorGender} onChange={doctorGenderChange} >
                                <option>Female</option>
                                <option>Male</option>
                            </select>
                        </span>
                        <span><label htmlFor="doctorNumber">Phone Number</label>
                            <input type="tel" id="doctorNumber" value={doctorNumber} onChange={doctorNumberChange} required />
                        </span>
                        <label htmlFor="doctorHospital">Hospital Name</label>
                        <input type="text" id="doctorHospital" value={doctorHospital} onChange={doctorHospitalChange} required />
                        <label htmlFor="doctorAddress">Hospital Address</label>
                        <input type="text" id="doctorAddress" value={doctorAddress} onChange={doctorAddressChange} required />
                        <span><label htmlFor="doctorLicenseId">License ID Number</label>
                            <input type="text" id="doctorLicenseId" value={doctorLicenseId} onChange={doctorLicenseIdChange} required />
                        </span>
                        <span><label htmlFor="issueDate">License Issue Date</label>
                            <input type="date" id="issueDate" required />
                        </span>
                        <span><label htmlFor="expiryDate">License Expiry Date</label>
                            <input type="date" id="expiryDate" required />
                        </span>
                        <span><label htmlFor="doctorCountry">Country</label>
                            <input type="text" id="doctorCountry" value={doctorCountry} onChange={doctorCountryChange} required />
                        </span>
                        <label htmlFor="doctorPassword">Password</label>
                        <input type="password" id="doctorPassword" value={doctorPassword} onChange={doctorPasswordChange} required />
                        <label htmlFor="cdoctorPassword">Confirm Password</label>
                        <input type="password" id="cdoctorPassword" value={cdoctorPassword} onChange={cdoctorPasswordChange} required />
                        <input type="checkbox" id="agree"  required />
                        <label htmlFor="agree" className="agree">By signing up, you agree to our <Link to="/terms"><span>terms of service</span></Link></label>
                        <button type="submit">Sign Up</button><br />
                    </form>
                </div>
                <img src={Vector} alt="vector" className="vector" />
            </div>
        )
    }
}

export default DoctorHOC(Doctor)
