import React, { Component } from 'react'
const UpdatedComponent = (WrappedComponent) => {

    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                patient:[
                {
                    pemail: "xxxxx@gmail.com ",
                    username:"xxxxxxx xxxx",
                    pnumber:"  xxx-xxx-xxx-xxx",
                    genotype:"AA",
                    bloodgroup:"O+",
                    height:"cm",
                    weight:"kg",
                }
                ],
                doctor:[
                {
                    demail: "xxxxx@gmail.com ",
                    firstname:"",
                    surname:"",
                    dnumber:"  xxx-xxx-xxx-xxx",
                    gender: "Female",
                    hospital:"",
                    country:"",
                    licenseNum:0,
                }
                ],


                address:"",
                password:"",
                cpassword:"",
            }    
        }
        
        // nameChange = (e) => {
        //     this.setState({
        //         firstname: e.target.value,
        //     })
        // }
        // surnameChange = (e) => {
        //     this.setState({
        //         surname: e.target.value,
        //     })
        // }
        // usernameChange = (e) => {
        //     this.setState({
        //         patient: e.target.value,
        //     })
        // }
        // emailChange = (e) => {
        //     this.setState({
        //         email: e.target.value,
        //     })
        // }
        // passwordChange = (e) => {
        //     this.setState({
        //         password: e.target.value,
        //     })
        // }
        // cpasswordChange = (e) => {
        //     this.setState({
        //         cpassword: e.target.value,
        //     })
        // }
        // numberChange = (e) => {
        //     this.setState({
        //         tel: e.target.value,
        //     })
        // }
        // countryChange = (e) => {
        //     this.setState({
        //         country: e.target.value,
        //     })
        // }
        // licenseNumChange = (e) => {
        //     this.setState({
        //         state: e.target.value,
        //     })
        // }
        // genderChange = (e) => {
        //     this.setState({
        //         gender: e.target.value,
        //     })
        // }
        // genotypeChange = (e) => {
        //     this.setState({
        //         genotype: e.target.value,
        //     })
        // }
        // bloodgroupChange = (e) => {
        //     this.setState({
        //         bloodgroup: e.target.value,
        //     })
        // }
        // weightChange = (e) => {
        //     this.setState({
        //         weight: e.target.value,
        //     })
        // }
        // heightChange = (e) => {
        //     this.setState({
        //         height: e.target.value,
        //     })
        // }
        // hospitalChange = (e) => {
        //     this.setState({
        //         hospital: e.target.value,
        //     })
        // }

        render() {
            const {username, pemail, pnumber, genotype,bloodgroup, weight,height} = this.state.patient;
            const {firstname, surname, demail,licenseNum, gender, hospital, dnumber, country,address} = this.state.doctor;
            const {  password,cpassword, } = this.state;
            return (
                <WrappedComponent
                    firstname={firstname} nameChange={this.nameChange}
                    surname={surname} surnameChange={this.surnameChange}
                    username={username} usernameChange={this.usernameChange}
                    pemail={pemail} pemailChange={this.pemailChange}
                    demail={demail} demailChange={this.demailChange}
                    password={password} passwordChange={this.passwordChange}
                    cpassword={cpassword} cpasswordChange={this.cpasswordChange}
                    pnumber={pnumber} pnumberChange={this.pnumberChange}
                    dnumber={dnumber} dnumberChange={this.dnumberChange}
                    country={country} countryChange={this.countryChange}
                    licenseNum={licenseNum} licenseNumChange={this.licenseNumChange}
                    gender={gender} genderChange={this.genderChange}
                    genotype={genotype} genotypeChange={this.genotypeChange}
                    bloodgroup={bloodgroup} bloodgroupChange={this.bloodgroupChange}
                    weight={weight} weightChange={this.weightChange}
                    height={height} heightChange={this.heightChange}
                    hospital={hospital} hospitalChange={this.hospitalChange}
                    address={address} addressChange={this.addressChange}
                    formSubmitted={this.formSubmitted}

                    {...this.props}
                />
            )
        }
    }

    return NewComponent;
}
export default UpdatedComponent;
