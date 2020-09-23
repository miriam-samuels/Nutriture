// NOTE
// refer to mothercomp.js for the state object

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
import UpdatedComponent from "../components/mothercomp.js"
class Doctor extends Component {
    
    formSubmitted = (event) => {
        const { history } = this.props;
        history.push('/profile/doctor');
        event.preventDefault()
    }
    render() {
        const { hospital, gender, firstname, surname, email, number, licenseNum, address, country, password, cpassword } = this.props;
        const { genderChange, hospitalChange, nameChange, surnameChange, emailChange, numberChange, licenseNumChange, addressChange, countryChange, passwordChange, cpasswordChange } = this.props;

        return (
            <div id="login">
                <Link to="/"><img src={Logo} alt="nutriture logo" className="logo" /></Link>
                <div className="userlogin">
                    <h1 id="heading">Register as Doctor</h1>
                    <p>Kindly fill in your details as requested</p>
                    <form onSubmit={this.formSubmitted}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={emailChange} required />
                        <span><label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" value={firstname} onChange={nameChange} required />
                        </span>
                        <span><label htmlFor="surname">Last Name</label>
                            <input type="text" id="surname" value={surname} onChange={surnameChange} required />
                        </span>
                        <span><label htmlFor="gender">Gender</label>
                            <select id="gender" value={gender} onChange={genderChange} >
                                <option>Female</option>
                                <option>Male</option>
                            </select>
                        </span>
                        <span><label htmlFor="number">Phone Number</label>
                            <input type="tel" id="number" value={number} onChange={numberChange} required />
                        </span>
                        <label htmlFor="hospital">Hospital Name</label>
                        <input type="text" id="hospital" value={hospital} onChange={hospitalChange} required />
                        <label htmlFor="address">Hospital Address</label>
                        <input type="text" id="address" value={address} onChange={addressChange} required />
                        <span><label htmlFor="licenseNum">License ID Number</label>
                            <input type="text" id="licenseNum" value={licenseNum} onChange={licenseNumChange} required />
                        </span>
                        <span><label htmlFor="issueDate">License Issue Date</label>
                            <input type="date" id="issueDate" required />
                        </span>
                        <span><label htmlFor="expiryDate">License Expiry Date</label>
                            <input type="date" id="expiryDate" required />
                        </span>
                        <span><label htmlFor="country">Country</label>
                            <input type="text" id="country" value={country} onChange={countryChange} required />
                        </span>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={passwordChange} required />
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" id="cpassword" value={cpassword} onChange={cpasswordChange} required />
                        <input type="checkbox" id="agree" checked required />
                        <label htmlFor="agree" className="agree">By signing up, you agree to our <Link to="/terms"><span>terms of service</span></Link></label>
                        <button type="submit">Sign Up</button><br />
                    </form>
                </div>
                <img src={Vector} alt="vector" className="vector" />
            </div>
        )
    }
}

export default UpdatedComponent(Doctor)
