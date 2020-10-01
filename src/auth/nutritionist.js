// NOTE
// refer to mothercomp.js for the state object

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
import NutritionistHOC from "../components/nutritionistHOC"
class Nutritionist extends Component {
    
    formSubmitted = (event) => {
        const { history } = this.props;
        history.push('/profile/nutritionist');
        event.preventDefault()
    }
    render() {
        const { nutritionistHospital, nutritionistGender, nutritionistFirstname, nutritionistLastname, nutritionistEmail, nutritionistNumber, nutritionistLicenseId, nutritionistAddress, nutritionistCountry, nutritionistPassword, cnutritionistPassword } = this.props;
        const { nutritionistGenderChange, nutritionistHospitalChange, nameChange, nutritionistLastnameChange, nutritionistEmailChange, nutritionistNumberChange, nutritionistLicenseIdChange, nutritionistAddressChange, nutritionistCountryChange, nutritionistPasswordChange, cnutritionistPasswordChange } = this.props;

        return (
            <div id="login">
                <Link to="/"><img src={Logo} alt="nutriture logo" className="logo" /></Link>
                <div className="userlogin">
                    <h1 id="heading">Register as nutritionist</h1>
                    <p>Kindly fill in your details as requested</p>
                    <form onSubmit={this.formSubmitted}>
                        <label htmlFor="nutritionistEmail">Email</label>
                        <input type="email" id="nutritionistEmail" value={nutritionistEmail} onChange={nutritionistEmailChange} required />
                        <span><label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" value={nutritionistFirstname} onChange={nameChange} required />
                        </span>
                        <span><label htmlFor="nutritionistLastname">Last Name</label>
                            <input type="text" id="nutritionistLastname" value={nutritionistLastname} onChange={nutritionistLastnameChange} required />
                        </span>
                        <span><label htmlFor="nutritionistGender">Gender</label>
                            <select id="nutritionistGender" value={nutritionistGender} onChange={nutritionistGenderChange} >
                                <option>Female</option>
                                <option>Male</option>
                            </select>
                        </span>
                        <span><label htmlFor="nutritionistNumber">Phone Number</label>
                            <input type="tel" id="nutritionistNumber" value={nutritionistNumber} onChange={nutritionistNumberChange} required />
                        </span>
                        <label htmlFor="nutritionistHospital">Hospital Name</label>
                        <input type="text" id="nutritionistHospital" value={nutritionistHospital} onChange={nutritionistHospitalChange} required />
                        <label htmlFor="nutritionistAddress">Hospital Address</label>
                        <input type="text" id="nutritionistAddress" value={nutritionistAddress} onChange={nutritionistAddressChange} required />
                        <span><label htmlFor="nutritionistLicenseId">License ID Number</label>
                            <input type="text" id="nutritionistLicenseId" value={nutritionistLicenseId} onChange={nutritionistLicenseIdChange} required />
                        </span>
                        <span><label htmlFor="issueDate">License Issue Date</label>
                            <input type="date" id="issueDate" required />
                        </span>
                        <span><label htmlFor="expiryDate">License Expiry Date</label>
                            <input type="date" id="expiryDate" required />
                        </span>
                        <span><label htmlFor="nutritionistCountry">Country</label>
                            <input type="text" id="nutritionistCountry" value={nutritionistCountry} onChange={nutritionistCountryChange} required />
                        </span>
                        <label htmlFor="nutritionistPassword">Password</label>
                        <input type="password" id="nutritionistPassword" value={nutritionistPassword} onChange={nutritionistPasswordChange} required />
                        <label htmlFor="cnutritionistPassword">Confirm Password</label>
                        <input type="password" id="cnutritionistPassword" value={cnutritionistPassword} onChange={cnutritionistPasswordChange} required />
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

export default NutritionistHOC(Nutritionist)
