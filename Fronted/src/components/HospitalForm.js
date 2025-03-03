import React, { useState } from 'react';
import './HospitalList.css'; // Import the CSS file

const HospitalForm = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [specialities, setSpecialities] = useState([]);
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Log the hospital data to the console
        console.log({ name, city, imageUrl, specialities, rating });

        // Reset the form fields after submission
        setName('');
        setCity('');
        setImageUrl('');
        setSpecialities([]);
        setRating('');
    };

    const handleSpecialityChange = (e) => {
        const value = e.target.value;
        setSpecialities((prev) => 
            prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
        );
    };

    return (
        <div className="form-container hospital-form">
            <h2>Add Hospital</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Hospital Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="City" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    required 
                />
                <input 
                    type="url" 
                    placeholder="Image URL" 
                    value={imageUrl} 
                    onChange={(e) => setImageUrl(e.target.value)} 
                    required 
                />
                <label>
                    Specialities:
                    <select multiple value={specialities} onChange={handleSpecialityChange}>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Neurology">Neurology</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="General Surgery">General Surgery</option>
                    </select>
                </label>
                <input 
                    type="number" 
                    placeholder="Rating (1-5)" 
                    value={rating} 
                    onChange={(e) => setRating(e.target.value)} 
                    min="1" 
                    max="5" 
                    required 
                />
                <button type="submit">Add Hospital</button>
            </form>
        </div>
    );
};

export default HospitalForm;