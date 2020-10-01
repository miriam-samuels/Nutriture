import React, { Component } from 'react'
import Mothercomp from './mothercomp.js'

const PatientHOC = (WrappedComponent) => {

    class NewComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
        patient : [
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
}

        
  
    render() {
        return (
            <>
            {
            this.state.patient.map((person, index) => {
                const { username, bloodgroup, genotype, height, weight, password, email, number } = person;
                console.log(username)
                return (<WrappedComponent key={index}

                    patientEmail={email} patientNumber={number} patientUsername={username} patientGenotype={genotype} patientBloodgroup={bloodgroup}
                     patientHeight={height} patientWeight={weight} patientPassword={password}

                    {...this.props}
                />
                )
            })
        }
        <Mothercomp patient = {this.state.patient} />
        </>
        )}
}
return NewComponent;
}
export default PatientHOC
