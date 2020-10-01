import React, { Component } from 'react'
import Mothercomp from './mothercomp.js'

const PharmacyHOC = (WrappedComponent) => {

    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                pharmacy: [
                    {
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
                ]
            }

            this.pharmacyNameChange = this.pharmacyNameChange.bind(this);
            this.pharmacyFirstnameChange = this.pharmacyFirstnameChange.bind(this);
            this.pharmacyLastnameChange = this.pharmacyLastnameChange.bind(this);
            this.pharmacyEmailChange = this.pharmacyEmailChange.bind(this);
            this.pharmacyNumberChange = this.pharmacyNumberChange.bind(this);
            this.pharmacyCountryChange = this.pharmacyCountryChange.bind(this);
            this.pharmacyAddressChange = this.pharmacyAddressChange.bind(this);
            this.pharmacyPasswordChange = this.pharmacyPasswordChange.bind(this);


        }
        
        pharmarcyFirstnameChange(e) {
            this.setState({
                firstname: e.target.value,
            })
        }
        pharmarcyLastnameChange(e) {
            this.setState({
                surname: e.target.value,
            })
        }
        pharmarcyNameChange(e) {
            this.setState({
                username: e.target.value,
            })
        }
        pharmarcyEmailChange(e) {
            this.setState({
                email: e.target.value,
            })
        }
        pharmarcyPasswordChange(e) {
            this.setState({
                password: e.target.value,
            })
        }
        cpharmarcyPasswordChange(e) {
            this.setState({
                cpassword: e.target.value,
            })
        }
        pharmarcyNumberChange(e) {
            this.setState({
                tel: e.target.value,
            })
        }
        pharmarcyCountryChange(e) {
            this.setState({
                country: e.target.value,
            })
        }
        pharmarcyAddressChange(e) {
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
            
            return (
               <>
               {
                this.state.pharmacy.map((person, index) => {
                    const { username, firstname, surname, country, address, password, email, number } = person;
                    console.log(username)
                    return (<WrappedComponent key={index}

                        pharmacyName={username} pharmacyEmail={email} pharmacyNumber={number} pharmacyFirstname={firstname} pharmacyLastname={surname} pharmacyCountry={country}
                        pharmacyAddress={address} pharmacyPassword={password}

                        pharmacyNameChange={this.pharmacyNameChange} pharmacyEmailChange={this.pharmacyEmailChange} pharmacyNumberChange={this.pharmacyNumberChange} pharmacyFirstnameChange={this.pharmacyFirstnameChange} pharmacyLastnameChange={this.pharmacyLastnameChange} pharmacyCountryChange={this.pharmacyCountryChange}
                        pharmacyAddressChange={this.pharmacyAddressChange} pharmacyPasswordChange={this.pharmacyPasswordChange}

                        formSubmitted = {this.formSubmitted}
                        {...this.props}
                    />
                    )
                })
            }
            <Mothercomp pharmacy={this.state.pharmacy} />
            </>
            )
        }
    }

    return NewComponent;
}
export default PharmacyHOC;
