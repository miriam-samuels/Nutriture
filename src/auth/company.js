// NOTE
// the company/pharmacy name is the companyName for companies or pharmacies
// so when referring to state use this.state.companyName as the organization name, pharmacy name or hospital name


import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
class Company extends Component {
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

    companyFirstnameChange = (e) => {
        this.setState({
            firstname: e.target.value,
        })
    }
    companyLastnameChange = (e) => {
        this.setState({
            surname: e.target.value,
        })
    }
    companyNameChange = (e) => {
        this.setState({
            username: e.target.value,
        })
    }
    companyEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        })
    }
    companyPasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        })
    }
    ccompanyPasswordChange = (e) => {
        this.setState({
            cpassword: e.target.value,
        })
    }
    companyNumberChange = (e) => {
        this.setState({
            tel: e.target.value,
        })
    }
    companyCountryChange = (e) => {
        this.setState({
            country: e.target.value,
        })
    }
    companyAddressChange = (e) => {
        this.setState({
            address: e.target.value,
        })
    }
    formSubmitted = (event) => {
        const { history } = this.props;
        history.push('/profile/company');
        event.preventDefault()
    }
    render() {
        const { formSubmitted } = this.props;
        const { companyName, companyFirstname, companyLastname, companyEmail, companyNumber, companyAddress, companyCountry, companyPassword, ccompanyPassword } = this.state;
        return (
            <div id="login">
                <Link to="/"><img src={Logo} alt="nutriture logo" className="logo" /></Link>
                <div className="userlogin">
                    <h1 id="heading">Register as a Company</h1>
                    <p>Kindly fill in your details as requested</p>
                    <form onSubmit={this.formSubmitted}>
                        <label htmlFor="companyEmail">Email</label>
                        <input type="email" id="companyEmail" value={companyEmail} onChange={this.companyEmailChange} required />
                        <span><label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" value={companyFirstname} onChange={this.companyFirstnameChange} required />
                        </span>
                        <span><label htmlFor="companyLastname">Last Name</label>
                            <input type="text" id="companyLastname" value={companyLastname} onChange={this.companyLastnameChange} required />
                        </span>
                        <span><label htmlFor="companyCountry">Country</label>
                            <input type="text" id="companyCountry" value={companyCountry} onChange={this.companyCountryChange} required />
                        </span>
                        <span><label htmlFor="companyNumber">Phone Number</label>
                            <input type="tel" id="companyNumber" value={companyNumber} onChange={this.companyNumberChange} required />
                        </span>
                        <label htmlFor="company">Company Name</label>
                        <input type="text" id="company" value={companyName} onChange={this.companyNameChange} required />
                        <label htmlFor="companyAddress">Company Address</label>
                        <input type="text" id="companyAddress" value={companyAddress} onChange={this.companyAddressChange} required />
                        <label htmlFor="companyPassword">Password</label>
                        <input type="password" id="companyPassword" value={companyPassword} onChange={this.companyPasswordChange} required />
                        <label htmlFor="ccompanyPassword">Confirm Password</label>
                        <input type="password" id="ccompanyPassword" value={ccompanyPassword} onChange={this.ccompanyPasswordChange} required />
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

export default Company
