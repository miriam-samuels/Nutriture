import React, { Component } from 'react'
import Logo from '../Images/whitelogo.svg'
import Dashboard from '../Images/dashboard.svg';
import Consultation from '../Images/consultation.svg';
import Appointment from '../Images/appointment.svg';
import Payment from '../Images/payment.svg';
import Account from '../Images/account.svg';
import Setting from '../Images/settings.svg';
import Logout from '../Images/logout.svg'
import Notify from '../Images/notification.svg'

class userProfile extends Component {
    render() {
        return (
            <div>
               <section id="profileBar">
                   <img src={Logo} alt="logo" className="logo"/>
                   <input type="text" placeholder="&#9906; Search"/>
                   <div>
                   <span><img src={Notify} alt="."/>notifications </span>
                   <span><img src="" alt="" className="userpic"/>
                   <b>Username</b>
                   </span>
                   </div>
                </section> 
                <section id="userProfile">
                    <div className="profileMenu">
                        <div><img src={Dashboard} alt="." />Dashboard</div>
                        <div><img src={Consultation} alt="." />Consultation History</div>
                        <div><img src={Appointment} a lt="." />Appointments</div>
                        <div><img src={Payment} alt="." />Payments</div>
                        <div><img src={Account} alt="." />Account</div>
                        <div><img src={Setting} alt="." />Settings</div>
                        <div><img src={Logout} alt="." />Log out</div>
                    </div>
                    <div className="dash">
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
                        <button>View all</button>
                        </div>
                        <div className="transactions tab">
                            <b>Payment Transaction</b>
                        <button>View all</button>
                        </div>
                        <div className="appointments tab">
                            <b>Appointments</b>
                        <button>View all</button>
                        </div>
                    </div>
                    <div className="profile">

                    </div>
                </section>
            </div>
        )
    }
}

export default userProfile
