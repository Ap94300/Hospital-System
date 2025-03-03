import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import HospitalForm from './components/HospitalForm';
import HospitalDetail from './components/HospitalDetail';
import HospitalList from './components/HospitalList';
import Navbar from './components/Navbar';
import EditHospital from './components/EditHospital'; // Import the EditHospital component
import QnABot from './components/QA Bot'; // Import the QnABot component
import BotIcon from './components/BotIcon'; // Import the BotIcon component
import './App.css';

const App = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [isBotVisible, setIsBotVisible] = useState(false); // State to manage bot visibility

    return (
        <Router>
            <div className="App">
                <Navbar setIsSignIn={setIsSignIn} />
                <Routes>
                    <Route path="/" element={<HospitalForm />} /> {/* Main page for adding hospitals */}
                    <Route path="/hospitals" element={<HospitalList />} /> {/* Route for Hospital List */}
                    <Route path="/hospital/:id" element={<HospitalDetail />} /> {/* Route for Hospital Detail */}
                    <Route path="/hospital/edit/:id" element={<EditHospital />} /> {/* Route for editing hospital */}
                    <Route path="/signin" element={<SignIn setIsSignIn={setIsSignIn} />} /> {/* Sign In page */}
                    <Route path="/signup" element={<SignUp setIsSignIn={setIsSignIn} />} /> {/* Sign Up page */}
                    <Route path="/about" element={<About />} /> {/* About page */}
                    <Route path="/contact" element={<Contact />} /> {/* Contact page */}
                </Routes>
                <BotIcon toggleBot={() => setIsBotVisible(!isBotVisible)} /> {/* Pass toggle function to BotIcon */}
                {isBotVisible && <QnABot />} {/* Conditionally render QnABot */}
            </div>
        </Router>
    );
};

// About component
const About = () => (
    <div className="about">
        <h2>About Us</h2>
        <p>
            Welcome to the Hospital Management System, a comprehensive solution designed to streamline the management of hospital information and services. Our application aims to enhance the efficiency of hospital operations, ensuring that healthcare providers can focus on what matters most: patient care.
        </p>
    </div>
);

// Contact component
const Contact = () => (
    <div className="contact">
        <h2>Contact Us</h2>
        <p>Email: support@hospitalmanagement.com</p>
        <p>Phone: +1 (555) 123-4567</p>
    </div>
);

export default App;