import React, { Component } from 'react'
import Mothercomp from './mothercomp'
const CompanyHOC = (WrappedComponent) => {

    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                company: [
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

            this.companyNameChange = this.companyNameChange.bind(this);
            this.companyFirstnameChange = this.companyFirstnameChange.bind(this);
            this.companyLastnameChange = this.companyLastnameChange.bind(this);
            this.companyEmailChange = this.companyEmailChange.bind(this);
            this.companyNumberChange = this.companyNumberChange.bind(this);
            this.companyCountryChange = this.companyCountryChange.bind(this);
            this.companyAddressChange = this.companyAddressChange.bind(this);
            this.companyPasswordChange = this.companyPasswordChange.bind(this);

            // this.addUser = React.createRef();
        }

        companyFirstnameChange(e) {
            this.setState({
                firstname: e.target.value,
            })
        }
        companyLastnameChange(e) {
            this.setState({
                surname: e.target.value,
            })
        }
        companyNameChange(e) {
            this.setState({
                username: e.target.value,
            })
        }
        companyEmailChange(e) {
            this.setState({
                email: e.target.value,
            })
        }
        companyPasswordChange(e) {
            this.setState({
                password: e.target.value,
            })
        }
        ccompanyPasswordChange(e) {
            this.setState({
                cpassword: e.target.value,
            })
        }
        companyNumberChange(e) {
            this.setState({
                tel: e.target.value,
            })
        }
        companyCountryChange(e) {
            this.setState({
                country: e.target.value,
            })
        }
        companyAddressChange(e) {
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
                this.state.company.map((company, index) => {
                    const { username, firstname, surname, country, address, password,cpassword, email, number } = company;
                    console.log(username)
                    return (<WrappedComponent key={index}

                        companyName={username} companyEmail={email} companyNumber={number} companyFirstname={firstname} companyLastname={surname} 
                        companyCountry={country} companyAddress={address} companyPassword={password} ccompanyPassword={cpassword}

                        companyNameChange={this.companyNameChange} companyEmailChange={this.companyEmailChange} companyNumberChange={this.companyNumberChange} companyFirstnameChange={this.companyFirstnameChange} 
                        companyLastnameChange={this.companyLastnameChange} companyCountryChange={this.companyCountryChange} companyAddressChange={this.companyAddressChange} companyPasswordChange={this.companyPasswordChange} ccompanyPasswordChange={this.ccompanyPasswordChange}

                        formSubmitted = {this.formSubmitted}
                        {...this.props}
                    />
                    )
                })
            }
            <Mothercomp company = {this.state.company}/>
            </>
            )
        }
    }

    return NewComponent;
}
export default CompanyHOC;
