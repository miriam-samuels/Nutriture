import React from 'react'
import Rect from '../Images/Rectangle.jpg';
function Why() {
    return (
        <>
            <div className="whyImg">
                <img src={Rect} alt="whydocpic" />
            </div>
            <div className="whyWords">
                <h3>Why Use Nutriture ?</h3>
                <p>We ensured the development, effective and innovative application of
                    technology taillored to your personal health management. Why you yet should use
                            Nutriture                        </p>
                <ul>
                    <li className="whyItem">Safe and Secure</li>
                    <li className="whyItem">Fast Response</li>
                    <li className="whyItem">Instant Access</li>
                </ul>
            </div>
        </>
    )
}

export default Why
