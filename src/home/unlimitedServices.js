import React from 'react'
import { Link } from 'react-router-dom';
import Union from '../Images/Union.svg';
function UnlimitedServices() {
    return (
        <>
            <div className="unlimitedWords">
                <h3>Enjoy unlimited health services</h3>
                <Link to="/signups"><button>Sign Up</button></Link>
            </div>
            <img src={Union} alt="union" className="union1 union" />
            <img src={Union} alt="union" className="union2 union" />
            <img src={Union} alt="union" className="union3 union" />
        </>
    )
}

export default UnlimitedServices
