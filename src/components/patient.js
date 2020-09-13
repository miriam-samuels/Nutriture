import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
import UpdatedComponent from "../components/mothercomp.js"
class Patient extends Component {
    render() {
        const {formSubmitted,username,email,number,genotype,bloodgroup,height,weight,password,cpassword} = this.props;
        const {usernameChange,emailChange,numberChange,genotypeChange,bloodgroupChange,heightChange,weightChange,passwordChange,cpasswordChange} = this.props;
        return (
            <div id="login">
                <Link to = "/"><img src={Logo} alt="nutriture logo" className="logo" /></Link>
                <div className="userlogin">
                    <h1>Register as Patient</h1>
                    <p>Kindly fill in your details as requested</p>
                    <form onSubmit={formSubmitted}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={emailChange}  required />
                        <span><label htmlFor="username" >Username</label>
                        <input type="text" id="username" value={username} onChange={usernameChange} required />
                        </span>
                        <span><label htmlFor="number">Phone Number</label>
                        <input type="tel" id="number" value={number} onChange={numberChange} required />
                        </span>
                        <span><label htmlFor="genotype">Genotype</label>
                        <input type="text" id="genotype" value={genotype} onChange={genotypeChange} required />
                        </span>
                        <span><label htmlFor="bloodgroup">Blood Group</label>
                        <input type="text" id="bloodgroup" value={bloodgroup} onChange={bloodgroupChange} required />
                        </span>
                        <span><label htmlFor="height">Height</label>
                        <input type="text" id="height" value={height} onChange={heightChange} required />
                        </span>
                        <span><label htmlFor="weight">Weight</label>
                        <input type="text" id="weight" value={weight} onChange={weightChange} required />
                        </span>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={passwordChange} required />
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" id="cpassword" value={cpassword} onChange={cpasswordChange} required />
                        <br/><input type="checkbox" id="agree"/>
                        <label htmlFor="agree" className="agree">By signing up, you agree to our <span>terms of service</span></label>
                        <button type="submit">Sign Up</button><br/>
                    </form>
                </div>
                <img src={Vector} alt="vector" className="vector" />
            </div> 
        )
    }
}

export default UpdatedComponent(Patient)
