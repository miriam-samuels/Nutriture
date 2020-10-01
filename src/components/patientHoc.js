import React, { Component } from 'react'
import Mothercomp from './mothercomp.js'

const PatientHOC = (WrappedComponent) => {

    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                patient: [
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
                ],
            }
            this.patientWeightChange = this.patientWeightChange.bind(this);
            this.patientHeightChange = this.patientHeightChange.bind(this);
            this.patientEmailChange = this.patientEmailChange.bind(this);
            this.patientNumberChange = this.patientNumberChange.bind(this);
            this.patientBloodgroupChange = this.patientBloodgroupChange.bind(this);
            this.patientUsernameChange = this.patientUsernameChange.bind(this);
            this.patientGenotypeChange = this.patientGenotypeChange.bind(this);
            this.patientPasswordChange = this.patientPasswordChange.bind(this);
            this.cpatientPasswordChange = this.cpatientPasswordChange.bind(this);
        }


        patientUsernameChange(e) {
            this.setState({
                username: e.target.value,
            })
        }
        patientEmailChange(e) {
            this.setState({
                email: e.target.value,
            })
        }
        patientPasswordChange(e) {
            this.setState({
                password: e.target.value,
            })
        }
        cpatientPasswordChange(e) {
            this.setState({
                cpassword: e.target.value,
            })
        }
        patientNumberChange(e) {
            this.setState({
                tel: e.target.value,
            })
        }
        patientGenotypeChange(e) {
            this.setState({
                genotype: e.target.value,
            })
        }
        patientBloodgroupChange(e) {
            this.setState({
                bloodgroup: e.target.value,
            })
        }
        patientWeightChange(e) {
            this.setState({
                weight: e.target.value,
            })
        }
        patientHeightChange(e) {
            this.setState({
                height: e.target.value,
            })
        }

        render() {
            return (
                <>
                    {
                        this.state.patient.map((person, index) => {
                            const { username, bloodgroup, genotype, height, weight, password,cpassword ,email, number } = person;
                            console.log(username)
                            return (<WrappedComponent key={index}

                                patientEmail={email} patientNumber={number} patientUsername={username} patientGenotype={genotype} patientBloodgroup={bloodgroup}
                                patientHeight={height} patientWeight={weight} patientPassword={password} cpatientPassword={cpassword}

                                patientEmailChange={this.patientEmailChange} patientNumberChange={this.patientNumberChange} patientUsernameChange={this.patientUsernameChange} patientGenotypeChange={this.patientGenotypeChange} patientBloodgroupChange={this.patientBloodgroupChange}
                                patientHeightChange={this.patientHeightChange} patientWeightChange={this.patientWeightChange} patientPasswordChange={this.patientPasswordChange} cpatientPasswordChange={this.cpatientPasswordChange}
                                {...this.props}
                            />
                            )
                        })
                    }
                    <Mothercomp patient={this.state.patient} />
                </>
            )
        }
    }
    return NewComponent;
}
export default PatientHOC
