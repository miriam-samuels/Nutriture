import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
import UpdatedComponent from "../components/mothercomp.js"


class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const { email, password } = this.props;
        const { emailChange, passwordChange, formSubmitted} = this.props;
        return (
            <div id="login">
            <Link to = "/"><img src={Logo} alt="nutriture logo" className="logo" /></Link>
                <div className="login">
                    <h1>Login to your account</h1>
                    <form onSubmit={formSubmitted}>
                        <input type="email" placeholder="Email" value={email} onChange={emailChange} required />
                        <input type="password" placeholder="Password" value={password} onChange={passwordChange} required />
                        <label className="forgot">Forgot Password ?</label><br/>
                        <button type="submit">Log In</button><br/>
                        <label>Don't have an account ? <span><Link to="/signup">Create account</Link></span></label>
                    </form>
                </div>
                <img src={Vector} alt="vector" className="vector" />
            </div>
        )
    }
}

export default UpdatedComponent(Login)
