import React, { Component } from 'react'

const CompanyHOC = (WrappedComponent) => {

    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                company: 
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
            const { username, firstname, surname, country, address, password,cpassword, email, number } = this.state.company;
            return (
                            <WrappedComponent 

                        companyName={username} companyEmail={email} companyNumber={number} companyFirstname={firstname} companyLastname={surname} 
                        companyCountry={country} companyAddress={address} companyPassword={password} ccompanyPassword={cpassword}

                        companyNameChange={this.companyNameChange} companyEmailChange={this.companyEmailChange} companyNumberChange={this.companyNumberChange} companyFirstnameChange={this.companyFirstnameChange} 
                        companyLastnameChange={this.companyLastnameChange} companyCountryChange={this.companyCountryChange} companyAddressChange={this.companyAddressChange} companyPasswordChange={this.companyPasswordChange} ccompanyPasswordChange={this.ccompanyPasswordChange}

                        formSubmitted = {this.formSubmitted}
                        {...this.props}
                    />
                    )
                }
       
        }

    return NewComponent;
}
export default CompanyHOC;
