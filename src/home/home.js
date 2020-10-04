import React, { Component } from 'react'
import Hero from './hero.js'
import Footer from './footer.js'
import Why from './why';
import Who from './who';
import HealthWallet from './healthWallet'
import Benefits from './benefits';
import HealthResources from './healthResources';
import Agent from './agent.js'
import Games from './games'
import UnlimitedServices from './unlimitedServices';
class Home extends Component {
    render() {
        return (
            <div>
                <section id="heroBg">
                    <Hero />
                </section>

                <section id="why">
                    <Why />
                </section>

                <section id="who">
                    <Who />
                </section>

                <section id="healthWallet">
                    <HealthWallet />
                </section>

                <section id="benefits">
                    <Benefits />
                </section>

                <section id="resources">
                    <HealthResources />
                </section>

                <section id="agent">
                    <Agent />
                </section>

                <section id="games">
                    <Games />
                </section>

                <section id="unlimited">
                    <UnlimitedServices />
                </section>

                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default Home
