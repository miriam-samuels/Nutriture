import React, { Component } from 'react'

class AccountTab extends Component {

    showDetails = (slideIndex) => {
        const bar = Array.from(document.querySelectorAll(" #userProfile .account .edit b"));
        const slides = Array.from(document.querySelectorAll("#userProfile .account .edit .details"));

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            bar[i].style.color = "#D8D8D8";
        }
        slides[slideIndex].style.display = "block";
        bar[slideIndex].style.color = "#000";

    }
    componentDidMount() {
        setTimeout(this.showDetails(0), 1);
    }
    render() {
        return (
            <>
                <b onClick={() => this.showDetails(0)}>Edit profile</b>
                <b onClick={() => this.showDetails(1)}>Upload Files</b>
                <b onClick={() => this.showDetails(2)}>Bank Detail</b>
                <b onClick={() => this.showDetails(3)}>Prescriptions</b>
            </>
        )
    }
}

export default AccountTab
