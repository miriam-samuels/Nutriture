import React, { Component } from 'react'

class Upload extends Component {

    loadimg = (e) => {
        let img = document.getElementById('output');
        let img2 = document.getElementById('output2');
        img.src = URL.createObjectURL(e.target.files[0]);
        img2.src = URL.createObjectURL(e.target.files[0]);
    }
    render() {

        return (
            <>
                <label htmlFor="file">Upload Your Profile Image</label>
                <input type="file" name="image" id="file" onChange={this.loadimg} />
                <label htmlFor="records">Upload Medical Records</label>
                <input type="file" id="records" />
                <label htmlFor="extra">Upload Any Other File</label>
                <input type="file" id="extra" />
            </>
        )
    }
}

export default Upload
