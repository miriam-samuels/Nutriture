import React, { Component } from 'react'
import Mothercomp from './mothercomp'
import CompanyProfile from '../profile/companyProfile'
import CompanyLogin from '../auth/company'


class CompanyHOC extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        // this.companyNameChange = this.companyNameChange.bind(this);
        // this.companyFirstnameChange = this.companyFirstnameChange.bind(this);
        // this.companyLastnameChange = this.companyLastnameChange.bind(this);
        // this.companyEmailChange = this.companyEmailChange.bind(this);
        // this.companyNumberChange = this.companyNumberChange.bind(this);
        // this.companyCountryChange = this.companyCountryChange.bind(this);
        // this.companyAddressChange = this.companyAddressChange.bind(this);
        // this.companyPasswordChange = this.companyPasswordChange.bind(this);


    }
    render() {
        let company = [
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

        return (
            <>
                {
                    company.map((person, index) => {
                        const { username, firstname, surname, country, address, password, email, number } = person;
                        console.log(company)
                        return (
                            <CompanyProfile key={index}

                                companyName={username} companyEmail={email} companyNumber={number} companyFirstname={firstname} companyLastname={surname} companyCountry={country}
                                companyAddress={address} companyPassword={password}

                                // companyNameChange={this.companyNameChange} companyEmailChange={this.companyEmailChange} companyNumberChange={this.companyNumberChange} companyFirstnameChange={this.companyFirstnameChange} companyLastnameChange={this.companyLastnameChange} companyCountryChange={this.companyCountryChange}
                                // companyAddressChange={this.companyAddressChange} companyPasswordChange={this.companyPasswordChange}

                                {...this.props}
                            />
                        )
                    })
                }
                {
                    company.map((person, index) => {
                        const { username, firstname, surname, country, address, password, email, number } = person;
                        console.log(company)
                        return (
                            <CompanyLogin key={index}

                                companyName={username} companyEmail={email} companyNumber={number} companyFirstname={firstname} companyLastname={surname} companyCountry={country}
                                companyAddress={address} companyPassword={password}

                                companyNameChange={this.companyNameChange} companyEmailChange={this.companyEmailChange} companyNumberChange={this.companyNumberChange} companyFirstnameChange={this.companyFirstnameChange} companyLastnameChange={this.companyLastnameChange} companyCountryChange={this.companyCountryChange}
                                companyAddressChange={this.companyAddressChange} companyPasswordChange={this.companyPasswordChange}

                                {...this.props}
                            />
                        )
                    })
                }
                <Mothercomp company={company} />
            </>
        )
    }

}
export default CompanyHOC;



// import React, { Component } from 'react'
// const UpdatedComponent = (WrappedComponent) => {

//     class NewComponent extends Component {
//         constructor(props) {
//             super(props)

        
//             this.state = {
//                 patient: [
//                     {
//                         email: "xxxxx@gmail.com ",
//                         number: "  xxx-xxx-xxx-xxx",
//                         username: "xxxxxxx xxxx",
//                         genotype: "AA",
//                         bloodgroup: "O+",
//                         height: "cm",
//                         weight: "kg",
//                         password: "",
//                         cpassword: "",
//                     }
//                 ],
//                 doctor: [
//                     {
//                         firstname: "jxxx",
//                         surname: "dxx",
//                         email: "xxxxx@gmail.com ",
//                         number: "  xxx-xxx-xxx-xxx",
//                         gender: "Female",
//                         hospital: "",
//                         country: "",
//                         licenseNum: 0,
//                         address: "",
//                         password: "",
//                         cpassword: "",
//                     }
//                 ],
//                 nutritionist: [
//                     {
//                         firstname: "jxxx",
//                         surname: "dxx",
//                         email: "xxxxx@gmail.com ",
//                         number: "  xxx-xxx-xxx-xxx",
//                         gender: "Female",
//                         hospital: "",
//                         country: "",
//                         licenseNum: 0,
//                         address: "",
//                         password: "",
//                         cpassword: "",
//                     }
//                 ],
//                 pharmacy: [
//                     {
//                         username: "xxxxxxx xxxx",
//                         firstname: "jxxx",
//                         surname: "dxx",
//                         email: "xxxxx@gmail.com ",
//                         number: "  xxx-xxx-xxx-xxx",
//                         country: "",
//                         address: "",
//                         password: "",
//                         cpassword: "",
//                     }
//                 ],
//                 company: [
//                     {
//                         username: "xxxxxxx xxxx",
//                         firstname: "jxxx",
//                         surname: "dxx",
//                         email: "xxxxx@gmail.com ",
//                         number: "  xxx-xxx-xxx-xxx",
//                         country: "",
//                         address: "",
//                         password: "",
//                         cpassword: "",
//                     }
//                 ],

//             }
//         }

