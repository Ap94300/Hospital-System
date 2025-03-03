import React from 'react';
import { Link } from 'react-router-dom';
import './FormStyles.css'; // Import the CSS file

const SignIn = ({ setIsSignIn }) => {
    return (
        <div className="form-container signin">
            <h2>Sign In</h2>
            <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <Link to="/" onClick={() => setIsSignIn(false)}>Sign Up</Link></p>
        </div>
    );
};

export default SignIn;