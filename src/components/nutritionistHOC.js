import React, { Component } from 'react'
import Mothercomp from './mothercomp.js'

const NutritionistHOC = (WrappedComponent) => {

    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                nutritionist: [
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


        }
        render() {
            return (
                <>
                {
                this.state.company.map((person, index) => {
                    const { username, firstname, surname,gender, hospital,licenseNum, country, address, password, email, number } = person;
                    console.log(username)
                    return (<WrappedComponent key={index}

                    nutritionistEmail={email} nutritionistNumber={number} nutritionistFirstname={firstname} nutritionistLastname={surname} nutritionistGender={gender} nutritionistHospital={hospital}
                    nutritionistLicenseId={licenseNum} nutritionistCountry={country} nutritionistAddress={address} nutritionistPassword={password}

                        {...this.props}
                    />
                    )
                })
            }
            <Mothercomp nutritionist = {this.state.nutritionist} />
            </>
            )
        }
    }

    return NewComponent;
}
export default NutritionistHOC;
