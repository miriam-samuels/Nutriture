import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/nutriturelogo.png';
import Vector from '../Images/vector.png'
// import UpdatedComponent from "../components/mothercomp.js"


class Login extends Component {

    formSubmitted = (event) => {
        const { history } = this.props;
        history.push('/profile/');
        event.preventDefault()
    }
    render() {

        const { formSubmitted } = this.props;
        return (
            <div id="login">
                <Link to="/"><img src={Logo} alt="nutriture logo" className="logo" /></Link>
                <div className="login">
                    <h1>Login to your account</h1>
                    <form onSubmit={formSubmitted}>
                        <input type="email" placeholder="Email"  required />
                        <input type="password" placeholder="Password"  required />
                        <label className="forgot">Forgot Password ?</label><br />
                        <button type="submit">Log In</button><br />
                        <label>Don't have an account ? <span><Link to="/signups">Create account</Link></span></label>
                    </form>
                </div>

                <img src={Vector} alt="vector" className="vector" />
            </div>
        )
    }
}

export default Login
