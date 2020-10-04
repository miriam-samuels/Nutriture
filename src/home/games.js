import React from 'react'
import Playstore from '../Images/playstore.png'
import Applestore from '../Images/applestore.png'
import Frutty from '../Images/frutty.png'
function Games() {
    return (
        <>
            <div className="gamesWords">
                <h3>Play Health Games</h3>
                <p>Download and play our educative health/fun games on android and iOS devices, to boost your health
                        knowledge, improve mental health, and win some great freebies </p>
                <img src={Playstore} alt="play store" />
                <img src={Applestore} alt="Apple store" />
            </div>
            <div className="gamesImg">
                <img src={Frutty} alt="gamepic" />
            </div>
        </>
    )
}

export default Games
