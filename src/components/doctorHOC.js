import React, { Component } from 'react'
import Mothercomp from './mothercomp.js'

const DoctorHOC = (WrappedComponent) => {

    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                doctor: [
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
                ],
            }
            this.doctorFirstnameChange = this.doctorFirstnameChange.bind(this);
            this.doctorLastnameChange = this.doctorLastnameChange.bind(this);
            this.doctorEmailChange = this.doctorEmailChange.bind(this);
            this.doctorNumberChange = this.doctorNumberChange.bind(this);
            this.doctorCountryChange = this.doctorCountryChange.bind(this);
            this.doctorGenderChange = this.doctorGenderChange.bind(this);
            this.doctorLicenseIdChange = this.doctorLicenseIdChange.bind(this);
            this.doctorHospitalChange = this.doctorHospitalChange.bind(this);
            this.doctorAddressChange = this.doctorAddressChange.bind(this);
            this.doctorPasswordChange = this.doctorPasswordChange.bind(this);
            this.cdoctorPasswordChange = this.cdoctorPasswordChange.bind(this);
        }

        doctorFirstnameChange(e) {
            this.setState({
                firstname: e.target.value,
            })
        }
        doctorLastnameChange(e) {
            this.setState({
                surname: e.target.value,
            })
        }
        doctorEmailChange(e) {
            this.setState({
                email: e.target.value,
            })
        }
        doctorPasswordChange(e) {
            this.setState({
                password: e.target.value,
            })
        }
        cdoctorPasswordChange(e) {
            this.setState({
                cpassword: e.target.value,
            })
        }
        doctorNumberChange(e) {
            this.setState({
                tel: e.target.value,
            })
        }
        doctorCountryChange(e) {
            this.setState({
                country: e.target.value,
            })
        }
        doctorLicenseIdChange(e) {
            this.setState({
                licenseNum: e.target.value,
            })
        }
        doctorGenderChange(e) {
            this.setState({
                gender: e.target.value,
            })
        }
        doctorHospitalChange(e) {
            this.setState({
                hospital: e.target.value,
            })
        }
        doctorAddressChange(e) {
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
            return (

                <>
                    {
                        this.state.doctor.map((doctor, index) => {
                            const {firstname, surname, gender, hospital, licenseNum, country, address, password,cpassword, email, number } = doctor;
                            console.log(firstname)
                            return (<WrappedComponent key={index}

                                doctorEmail={email} doctorNumber={number} doctorFirstname={firstname} doctorLastname={surname} doctorGender={gender} doctorHospital={hospital}
                                doctorLicenseId={licenseNum} doctorCountry={country} doctorAddress={address} doctorPassword={password} cdoctorPassword={cpassword}

                                doctorEmailChange={this.doctorEmailChange} doctorNumberChange={this.doctorNumberChange} doctorFirstnameChange={this.doctorFirstnameChange} doctorLastnameChange={this.doctorLastnameChange} doctorGenderChange={this.doctorGenderChange} doctorHospitalChange={this.doctorHospitalChange}
                                doctorLicenseIdChange={this.doctorLicenseIdChange} doctorCountryChange={this.doctorCountryChange} doctorAddressChange={this.doctorAddressChange} doctorPasswordChange={this.doctorPasswordChange} cdoctorPasswordChange={this.cdoctorPasswordChange}
                       
                                formSubmitted = {this.formSubmitted}
                                {...this.props}
                            />
                            )
                        })
                    }
                    <Mothercomp doctor={this.state.doctor} />
                </>
            )
        }
    }

    return NewComponent;
}
export default DoctorHOC;
