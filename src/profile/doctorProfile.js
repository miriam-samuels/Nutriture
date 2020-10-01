import React, { Component } from 'react'
import Drpdwn from './drpDwn.js';
import Consultations from './consultaion.js';
import Appointments from './appointment.js';
import Payments from './payments.js';
import Card from './bankDetails.js'
import { Link } from 'react-router-dom';
import Logo from '../Images/whitelogo.svg';
import Dashboard from '../Images/dashboard.svg';
import Consultation from '../Images/consultation.svg';
import Appointment from '../Images/appointment.svg';
import Payment from '../Images/payment.svg';
import Account from '../Images/account.svg';
import Setting from '../Images/settings.svg';
import Logout from '../Images/logout.svg';
import Notify from '../Images/notification.svg';
import Avatar from '../Images/avatar6.png';
import DoctorHOC from '../components/doctorHOC';

let n = 0;
class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.showDetails = this.showDetails.bind(this);
        this.showSlides = this.showSlides.bind(this);
        this.loadimg = this.loadimg.bind(this);
    }

    loadimg(e) {
        let img = document.getElementById('output');
        let img2 = document.getElementById('output2');
        img.src = URL.createObjectURL(e.target.files[0]);
        img2.src = URL.createObjectURL(e.target.files[0]);
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

    showDetails(slideIndex) {
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
        setTimeout(this.showSlides(n), 1);
        setTimeout(this.showDetails(0), 1);
    }
    render() {
        const { doctorHospital, doctorGender, doctorFirstname, doctorLastname, doctorEmail, doctorNumber, doctorLicenseId, doctorAddress, doctorCountry} = this.props;



        return (
            <div>
                <section id="profileBar">
                    <Link to="/" ><img src={Logo} alt="logo" className="logo" /></Link>
                    <input type="text" placeholder="&#9906; Search" />
                    <div>
                        <span className="notifications"><img src={Notify} alt="." /> </span>
                        <span className="avatar">
                            <img id="output" src={Avatar} className="userpic" alt="FilePic" />
                            <b>{doctorFirstname} {doctorLastname} <br />{doctorEmail}</b>
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
                            <h4>{doctorFirstname} {doctorLastname}</h4>
                            <h5>Doctor</h5>
                            <b>E-mail : {doctorEmail} </b>
                            <b>Gender : {doctorGender} </b>
                            <b>Phone Number : {doctorNumber} </b>
                            <b>License ID Number : {doctorLicenseId} </b>
                            <b>Hospital Name : {doctorHospital} </b>
                            <b>Address : {doctorAddress} </b>
                            <b>Country : {doctorCountry} </b>

                        </div>
                        <div className="edit tab">
                            <nav>
                                <b onClick={() => this.showDetails(0)}>More Info</b>
                                <b onClick={() => this.showDetails(1)}>Upload Files</b>
                                <b onClick={() => this.showDetails(2)}>Bank Detail</b>
                                <b onClick={() => this.showDetails(3)}>Prescriptions</b>
                            </nav>

                            <div className="editProfile details">
                                <form onSubmit={(e) => { e.preventDefault() }}>
                                    <label htmlFor="specialty">Specialty</label>
                                    <input type="text" id="specialty" />

                                    <button type="submit">Submit</button><br />

                                </form>
                            </div>
                            <div className="upload details">
                                <label htmlFor="file">Upload Your Profile Image</label>
                                <input type="file" name="image" id="file" onChange={this.loadimg} />
                                <label htmlFor="records">Upload Medical Certificate</label>
                                <input type="file" id="records" />
                                <label htmlFor="extra">Upload Any Other File</label>
                                <input type="file" id="extra" />
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

export default DoctorHOC(UserProfile);
