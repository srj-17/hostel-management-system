import React from "react"
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <Link to="/">
                    {/* <FaHome className="home-icon" /> */}
                    {
                        <img
                            src="/hms-logo.png"
                            alt="Hue Hostel Logo"
                            className="logo"
                        />
                    }
                    <h1>Hue Hostel</h1>
                </Link>
            </div>
            <nav className="header-nav">
                <Link to="/attendance">Attendance</Link>
                <Link to="/beds/vacant">Vacant Beds</Link>
            </nav>
        </header>
    )
}

export default Header
