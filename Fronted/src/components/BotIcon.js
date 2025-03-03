// components/BotIcon.js
import React from 'react';
import './BotIcon.css'; // Import the CSS for the bot icon

const BotIcon = ({ toggleBot }) => {
    return (
        <div className="bot-icon" onClick={toggleBot}>
            <img src="https://cdn-icons-png.flaticon.com/128/2593/2593635.png" alt="Bot Icon" />
        </div>
    );
};

export default BotIcon;