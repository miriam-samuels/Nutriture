import React, { Component } from 'react'

export class Appintment extends Component {
    showDetails = (slideIndex) => {
        const bar = Array.from(document.getElementsByClassName("slide"));
        const slides = Array.from(document.getElementsByClassName("page"));

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            bar[i].style.color = "#D8D8D8";
        }
        slides[slideIndex].style.display = "block";
        bar[slideIndex].style.color = "#000";

    }
    render() {
        return (
            <>
                <div>
                    <input type="text" />
                    <nav>
                        <b onClick={() => this.showDetails(0)} className="slide">Make Appointment</b>
                        <b onClick={() => this.showDetails(1)} className="slide">View Appointment</b>
                    </nav>
                </div>
                <section className="mkAppointment page" >


                </section>
                <section className="vwAppointment page">
                    <div className="drName">

                    </div>
                    <div className="appointmentDate">

                    </div>
                    <div className="appointmentPurpose">

                    </div>

                </section>

            </>
        )
    }
}

export default Appintment
