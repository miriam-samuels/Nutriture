import React, { Component } from 'react'

const DoctorHOC = (WrappedComponent) => {

    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                doctor:
                    {
                        firstname: "jxxx",
                        surname: "dxx",
                        email: "xxxxx@gmail.com ",
                        number: "  xxx-xxx-xxx-xxx",
                        gender: "Female",
                        hospital: "",
                        country: "",
                        licenseNum: 0,
                        address: "",
                        password: "",
                        cpassword: "",
                    }
           }   }

        doctorFirstnameChange = (e) => {
            this.setState({
                firstname: e.target.value,
            })
        }
        doctorLastnameChange = (e) => {
            this.setState({
                surname: e.target.value,
            })
        }
        doctorEmailChange = (e) => {
            this.setState({
                email: e.target.value,
            })
        }
        doctorPasswordChange = (e) => {
            this.setState({
                password: e.target.value,
            })
        }
        cdoctorPasswordChange = (e) => {
            this.setState({
                cpassword: e.target.value,
            })
        }
        doctorNumberChange = (e) => {
            this.setState({
                tel: e.target.value,
            })
        }
        doctorCountryChange = (e) => {
            this.setState({
                country: e.target.value,
            })
        }
        doctorLicenseIdChange = (e) => {
            this.setState({
                licenseNum: e.target.value,
            })
        }
        doctorGenderChange = (e) => {
            this.setState({
                gender: e.target.value,
            })
        }
        doctorHospitalChange = (e) => {
            this.setState({
                hospital: e.target.value,
            })
        }
        doctorAddressChange = (e) => {
            this.setState({
                address: e.target.value,
            })
        }
        formSubmitted = (event) => {
            const { history } = this.props;
            history.push('/profile/doctor');
            event.preventDefault()
        }
        render() {
            const {firstname, surname, gender, hospital, licenseNum, country, address, password,cpassword, email, number } = this.state.doctor;
            return (
                    <WrappedComponent

                                doctorEmail={email} doctorNumber={number} doctorFirstname={firstname} doctorLastname={surname} doctorGender={gender} doctorHospital={hospital}
                                doctorLicenseId={licenseNum} doctorCountry={country} doctorAddress={address} doctorPassword={password} cdoctorPassword={cpassword}

                                doctorEmailChange={this.doctorEmailChange} doctorNumberChange={this.doctorNumberChange} doctorFirstnameChange={this.doctorFirstnameChange} doctorLastnameChange={this.doctorLastnameChange} doctorGenderChange={this.doctorGenderChange} doctorHospitalChange={this.doctorHospitalChange}
                                doctorLicenseIdChange={this.doctorLicenseIdChange} doctorCountryChange={this.doctorCountryChange} doctorAddressChange={this.doctorAddressChange} doctorPasswordChange={this.doctorPasswordChange} cdoctorPasswordChange={this.cdoctorPasswordChange}
                       
                                formSubmitted = {this.formSubmitted}
                                {...this.props}
                            />
                            )
                      
                    }
        
    }

    return NewComponent;
}
export default DoctorHOC;
