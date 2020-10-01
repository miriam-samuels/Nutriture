// NOTE
// the pharmacy/pharmacy name is the pharmacyName for companies or pharmacies
// so when referring to state use this.state.pharmacyName as the organization name, pharmacy name or hospital name
// refer to mothercomp.js for the state object


import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
// import pharmacyHOC from "../components/pharmacyHOC"
import PharmacyHOC from '../components/pharmacyHOC';
class Pharmacy extends Component {
    
    formSubmitted = (event) => {
        const { history } = this.props;
        history.push('/profile/pharmacy');
        event.preventDefault()
    }
    render() {
        const { pharmacyName, pharmacyFirstname, pharmacyLastname, pharmacyEmail, pharmacyNumber, pharmacyAddress, pharmacyCountry, pharmacyPassword, cpharmacyPassword } = this.props;
        const { pharmacyNameChange, pharmacyFirstnameChange, pharmacyLastnameChange,  pharmacyNumberChange, pharmacyAddressChange, pharmacyCountryChange, pharmacyPasswordChange, cpharmacyPasswordChange } = this.props;
        return (
            <div id="login">
                <Link to="/"><img src={Logo} alt="nutriture logo" className="logo" /></Link>
                <div className="userlogin">
                    <h1 id="heading">Register as a pharmacy</h1>
                    <p>Kindly fill in your details as requested</p>
                    <form onSubmit={this.formSubmitted}>
                        <label htmlFor="pharmacyEmail">Email</label>
                        <input type="email" id="pharmacyEmail" value={pharmacyEmail}  required />
                        <span><label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" value={pharmacyFirstname} onChange={pharmacyFirstnameChange} required />
                        </span>
                        <span><label htmlFor="pharmacyLastname">Last Name</label>
                            <input type="text" id="pharmacyLastname" value={pharmacyLastname} onChange={pharmacyLastnameChange} required />
                        </span>
                        <span><label htmlFor="pharmacyCountry">Country</label>
                            <input type="text" id="pharmacyCountry" value={pharmacyCountry} onChange={pharmacyCountryChange} required />
                        </span>
                        <span><label htmlFor="pharmacyNumber">Phone Number</label>
                            <input type="tel" id="pharmacyNumber" value={pharmacyNumber} onChange={pharmacyNumberChange} required />
                        </span>
                        <label htmlFor="pharmacy">pharmacy Name</label>
                        <input type="text" id="pharmacy" value={pharmacyName} onChange={pharmacyNameChange} required />
                        <label htmlFor="pharmacyAddress">pharmacy Address</label>
                        <input type="text" id="pharmacyAddress" value={pharmacyAddress} onChange={pharmacyAddressChange} required />
                        <label htmlFor="pharmacyPassword">Password</label>
                        <input type="password" id="pharmacyPassword" value={pharmacyPassword} onChange={pharmacyPasswordChange} required />
                        <label htmlFor="cpharmacyPassword">Confirm Password</label>
                        <input type="password" id="cpharmacyPassword" value={cpharmacyPassword} onChange={cpharmacyPasswordChange} required />
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

export default PharmacyHOC(Pharmacy)
