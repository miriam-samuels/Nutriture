import React, { Component } from 'react'
import Logo from '../Images/whitelogo.svg'
import Dashboard from '../Images/dashboard.svg';
import Consultation from '../Images/consultation.svg';
import Appointment from '../Images/appointment.svg';
import Payment from '../Images/payment.svg';
import Account from '../Images/account.svg';
import Setting from '../Images/settings.svg';
import Logout from '../Images/logout.svg';
import Notify from '../Images/notification.svg';
import Dropdown from '../Images/Dropdown.svg'

let n = 0;
class userProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
        }
    }


    show = () => {
        let click = document.querySelector("#userProfile .profileMenu");
        if (this.state.show === false) {
            click.style.display = "block";
            this.setState({
                show: true,
            });
        }
        else {
            click.style.display = "none";
            this.setState({
                show: false,
            })
        }
    }
    showSlides = (slideIndex) => {
        const bar = Array.from(document.querySelectorAll("   #userProfile .profileMenu div"));
        const slides = Array.from(document.querySelectorAll("  #userProfile .view"));

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            bar[i].style.color = "#000";
            bar[i].style.background = "#fff";
}
            slides[slideIndex].style.display = "block";
            bar[slideIndex].style.color = "#fff";
            bar[slideIndex].style.background = "#000";

    }
    componentDidMount() {
        setTimeout(this.showSlides(n), 1);
    }
    render() {
        return (
            <div>
                <section id="profileBar">
                    <img src={Logo} alt="logo" className="logo" />
                    <input type="text" placeholder="&#9906; Search" />
                    <div>
                        <span><img src={Notify} alt="." />notifications </span>
                        <span className="note">
                        <img src={Dashboard} alt="" className="userpic" />
                        <b>Username <br/> nutriture.email.com</b>
                        </span>
                    </div>
                </section>
                <img src={Dropdown} alt="." className="drpDwn" onClick={this.show} />
                <section id="userProfile">

                    <div className="profileMenu">
                        <div onClick={() => this.showSlides(0)}><img src={Dashboard} alt="." />Dashboard</div>
                        <div onClick={() => this.showSlides(1)}><img src={Consultation} alt="." />Consultation History</div>
                        <div onClick={() => this.showSlides(2)}><img src={Appointment} alt="." />Appointments</div>
                        <div onClick={() => this.showSlides(3)}><img src={Payment} alt="." />Payments</div>
                        <div onClick={() => this.showSlides(4)}><img src={Account} alt="." />Account</div>
                        <div onClick={() => this.showSlides(5)}><img src={Setting} alt="." />Settings</div>
                        <div onClick={() => this.showSlides(6)}><img src={Logout} alt="." />Log out</div>
                    </div>
                    {/* ------------------ */}
                    <div className="dash view">
                        <div className="availableDocs tab">
                            <b>Available Doctors</b>
                            <button>View all</button>
                        </div>

                        <div className="consultations tab">
                            <b>Consultation History</b>
                            <div className="docVisited">
                                <b>Doctor visited</b>

                            </div>
                            <div className="activity">
                                <b>Activity Done</b>

                            </div>
                            <div className="prescription">
                                <b>Prescription Made</b>

                            </div>
                            <button onClick={() => this.showSlides(1)}>View all</button>
                        </div>

                        <div className="transactions tab">
                            <b>Payment Transaction</b>
                            <button onClick={() => this.showSlides(3)}>View all</button>
                        </div>
                        
                        <div className="appointments tab">
                            <b>Appointments</b>
                            <button onClick={() => this.showSlides(2)}>View all</button>
                        </div>
                    </div>

                    {/* ------------- */}
                    <div className="consultHistory view">

                    </div>

                    {/* ------------- */}
                    <div className="allAppointment view">

                    </div>

                    {/* ------------- */}
                    <div className="payments view">

                    </div>

                    {/* ------------- */}
                    <div className="account view">
                        <div className="one">
                        <img src="" alt="" className="userpic" />
                            <h6>username</h6>
                            <p>occupation</p>
                        </div>
                        <div className="two">
                            <b>Edit profile</b>
                            <form>

                            </form>

                        </div>

                    </div>
                    {/* ------------- */}
                    <div className="settings view">

                    </div>
                    {/* ------------- */}
                    <div className="logout view">

                    </div>
                </section>
            </div>
        )
    }
}

export default userProfile
