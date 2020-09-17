// NOTE
// the company/pharmacy name is the username for companies or pharmacies
// so when referring to state use this.state.username as the organization name, pharmacy name or hospital name
// refer to mothercomp.js for the state object


import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
import UpdatedComponent from "../components/mothercomp.js"
class Company extends Component {
    formSubmitted = (event) => {
        console.log("logged in");
        const { history } = this.props;
        alert(`Welcome to Nutriture ${this.state.firstname}`);
        history.push('/profile/company');
        event.preventDefault()
    }
    render() {
        const { username, firstname, surname, email, number, address, country, password, cpassword } = this.props;
        const { usernameChange, nameChange, surnameChange, emailChange, numberChange, addressChange, countryChange, passwordChange, cpasswordChange } = this.props;

        return (
            <div id="login">
                <Link to="/"><img src={Logo} alt="nutriture logo" className="logo" /></Link>
                <div className="userlogin">
                    <h1 id="heading">Register as a Company</h1>
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
                        <span><label htmlFor="country">Country</label>
                            <input type="text" id="country" value={country} onChange={countryChange} required />
                        </span>
                        <span><label htmlFor="number">Phone Number</label>
                            <input type="tel" id="number" value={number} onChange={numberChange} required />
                        </span>
                        <label htmlFor="company">Company Name</label>
                        <input type="text" id="company" value={username} onChange={usernameChange} required />
                        <label htmlFor="address">Company Address</label>
                        <input type="text" id="address" value={address} onChange={addressChange} required />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={passwordChange} required />
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" id="cpassword" value={cpassword} onChange={cpasswordChange} required />
                        <input type="checkbox" id="agree" />
                        <label htmlFor="agree" className="agree">By signing up, you agree to our <span>terms of service</span></label>
                        <button type="submit">Sign Up</button><br />
                    </form>
                </div>
                <img src={Vector} alt="vector" className="vector" />
            </div>
        )
    }
}

export default UpdatedComponent(Company)
