// components/QnABot.js
import React, { useState } from 'react';
import './QA Bot.css'; // Import the CSS file

// Sample hospital data
const hospitalsData = [
    { id: 1, name: 'All India Institute of Medical Sciences (AIIMS)', city: 'New Delhi', description: 'A premier medical institution providing comprehensive healthcare services.' },
    { id: 2, name: 'Apollo Hospital', city: 'Chennai', description: 'One of the largest healthcare groups in Asia, known for its advanced medical technology.' },
    // ... (other hospital data)
];

const QnABot = () => {
    const [query, setQuery] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);

    // Function to retrieve relevant hospital data based on the query
    const retrieveRelevantData = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        return hospitalsData.filter(hospital => 
            hospital.name.toLowerCase().includes(lowerCaseQuery) ||
            hospital.city.toLowerCase().includes(lowerCaseQuery) ||
            hospital.description.toLowerCase().includes(lowerCaseQuery)
        );
    };

    // Function to generate an answer based on the query
    const generateAnswer = async (query) => {
        const lowerCaseQuery = query.toLowerCase();

        // Handle greetings
        if (lowerCaseQuery === 'hi' || lowerCaseQuery === 'hello') {
            return 'Hello! How can I assist you today? 😊';
        }

        // Retrieve relevant hospital data
        const relevantData = retrieveRelevantData(query);

        // If no relevant data found, return a fallback message
        if (relevantData.length === 0) {
            return 'I\'m sorry, I didn\'t understand that. Can you please ask something else? 🤔';
        }

        // If relevant data is found, format the response
        return relevantData.map(hospital => (
            `${hospital.name} located in ${hospital.city}. ${hospital.description}`
        )).join('\n');
    };
        // Handle user query submission
        const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);
    
            try {
                // Generate an answer based on the query
                const generatedAnswer = await generateAnswer(query);
                setAnswer(generatedAnswer);
            } catch (error) {
                console.error('Error generating answer:', error);
                setAnswer('Sorry, something went wrong. Please try again. 😞');
            } finally {
                setLoading(false);
            }
        };
    
        return (
            <div className="qna-bot">
                <h2>Hospital Q&A Bot</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Ask a question about hospitals..."
                        required
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Generating Answer...' : 'Ask'}
                    </button>
                </form>
    
                {answer && (
                    <div className="answer">
                        <h3>Answer:</h3>
                        <p>{answer}</p>
                    </div>
                )}
            </div>
        );
    };
    
    export default QnABot;
