// NOTE
// the pharmacy/pharmacy name is the pharmacyName for companies or pharmacies
// so when referring to state use this.state.pharmacyName as the organization name, pharmacy name or hospital name


import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
class Pharmacy extends Component {
    constructor(props) {
        super(props)

        this.state = {

                username: "xxxxxxx xxxx",
                firstname: "jxxx",
                surname: "dxx",
                email: "xxxxx@gmail.com ",
                number: "  xxx-xxx-xxx-xxx",
                country: "",
                address: "",
                password: "",
                cpassword: "",
            }
    }

    pharmarcyFirstnameChange = (e) => {
        this.setState({
            firstname: e.target.value,
        })
    }
    pharmarcyLastnameChange = (e) => {
        this.setState({
            surname: e.target.value,
        })
    }
    pharmarcyNameChange = (e) => {
        this.setState({
            username: e.target.value,
        })
    }
    pharmarcyEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        })
    }
    pharmarcyPasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        })
    }
    cpharmarcyPasswordChange = (e) => {
        this.setState({
            cpassword: e.target.value,
        })
    }
    pharmarcyNumberChange = (e) => {
        this.setState({
            tel: e.target.value,
        })
    }
    pharmarcyCountryChange = (e) => {
        this.setState({
            country: e.target.value,
        })
    }
    pharmarcyAddressChange = (e) => {
        this.setState({
            address: e.target.value,
        })
    }
    formSubmitted = (event) => {
        const { history } = this.props;
        history.push('/profile/pharmacy');
        event.preventDefault()
    };
    render() {
        const { pharmacyName, pharmacyFirstname, pharmacyLastname, pharmacyEmail, pharmacyNumber, pharmacyAddress, pharmacyCountry, pharmacyPassword, cpharmacyPassword } = this.state;
        return (
            <div id="login">
                <Link to="/"><img src={Logo} alt="nutriture logo" className="logo" /></Link>
                <div className="userlogin">
                    <h1 id="heading">Register as a pharmacy</h1>
                    <p>Kindly fill in your details as requested</p>
                    <form onSubmit={this.formSubmitted}>
                        <label htmlFor="pharmacyEmail">Email</label>
                        <input type="email" id="pharmacyEmail" value={pharmacyEmail} onChange={this.pharmacyEmailChange} required />
                        <span><label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" value={pharmacyFirstname} onChange={this.pharmacyFirstnameChange} required />
                        </span>
                        <span><label htmlFor="pharmacyLastname">Last Name</label>
                            <input type="text" id="pharmacyLastname" value={pharmacyLastname} onChange={this.pharmacyLastnameChange} required />
                        </span>
                        <span><label htmlFor="pharmacyCountry">Country</label>
                            <input type="text" id="pharmacyCountry" value={pharmacyCountry} onChange={this.pharmacyCountryChange} required />
                        </span>
                        <span><label htmlFor="pharmacyNumber">Phone Number</label>
                            <input type="tel" id="pharmacyNumber" value={pharmacyNumber} onChange={this.pharmacyNumberChange} required />
                        </span>
                        <label htmlFor="pharmacy">pharmacy Name</label>
                        <input type="text" id="pharmacy" value={pharmacyName} onChange={this.pharmacyNameChange} required />
                        <label htmlFor="pharmacyAddress">pharmacy Address</label>
                        <input type="text" id="pharmacyAddress" value={pharmacyAddress} onChange={this.pharmacyAddressChange} required />
                        <label htmlFor="pharmacyPassword">Password</label>
                        <input type="password" id="pharmacyPassword" value={pharmacyPassword} onChange={this.pharmacyPasswordChange} required />
                        <label htmlFor="cpharmacyPassword">Confirm Password</label>
                        <input type="password" id="cpharmacyPassword" value={cpharmacyPassword} onChange={this.cpharmacyPasswordChange} required />
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

export default Pharmacy