// //             // this.pharmacyNameChange = this.pharmacyNameChange.bind(this);
// //             // this.pharmacyFirstnameChange = this.pharmacyFirstnameChange.bind(this);
// //             // this.pharmacyLastnameChange = this.pharmacyLastnameChange.bind(this);
// //             // this.pharmacyEmailChange = this.pharmacyEmailChange.bind(this);
// //             // this.pharmacyNumberChange = this.pharmacyNumberChange.bind(this);
// //             // this.pharmacyCountryChange = this.pharmacyCountryChange.bind(this);
// //             // this.pharmacyAddressChange = this.pharmacyAddressChange.bind(this);
// //             // this.pharmacyPasswordChange = this.pharmacyPasswordChange.bind(this);

// //             // this.companyNameChange = this.companyNameChange.bind(this);
// //             // this.companyFirstnameChange = this.companyFirstnameChange.bind(this);
// //             // this.companyLastnameChange = this.companyLastnameChange.bind(this);
// //             // this.companyEmailChange = this.companyEmailChange.bind(this);
// //             // this.companyNumberChange = this.companyNumberChange.bind(this);
// //             // this.companyCountryChange = this.companyCountryChange.bind(this);
// //             // this.companyAddressChange = this.companyAddressChange.bind(this);
// //             // this.companyPasswordChange = this.companyPasswordChange.bind(this);


       



// //         // companyNameChange (e) {
// //         //     this.setState
// //         // }
// //         // nameChange(e) {
// //         //     this.setState({
// //         //         firstname: e.target.value,
// //         //     })
// //         // }
// //         // surnameChange(e) {
// //         //     this.setState({
// //         //         surname: e.target.value,
// //         //     })
// //         // }
// //         // usernameChange(e) {
// //         //     this.setState({
// //         //         patient: e.target.value,
// //         //     })
// //         // }
// //         // emailChange(e) {
// //         //     this.setState({
// //         //         email: e.target.value,
// //         //     })
// //         // }
// //         // passwordChange(e) {
// //         //     this.setState({
// //         //         password: e.target.value,
// //         //     })
// //         // }
// //         // cpasswordChange(e) {
// //         //     this.setState({
// //         //         cpassword: e.target.value,
// //         //     })
// //         // }
// //         // numberChange(e) {
// //         //     this.setState({
// //         //         tel: e.target.value,
// //         //     })
// //         // }
// //         // countryChange(e) {
// //         //     this.setState({
// //         //         country: e.target.value,
// //         //     })
// //         // }
// //         // licenseNumChange(e) {
// //         //     this.setState({
// //         //         licenseNum: e.target.value,
// //         //     })
// //         // }
// //         // genderChange(e) {
// //         //     this.setState({
// //         //         gender: e.target.value,
// //         //     })
// //         // }
// //         // genotypeChange(e) {
// //         //     this.setState({
// //         //         genotype: e.target.value,
// //         //     })
// //         // }
// //         // bloodgroupChange(e) {
// //         //     this.setState({
// //         //         bloodgroup: e.target.value,
// //         //     })
// //         // }
// //         // weightChange(e) {
// //         //     this.setState({
// //         //         weight: e.target.value,
// //         //     })
// //         // }
// //         // heightChange(e) {
// //         //     this.setState({
// //         //         height: e.target.value,
// //         //     })
// //         // }
// //         // hospitalChange(e) {
// //         //     this.setState({
// //         //         hospital: e.target.value,
// //         //     })
// //         // }
// //         // addressChange(e) {
// //         //     this.setState({
// //         //         address: e.target.value,
// //         //     })
// //         // }

// render() {
//     return (
//         this.state.company.map((person, index) => {
//             const { username, firstname, surname, country, address, password, email, number } = person;
//             console.log(username)
//             return (<WrappedComponent key={index}

//                 companyName={username} companyEmail={email} companyNumber={number} companyFirstname={firstname} companyLastname={surname} companyCountry={country}
//                 companyAddress={address} companyPassword={password}



//                 {...this.props}
//             />
//             )
//         })
//     )
// }
// }
// //         render() {
// //             const { patient, doctor, nutritionist, pharmacy, company } = this.state;
// //             // const { username, genotype, bloodgroup, weight, height, firstname, surname, licenseNum, gender, hospital, country, address, password, cpassword, email, number } = this.state;

// //             return (
// //                 <WrappedComponent


// //                     patientEmail={patient.email} patientNumber={patient.number} patientUsername={patient.username} patientGenotype={patient.genotype} patientBloodgroup={patient.bloodgroup}
// //                     patientHeight={patient.height} patientWeight={patient.weight} patientPassword={patient.password}

// //                     patientEmailChange={this.patientEmailChange} patientNumberChange={this.patientNumberChange} patientUsernameChange={this.patientUsernameChange} patientGenotypeChange={this.patientGenotypeChange} patientBloodgroupChange={this.patientBloodgroupChange}
// //                     patientHeightChange={this.patientHeightChange} patientWeightChange={this.patientWeightChange} patientPasswordChange={this.patientPasswordChange}

