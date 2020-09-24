import React, { Component } from 'react'
import Dropdown from '../Images/Dropdown.svg';

class profileMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
        }
        this.show = this.show.bind(this);
    }
    show () {
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
    render() {
        return (
            <>
                <img src={Dropdown} alt="." width="35px" className="drpDwn" onClick={this.show} />
            </>
        )
    }
}

export default profileMenu
