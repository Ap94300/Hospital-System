import React from 'react';
import { Link } from 'react-router-dom';
import './FormStyles.css'; // Import the CSS file

const SignUp = ({ setIsSignIn }) => {
    return (
        <div className="form-container signup">
            <h2>Sign Up</h2>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/" onClick={() => setIsSignIn(true)}>Sign In</Link></p>
        </div>
    );
};

export default SignUp;