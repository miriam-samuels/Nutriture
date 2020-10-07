import React, { Component } from 'react'


const PharmacyHOC = (WrappedComponent) => {

    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                pharmacy: 
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
            history.push('/profile/company');
            event.preventDefault()
        }
        render() {
            
            const { username, firstname, surname, country, address, password, email, number } = this.state.pharmacy;
            return (
  <WrappedComponent 

                        pharmacyName={username} pharmacyEmail={email} pharmacyNumber={number} pharmacyFirstname={firstname} pharmacyLastname={surname} pharmacyCountry={country}
                        pharmacyAddress={address} pharmacyPassword={password}

                        pharmacyNameChange={this.pharmacyNameChange} pharmacyEmailChange={this.pharmacyEmailChange} pharmacyNumberChange={this.pharmacyNumberChange} pharmacyFirstnameChange={this.pharmacyFirstnameChange} pharmacyLastnameChange={this.pharmacyLastnameChange} pharmacyCountryChange={this.pharmacyCountryChange}
                        pharmacyAddressChange={this.pharmacyAddressChange} pharmacyPasswordChange={this.pharmacyPasswordChange}

                        formSubmitted = {this.formSubmitted}
                        {...this.props}
                    />
                    )

        }
    }

    return NewComponent;
}
export default PharmacyHOC;
