import React from 'react'
import Error from '../Images/error404.jpg';
import { Link } from 'react-router-dom';

const styles = {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#fff",
}
const img = {
    width: "100%",
}
const button = {
    backgroundColor: "#02BE75",
    color: "#FFF",
    border: "transparent",
    padding: "15px",
}
function Error404() {
    return (
        <div style={styles} >
            <img src={Error} alt="Error 404" style={img} />
            <Link to="/"><button style={button}>Back to HomePage</button></Link>
        </div>
    )
}

export default Error404;
