import React, { Component } from 'react'
const UpdatedComponent = (WrappedComponent) => {

    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                firstname:"",
                surname:"",
                username:"xxxxxxx xxxx",
                email: "xxxxx@gmail.com ",
                number:"  xxx-xxx-xxx-xxx",
                gender: "Female",
                genotype:"AA",
                bloodgroup:"O+",
                height:"cm",
                weight:"kg",
                hospital:"",
                address:"",
                country:"",
                password:"",
                cpassword:"",
                
            }
        }
        nameChange = (e) => {
            this.setState({
                firstname: e.target.value,
            })
        }
        surnameChange = (e) => {
            this.setState({
                surname: e.target.value,
            })
        }
        usernameChange = (e) => {
            this.setState({
                username: e.target.value,
            })
        }
        emailChange = (e) => {
            this.setState({
                email: e.target.value,
            })
        }
        passwordChange = (e) => {
            this.setState({
                password: e.target.value,
            })
        }
        cpasswordChange = (e) => {
            this.setState({
                cpassword: e.target.value,
            })
        }
        numberChange = (e) => {
            this.setState({
                tel: e.target.value,
            })
        }
        countryChange = (e) => {
            this.setState({
                country: e.target.value,
            })
        }
        licenseNumChange = (e) => {
            this.setState({
                state: e.target.value,
            })
        }
        genderChange = (e) => {
            this.setState({
                gender: e.target.value,
            })
        }
        genotypeChange = (e) => {
            this.setState({
                genotype: e.target.value,
            })
        }
        bloodgroupChange = (e) => {
            this.setState({
                bloodgroup: e.target.value,
            })
        }
        weightChange = (e) => {
            this.setState({
                weight: e.target.value,
            })
        }
        heightChange = (e) => {
            this.setState({
                height: e.target.value,
            })
        }
        hospitalChange = (e) => {
            this.setState({
                hospital: e.target.value,
            })
        }
        formSubmitted = (event) => {
            console.log("logged in");
            const { history } = this.props;
            alert(`Welcome to Nutriture ${this.state.firstname}`);
            history.push('/profile');
            event.preventDefault()
        }
        render() {
            const { firstname, surname,username, email, password,cpassword, number, country, licenseNum, gender, genotype,bloodgroup, weight,height, hospital,address } = this.state;
            return (
                <WrappedComponent
                    firstname={firstname} nameChange={this.nameChange}
                    surname={surname} surnameChange={this.surnameChange}
                    username={username} usernameChange={this.usernameChange}
                    email={email} emailChange={this.emailChange}
                    password={password} passwordChange={this.passwordChange}
                    cpassword={cpassword} cpasswordChange={this.cpasswordChange}
                    number={number} numberChange={this.numberChange}
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
