// NOTE
// the company/pharmacy name is the companyName for companies or pharmacies
// so when referring to state use this.state.companyName as the organization name, pharmacy name or hospital name
// refer to mothercomp.js for the state object


import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
import CompanyHOC from '../components/companyHOC';
class Company extends Component {
    
    render() {
        const {formSubmitted} = this.props;
        const { companyName, companyFirstname, companyLastname, companyEmail, companyNumber, companyAddress, companyCountry, companyPassword, ccompanyPassword } = this.props;
        const { companyNameChange, companyFirstnameChange, companyEmailChange, companyLastnameChange,  companyNumberChange, companyAddressChange, companyCountryChange, companyPasswordChange, ccompanyPasswordChange } = this.props;
        return (
            <div id="login">
                <Link to="/"><img src={Logo} alt="nutriture logo" className="logo" /></Link>
                <div className="userlogin">
                    <h1 id="heading">Register as a Company</h1>
                    <p>Kindly fill in your details as requested</p>
                    <form onSubmit={formSubmitted}>
                        <label htmlFor="companyEmail">Email</label>
                        <input type="email" id="companyEmail" value={companyEmail} onChange={companyEmailChange} required />
                        <span><label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" value={companyFirstname} onChange={companyFirstnameChange} required />
                        </span>
                        <span><label htmlFor="companyLastname">Last Name</label>
                            <input type="text" id="companyLastname" value={companyLastname} onChange={companyLastnameChange} required />
                        </span>
                        <span><label htmlFor="companyCountry">Country</label>
                            <input type="text" id="companyCountry" value={companyCountry} onChange={companyCountryChange} required />
                        </span>
                        <span><label htmlFor="companyNumber">Phone Number</label>
                            <input type="tel" id="companyNumber" value={companyNumber} onChange={companyNumberChange} required />
                        </span>
                        <label htmlFor="company">Company Name</label>
                        <input type="text" id="company" value={companyName} onChange={companyNameChange} required />
                        <label htmlFor="companyAddress">Company Address</label>
                        <input type="text" id="companyAddress" value={companyAddress} onChange={companyAddressChange} required />
                        <label htmlFor="companyPassword">Password</label>
                        <input type="password" id="companyPassword" value={companyPassword} onChange={companyPasswordChange} required />
                        <label htmlFor="ccompanyPassword">Confirm Password</label>
                        <input type="password" id="ccompanyPassword" value={ccompanyPassword} onChange={ccompanyPasswordChange} required />
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

export default CompanyHOC( Company)