// //                     doctorEmail={doctor.email} doctorNumber={doctor.number} doctorFirstname={doctor.firstname} doctorLastname={doctor.surname} doctorGender={doctor.gender} doctorHospital={doctor.hospital}
// //                     doctorLicenseId={doctor.licenseNum} doctorCountry={doctor.country} doctorAddress={doctor.address} doctorPassword={doctor.password}

// //                     doctorEmailChange={this.doctorEmailChange} doctorNumberChange={this.doctorNumberChange} doctorFirstnameChange={this.doctorFirstnameChange} doctorLastnameChange={this.doctorLastnameChange} doctorGenderChange={this.doctorGenderChange} doctorHospitalChange={this.doctorHospitalChange}
// //                     doctorLicenseIdChange={this.doctorLicenseIdChange} doctorCountryChange={this.doctorCountryChange} doctorAddressChange={this.doctorAddressChange} doctorPasswordChange={this.doctorPasswordChange}

// //                     nutritionistEmail={nutritionist.email} nutritionistNumber={nutritionist.number} nutritionistFirstname={nutritionist.firstname} nutritionistLastname={nutritionist.surname} nutritionistGender={nutritionist.gender} nutritionistHospital={nutritionist.hospital}
// //                     nutritionistLicenseId={nutritionist.licenseNum} nutritionistCountry={nutritionist.country} nutritionistAddress={nutritionist.address} nutritionistPassword={nutritionist.password}

// //                     nutritionistEmailChange={this.nutritionistEmailChange} nutritionistrNumberChange={this.nutritionistNumberChange} nutritionistFirstnameChange={this.nutritionistFirstnameChange} nutritionistLastnameChange={this.nutritionistLastnameChange} nutritionistGenderChange={this.nutritionistGenderChange} nutritionistHospitalChange={this.nutritionistHospitalChange}
// //                     nutritionistLicenseIdChange={this.nutritionistLicenseIdChange} nutritionistCountryChange={this.nutritionistCountryChange} nutritionistAddressChange={this.nutritionistAddressChange} nutritionistPasswordChange={this.nutritionistPasswordChange}

// //                     pharmacyName={pharmacy.username} pharmacyEmail={pharmacy.email} pharmacyNumber={pharmacy.number} pharmacyFirstname={pharmacy.firstname} pharmacyLastname={pharmacy.surname} pharmacyCountry={pharmacy.country}
// //                     pharmacyAddress={pharmacy.address} pharmacyPassword={pharmacy.password}

// //                     pharmacyNameChange={this.pharmacyNameChange} pharmacyEmailChange={this.pharmacyEmailChange} pharmacyNumberChange={this.pharmacyNumberChange} pharmacyFirstnameChange={this.pharmacyFirstnameChange} pharmacyLastnameChange={this.pharmacyLastnameChange} pharmacyCountryChange={this.pharmacyCountryChange}
// //                     pharmacyAddressChange={this.pharmacyAddressChange} pharmacyPasswordChange={this.pharmacyPasswordChange}

// //                     companyName={company.username} companyEmail={company.email} companyNumber={company.number} companyFirstname={company.firstname} companyLastname={company.surname} companyCountry={company.country}
// //                     companyAddress={company.address} companyPassword={company.password}

// //                     companyNameChange={this.companyNameChange} companyEmailChange={this.companyEmailChange} companyNumberChange={this.companyNumberChange} companyFirstnameChange={this.companyFirstnameChange} companyLastnameChange={this.companyLastnameChange} companyCountryChange={this.companyCountryChange}
// //                     companyAddressChange={this.companyAddressChange} companyPasswordChange={this.companyPasswordChange}

// //                     // firstname={firstname} nameChange={this.nameChange}
// //                     // surname={surname} surnameChange={this.surnameChange}
// //                     // username={username} usernameChange={this.usernameChange}
// //                     // email={email} emailChange={this.emailChange}
// //                     // password={password} passwordChange={this.passwordChange}
// //                     // cpassword={cpassword} cpasswordChange={this.cpasswordChange}
// //                     // number={number} numberChange={this.numberChange}
// //                     // country={country} countryChange={this.countryChange}
// //                     // licenseNum={licenseNum} licenseNumChange={this.licenseNumChange}
// //                     // gender={gender} genderChange={this.genderChange}
// //                     // genotype={genotype} genotypeChange={this.genotypeChange}
// //                     // bloodgroup={bloodgroup} bloodgroupChange={this.bloodgroupChange}
// //                     // weight={weight} weightChange={this.weightChange}
// //                     // height={height} heightChange={this.heightChange}
// //                     // hospital={hospital} hospitalChange={this.hospitalChange}
// //                     // address={address} addressChange={this.addressChange}
// //                     // formSubmitted={this.formSubmitted}

// //                     {...this.props}
// //                 />
// //             )
// //         }
// //     }

// //     return NewComponent;
// // }
// export default UpdatedComponent;
