import React, { Component } from 'react'
import UpdatedComponent from "../components/mothercomp.js"
import {Link} from 'react-router-dom'
import Logo from '../Images/whitelogo.svg'
import Dashboard from '../Images/dashboard.svg';
import Consultation from '../Images/consultation.svg';
import Appointment from '../Images/appointment.svg';
import Payment from '../Images/payment.svg';
import Account from '../Images/account.svg';
import Setting from '../Images/settings.svg';
import Logout from '../Images/logout.svg';
import Notify from '../Images/notification.svg';
import Dropdown from '../Images/Dropdown.svg';
import Avatar from '../Images/avatar6.png';

let n = 0;
class UserProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
        }
    }

    loadimg = (e) =>{
        let img = document.getElementById('output');
        let img2 = document.getElementById('output2');
        img.src = URL.createObjectURL(e.target.files[0]);
        img2.src = URL.createObjectURL(e.target.files[0]);
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
            bar[i].style.color = "#D8D8D8";
            bar[i].style.background = "#FFF";
}
            slides[slideIndex].style.display = "block";
            bar[slideIndex].style.color = "#FFF";
            bar[slideIndex].style.background = "#000";

    }
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
        setTimeout(this.showSlides(n), 1);
        setTimeout(this.showDetails(0), 1);
    }
    render() {
        const {username,email,number,genotype,bloodgroup,height,weight} = this.props;
        const {usernameChange,emailChange,numberChange,genotypeChange,bloodgroupChange,heightChange,weightChange} = this.props;

        return (
            <div>
                <section id="profileBar">
                    <Link to = "/" ><img src={Logo} alt="logo" className="logo" /></Link>
                    <input type="text" placeholder="&#9906; Search" />
                    <div>
                        <span className="notifications"><img src={Notify} alt="." /> </span>
                        <span className="avatar">
                        <img id="output" src={Avatar} className="userpic" alt="FilePic"/>
                        <b>{username} <br/>{email}</b>
                        </span>
                    </div>
                </section>
                <img src={Dropdown} alt="." width="35px" className="drpDwn" onClick={this.show} />
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
                    <div className="dash view ">
                        <div className="availableDocs tab">
                            <b>Available Doctors</b>
                            <button>View all</button>
                        </div>

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
                        <div className="profile tab">
                        <img id="output2" src={Avatar}  alt="FilePic"/>
                            <h6>{username}</h6>
                            <p>{email}</p>
                        </div>
                        <div className="edit tab">
                            <nav>
                            <b  onClick={() => this.showDetails(0)}>Edit profile</b>
                            <b  onClick={() => this.showDetails(1)}>Upload Files</b>
                            <b  onClick={() => this.showDetails(2)}>Bank Detail</b>
                            <b  onClick={() => this.showDetails(3)}>Prescriptions</b>
                            </nav>

                            <div className="editProfile details">
                                <form onSubmit={(e) => {e.preventDefault()}}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" value={email} onChange={emailChange}  />
                                <span><label htmlFor="username" >Username</label>
                                <input type="text" id="username" value={username} onChange={usernameChange}  />
                                </span>
                                <span><label htmlFor="number">Phone Number</label>
                                <input type="tel" id="number" value={number} onChange={numberChange}  />
                                </span>
                                <span><label htmlFor="genotype">Genotype</label>
                                <input type="text" id="genotype" value={genotype} onChange={genotypeChange} />
                                </span>
                                <span><label htmlFor="bloodgroup">Blood Group</label>
                                <input type="text" id="bloodgroup" value={bloodgroup} onChange={bloodgroupChange} />
                                </span>
                                <span><label htmlFor="height">Height</label>
                                <input type="text" id="height" value={height} onChange={heightChange} />
                                </span>
                                <span><label htmlFor="weight">Weight</label>
                                <input type="text" id="weight" value={weight} onChange={weightChange} />
                                </span>
                                 <button type="submit">Update Profile</button><br/>

                                </form>
                           
                            </div>
                            <div className="upload details">
                            <label htmlFor="file">Upload Your Profile Image</label>
                            <input type="file"  name="image" id="file" onChange={this.loadimg} />
                            <label htmlFor="records">Upload Medical Records</label>
                            <input type="file" id="records" />
                            <label htmlFor="extra">Upload Any Other File</label>
                            <input type="file" id="extra" />
                            </div>
                            <div className="bank details">
                        
                            </div>
                            <div className="prescription details">
                             
                            </div>
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

export default UpdatedComponent(UserProfile) ;
