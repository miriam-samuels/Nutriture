import React, { Component } from 'react'


const NutritionistHOC = (WrappedComponent) => {

    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
  
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
        }
        nutritionistFirstnameChange = (e) => {
            this.setState({
                firstname: e.target.value,
            })
        }
        nutritionistLastnameChange = (e) => {
            this.setState({
                surname: e.target.value,
            })
        }
        nutritionistEmailChange = (e) => {
            this.setState({
                email: e.target.value,
            })
        }
        nutritionistPasswordChange = (e) => {
            this.setState({
                password: e.target.value,
            })
        }
        cnutritionistPasswordChange = (e) => {
            this.setState({
                cpassword: e.target.value,
            })
        }
        nutritionistNumberChange = (e) => {
            this.setState({
                tel: e.target.value,
            })
        }
        nutritionistCountryChange = (e) => {
            this.setState({
                country: e.target.value,
            })
        }
        nutritionistLicenseIdChange = (e) => {
            this.setState({
                licenseNum: e.target.value,
            })
        }
        nutritionistGenderChange = (e) => {
            this.setState({
                gender: e.target.value,
            })
        }
        nutritionistHospitalChange = (e) => {
            this.setState({
                hospital: e.target.value,
            })
        }
        nutritionistAddressChange = (e) => {
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
            const { firstname, surname, gender, hospital, licenseNum, country, address, password, cpassword, email, number } = this.state;
            return (
                <WrappedComponent

                    nutritionistEmail={email} nutritionistNumber={number} nutritionistFirstname={firstname} nutritionistLastname={surname} nutritionistGender={gender} nutritionistHospital={hospital}
                    nutritionistLicenseId={licenseNum} nutritionistCountry={country} nutritionistAddress={address} nutritionistPassword={password} cnutritionistPassword={cpassword}

                    nutritionistEmailChange={this.nutritionistEmailChange} nutritionistrNumberChange={this.nutritionistNumberChange} nutritionistFirstnameChange={this.nutritionistFirstnameChange} nutritionistLastnameChange={this.nutritionistLastnameChange} nutritionistGenderChange={this.nutritionistGenderChange} nutritionistHospitalChange={this.nutritionistHospitalChange}
                    nutritionistLicenseIdChange={this.nutritionistLicenseIdChange} nutritionistCountryChange={this.nutritionistCountryChange} nutritionistAddressChange={this.nutritionistAddressChange} nutritionistPasswordChange={this.nutritionistPasswordChange} cnutritionistPasswordChange={this.cnutritionistPasswordChange}

                    formSubmitted={this.formSubmitted}
                    {...this.props}
                />
            )

        }
    }

    return NewComponent;
}
export default NutritionistHOC;
