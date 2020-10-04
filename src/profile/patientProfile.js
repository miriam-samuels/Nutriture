import React, { Component } from 'react'
import Upload from "./Upload.js"
import Drpdwn from './drpDwn';
import Consultations from './consultaion.js'
import Appointments from './appointment.js'
import Payments from './payments.js'
import Card from './bankDetails.js'
import { Link } from 'react-router-dom'
import Logo from '../Images/whitelogo.svg'
import Dashboard from '../Images/dashboard.svg';
import Consultation from '../Images/consultation.svg';
import Appointment from '../Images/appointment.svg';
import Payment from '../Images/payment.svg';
import Account from '../Images/account.svg';
import Setting from '../Images/settings.svg';
import Logout from '../Images/logout.svg';
import Notify from '../Images/notification.svg';
import Avatar from '../Images/avatar6.png';
import PatientHOC from '../components/patientHoc';
import AccountTab from './accountTab.js';

let n = 0;
class UserProfile extends Component {
    constructor(props) {
        super(props)

        this.showSlides = this.showSlides.bind(this);
    }
    showSlides(slideIndex) {
        const bar = Array.from(document.querySelectorAll("   #userProfile .profileMenu div"));
        const slides = Array.from(document.querySelectorAll("  #userProfile .view"));

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            bar[i].style.color = "#D8D8D8";
            bar[i].style.background = "#FFF";
        }
        slides[slideIndex].style.display = "block";
        bar[slideIndex].style.color = "#FFF";
        bar[slideIndex].style.background = "#000";

    }
    componentDidMount() {
        setTimeout(this.showSlides(n), 1);
    }
    render() {
        const { patientUsername, patientEmail, patientNumber, patientGenotype, patientBloodgroup, patientHeight, patientWeight } = this.props;

        return (
            <div>
                <section id="profileBar">
                    <Link to="/" ><img src={Logo} alt="logo" className="logo" /></Link>
                    <input type="text" placeholder="&#9906; Search" />
                    <div>
                        <span className="notifications"><img src={Notify} alt="." /> </span>
                        <span className="avatar">
                            <img id="output" src={Avatar} className="userpic" alt="FilePic" />
                            <b>{patientUsername} <br />{patientEmail}</b>
                        </span>
                    </div>
                </section>
                <Drpdwn />
                <section id="userProfile">
                    {/* -----------------PROFILE MENU OPTIONS -------------------- */}
                    <div className="profileMenu">
                        <div onClick={() => this.showSlides(0)}><img src={Dashboard} alt="." />Dashboard</div>
                        <div onClick={() => this.showSlides(1)}><img src={Consultation} alt="." />Consultation History</div>
                        <div onClick={() => this.showSlides(2)}><img src={Appointment} alt="." />Appointments</div>
                        <div onClick={() => this.showSlides(3)}><img src={Account} alt="." />Account</div>
                        <div onClick={() => this.showSlides(4)}><img src={Appointment} alt="." />Meal Plans</div>
                        <div onClick={() => this.showSlides(5)}><img src={Appointment} alt="." />Recipes</div>
                        <div onClick={() => this.showSlides(6)}><img src={Payment} alt="." />Payments</div>
                        <div onClick={() => this.showSlides(7)}><img src={Setting} alt="." />Settings</div>
                        <div onClick={() => this.showSlides(8)}><img src={Logout} alt="." />Log out</div>
                    </div>
                    {/* ------------------DASHBOARD---------------------- */}
                    <div className="dash view ">

                        {/* ------AVAILABLE DOCTORS TAB----- */}
                        <div className="availableDocs tab">
                            <b>Available Doctors</b>
                            <button>View all</button>
                        </div>

                        {/* ------CONSULTATION TAB------ */}
                        <div className="consultations tab">
                            <b>Consultation History</b>
                            <div className="sub">
                                <div className="docVisited">
                                    <b>Doctor </b>

                                </div>
                                <div className="activity">
                                    <b>Activity</b>

                                </div>
                                <div className="prescription">
                                    <b>Prescription</b>

                                </div>
                            </div>

                            <button onClick={() => this.showSlides(1)}>View all</button>
                        </div>

                        {/* ------TRANSACTION TAB------ */}
                        <div className="transactions tab">
                            <b>Payment Transaction</b>
                            <button onClick={() => this.showSlides(6)}>View all</button>
                        </div>

                        {/* ------APPOINTMENT TAB------ */}
                        <div className="appointments tab">
                            <b>Appointments</b>
                            <button onClick={() => this.showSlides(2)}>View all</button>
                        </div>
                    </div>

                    {/* ----------------------CONSULTATIONS----------------------- */}
                    <div className="consultHistory view">
                        <Consultations />
                    </div>

                    {/* ---------------------------APPOINTMENTS------------------- */}
                    <div className="allAppointment view">
                        <Appointments />
                    </div>
                    {/* --------------------------ACCOUNT--------------------------- */}
                    <div className="account view">
                        <div className="profile tab">
                            <img id="output2" src={Avatar} alt="FilePic" />
                            <h4>{patientUsername}</h4>
                            <h5>Patient</h5>
                            <b>E-mail : {patientEmail} </b>
                            <b>Phone Number : {patientNumber} </b>
                            <b>Genotype : {patientGenotype} </b>
                            <b>Blood Group : {patientBloodgroup} </b>
                            <b>Weight: {patientWeight} </b>
                            <b>Height: {patientHeight} </b>
                        </div>

                        {/* ------EDIT TAB------ */}
                        <div className="edit tab">
                            <nav>
                                <AccountTab />
                            </nav>

                            <div className="editProfile details">

                            </div>
                            <div className="upload details">
                                <Upload />
                            </div>
                            <div className="bank details">
                                <Card />
                            </div>
                            <div className="prescription details">

                            </div>
                        </div>
                    </div>
                    {/* -------------------------MEAL PLAN---------------------- */}
                    <div className="mealPlan view">

                    </div>
                    {/* --------------------------RECIPE----------------------- */}
                    <div className="Recipe view">
                        <input type="text" placeholder="&#9906; Search Recipe" />

                    </div>
                    {/* -----------------------PAYMENTS----------------------- */}
                    <div className="payments view">
                        <Payments />
                    </div>

                    {/* -------------------------SETTINGS---------------------- */}
                    <div className="settings view">

                    </div>
                    {/* --------------------------LOGOUT----------------------- */}
                    <div className="logout view">

                    </div>
                </section>
            </div>
        )
    }
}

export default PatientHOC(UserProfile);
