import React, { Component } from 'react'


const PatientHOC = (WrappedComponent) => {

    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                patient: 
                    {
                        email: "xxxxx@gmail.com ",
                        number: "  xxx-xxx-xxx-xxx",
                        username: "xxxxxxx xxxx",
                        genotype: "AA",
                        bloodgroup: "O+",
                        height: "cm",
                        weight: "kg",
                        password: "",
                        cpassword: "",
                    }
               
            }

        }


        patientUsernameChange = (e) => {
            this.setState({
                username: e.target.value,
            })
        }
        patientEmailChange = (e) => {
            this.setState({
                email: e.target.value,
            })
        }
        patientPasswordChange = (e) => {
            this.setState({
                password: e.target.value,
            })
        }
        cpatientPasswordChange = (e) => {
            this.setState({
                cpassword: e.target.value,
            })
        }
        patientNumberChange = (e) => {
            this.setState({
                tel: e.target.value,
            })
        }
        patientGenotypeChange = (e) => {
            this.setState({
                genotype: e.target.value,
            })
        }
        patientBloodgroupChange = (e) => {
            this.setState({
                bloodgroup: e.target.value,
            })
        }
        patientWeightChange = (e) => {
            this.setState({
                weight: e.target.value,
            })
        }
        patientHeightChange = (e) => {
            this.setState({
                height: e.target.value,
            })
        }
        formSubmitted = (event) => {
            const { history } = this.props;
            history.push('/profile/patient');
            event.preventDefault()
        }
        render() {
            const { username, bloodgroup, genotype, height, weight, password,cpassword ,email, number } = this.state.patient;
            return (
<WrappedComponent 

                                patientEmail={email} patientNumber={number} patientUsername={username} patientGenotype={genotype} patientBloodgroup={bloodgroup}
                                patientHeight={height} patientWeight={weight} patientPassword={password} cpatientPassword={cpassword}

                                patientEmailChange={this.patientEmailChange} patientNumberChange={this.patientNumberChange} patientUsernameChange={this.patientUsernameChange} patientGenotypeChange={this.patientGenotypeChange} patientBloodgroupChange={this.patientBloodgroupChange}
                                patientHeightChange={this.patientHeightChange} patientWeightChange={this.patientWeightChange} patientPasswordChange={this.patientPasswordChange} cpatientPasswordChange={this.cpatientPasswordChange}
                                
                                formSubmitted = {this.formSubmitted}
                                {...this.props}
                            />
                            )
   
        }
    }
    return NewComponent;
}
export default PatientHOC
