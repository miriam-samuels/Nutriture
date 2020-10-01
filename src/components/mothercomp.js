import React, { Component } from 'react'
// import Company from './companyHOC'


class mothercomp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patient: this.props.patient,
            doctor: this.props.doctor,
            nutritionist: this.props.nutritionist,
            pharmacy: this.props.pharmacy,
            company: this.props.company,

        }
    }

    render() {

        console.log(this.state)
        return (
            <div>
            </div>
        )
    }
}

export default mothercomp
