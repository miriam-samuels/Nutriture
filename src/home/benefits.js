import React from 'react'
import Ellipse from '../Images/ellipse.png';
import Union from '../Images/Union.svg';
function Benefits() {
    return (
        <>
            <img src={Ellipse} alt="ellipse" className="ellipse" />
            <div className="benefitWords">
                <h3>Amazing Benefits</h3>
                <p>Nutriture health is your best health companion, with which you can be assured many amazing benefits,
                        including:</p>
            </div>
            <div className="benefitBtns">
                <button>Health supplies near you</button>
                <button>Free Health Resources</button>
                <button>Free Meal Plan</button>
                <button>Free Health Game</button>
                <button>Referral Bonuses</button>
            </div>
            <img src={Union} alt="union" className="union11" />
            <img src={Union} alt="union" className="union12" />
            <img src={Union} alt="union" className="union13" />
        </>
    )
}

export default Benefits
