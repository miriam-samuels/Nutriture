// NOTE
// refer to mothercomp.js for the state object

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
class Doctor extends Component {
    constructor(props) {
        super(props)

        this.state = {

            firstname: "jxxx",
            surname: "dxx",
            email: "xxxxx@gmail.com ",
            number: "  xxx-xxx-xxx-xxx",
            gender: "Female",
            hospital: "",
            country: "",
            licenseNum: 0,
            address: "",
            password: "",
            cpassword: "",
        }

    }

    doctorFirstnameChange = (e) => {
        this.setState({
            firstname: e.target.value,
        })
    }
    doctorLastnameChange = (e) => {
        this.setState({
            surname: e.target.value,
        })
    }
    doctorEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        })
    }
    doctorPasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        })
    }
    cdoctorPasswordChange = (e) => {
        this.setState({
            cpassword: e.target.value,
        })
    }
    doctorNumberChange = (e) => {
        this.setState({
            tel: e.target.value,
        })
    }
    doctorCountryChange = (e) => {
        this.setState({
            country: e.target.value,
        })
    }
    doctorLicenseIdChange = (e) => {
        this.setState({
            licenseNum: e.target.value,
        })
    }
    doctorGenderChange = (e) => {
        this.setState({
            gender: e.target.value,
        })
    }
    doctorHospitalChange = (e) => {
        this.setState({
            hospital: e.target.value,
        })
    }
    doctorAddressChange = (e) => {
        this.setState({
            address: e.target.value,
        })
    }
    formSubmitted = (event) => {
        const { history } = this.props;
        history.push('/profile/doctor');
        event.preventDefault()
    }
    render() {
        const { doctorHospital, doctorGender, doctorFirstname, doctorLastname, doctorEmail, doctorNumber, doctorLicenseId, doctorAddress, doctorCountry, doctorPassword, cdoctorPassword } = this.state;

        return (
            <div id="login">
                <Link to="/"><img src={Logo} alt="nutriture logo" className="logo" /></Link>
                <div className="userlogin">
                    <h1 id="heading">Register as Doctor</h1>
                    <p>Kindly fill in your details as requested</p>
                    <form onSubmit={this.formSubmitted}>
                        <label htmlFor="doctorEmail">Email</label>
                        <input type="email" id="doctorEmail" value={doctorEmail} onChange={this.doctorEmailChange} required />
                        <span><label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" value={doctorFirstname} onChange={this.nameChange} required />
                        </span>
                        <span><label htmlFor="doctorLastname">Last Name</label>
                            <input type="text" id="doctorLastname" value={doctorLastname} onChange={this.doctorLastnameChange} required />
                        </span>
                        <span><label htmlFor="doctorGender">Gender</label>
                            <select id="doctorGender" value={doctorGender} onChange={this.doctorGenderChange} >
                                <option>Female</option>
                                <option>Male</option>
                            </select>
                        </span>
                        <span><label htmlFor="doctorNumber">Phone Number</label>
                            <input type="tel" id="doctorNumber" value={doctorNumber} onChange={this.doctorNumberChange} required />
                        </span>
                        <label htmlFor="doctorHospital">Hospital Name</label>
                        <input type="text" id="doctorHospital" value={doctorHospital} onChange={this.doctorHospitalChange} required />
                        <label htmlFor="doctorAddress">Hospital Address</label>
                        <input type="text" id="doctorAddress" value={doctorAddress} onChange={this.doctorAddressChange} required />
                        <span><label htmlFor="doctorLicenseId">License ID Number</label>
                            <input type="text" id="doctorLicenseId" value={doctorLicenseId} onChange={this.doctorLicenseIdChange} required />
                        </span>
                        <span><label htmlFor="issueDate">License Issue Date</label>
                            <input type="date" id="issueDate" required />
                        </span>
                        <span><label htmlFor="expiryDate">License Expiry Date</label>
                            <input type="date" id="expiryDate" required />
                        </span>
                        <span><label htmlFor="doctorCountry">Country</label>
                            <input type="text" id="doctorCountry" value={doctorCountry} onChange={this.doctorCountryChange} required />
                        </span>
                        <label htmlFor="doctorPassword">Password</label>
                        <input type="password" id="doctorPassword" value={doctorPassword} onChange={this.doctorPasswordChange} required />
                        <label htmlFor="cdoctorPassword">Confirm Password</label>
                        <input type="password" id="cdoctorPassword" value={cdoctorPassword} onChange={this.cdoctorPasswordChange} required />
                        <input type="checkbox" id="agree" required />
                        <label htmlFor="agree" className="agree">By signing up, you agree to our <Link to="/terms"><span>terms of service</span></Link></label>
                        <button type="submit">Sign Up</button><br />
                    </form>
                </div>
                <img src={Vector} alt="vector" className="vector" />
            </div>
        )
    }
}

export default Doctor
