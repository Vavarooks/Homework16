import React from "react"

function Footer() {
    return (
        <div className="footer bg-warning">
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link active" href="#">&copy; Vanessa Emerick, 2020</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Email</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Linked In</a>
            </li>
        </ul>
        </div>
    )
}

export default Footer;