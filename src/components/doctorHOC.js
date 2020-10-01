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


        }
        render() {
            return (
                
                <>
                {
                this.state.doctor.map((person, index) => {
                    const { username, firstname, surname,gender, hospital,licenseNum, country, address, password, email, number } = person;
                    console.log(username)
                    return (<WrappedComponent key={index}

                    doctorEmail={email} doctorNumber={number} doctorFirstname={firstname} doctorLastname={surname} doctorGender={gender} doctorHospital={hospital}
                    doctorLicenseId={licenseNum} doctorCountry={country} doctorAddress={address} doctorPassword={password}

                        {...this.props}
                    />
                    )
                })
            }
            <Mothercomp doctor = {this.state.doctor} />
                </>
            )
        }
    }

    return NewComponent;
}
export default DoctorHOC;
