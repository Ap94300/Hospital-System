import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = ({ setIsSignIn }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar">
            <img 
                src="https://t3.ftcdn.net/jpg/03/24/58/44/240_F_324584485_qtdluDzmBNkJvmntEPlNeG1htwPktgCa.jpg" 
                alt="Logo" 
                className="logo" 
            />
            <div className="nav-links">
                <Link to="/" className="nav-link">Add Hospital</Link>
                <Link to="/hospitals" className="nav-link">View Hospitals</Link> {/* Link to Hospital List */}
                <Link to="/hospital/1" className="nav-link">Hospital Detail</Link> {/* Test link to Hospital Detail */}
                <div className="dropdown">
                    <button className="nav-link dropdown-toggle" onClick={toggleDropdown}>
                        Account
                    </button>
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <Link to="/signin" className="dropdown-item" onClick={() => setIsSignIn(true)}>Sign In</Link>
                            <Link to="/signup" className="dropdown-item" onClick={() => setIsSignIn(false)}>Sign Up</Link>
                        </div>
                    )}
                </div>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;