import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample data for hospitals
const hospitalsData = [
    { id: 1, name: 'All India Institute of Medical Sciences (AIIMS)', city: 'New Delhi', description: 'A premier medical institution providing comprehensive healthcare services.' },
    { id: 2, name: 'Apollo Hospital', city: 'Chennai', description: 'One of the largest healthcare groups in Asia, known for its advanced medical technology.' },
    { id: 3, name: 'Fortis Hospital', city: 'Noida', description: 'A multi-specialty hospital offering a wide range of healthcare services.' },
    { id: 4, name: 'Max Super Specialty Hospital', city: 'New Delhi', description: 'A leading healthcare provider with a focus on patient-centric care.' },
    { id: 5, name: 'Manipal Hospital', city: 'Bangalore', description: 'A renowned hospital known for its quality healthcare and advanced medical facilities.' },
    { id: 6, name: 'Kokilaben Dhirubhai Ambani Hospital', city: 'Mumbai', description: 'A state-of-the-art hospital offering comprehensive healthcare services.' },
    { id: 7, name: 'Tata Memorial Hospital', city: 'Mumbai', description: 'A specialized cancer treatment and research center.' },
    { id: 8, name: 'Christian Medical College (CMC)', city: 'Vellore', description: 'A prestigious medical institution known for its quality education and healthcare.' },
    { id: 9, name: 'Narayana Health', city: 'Bangalore', description: 'A multi-specialty hospital chain known for its affordable healthcare.' },
    { id: 10, name: 'PGIMER', city: 'Chandigarh', description: 'A leading medical and research institution in India.' },
    { id: 11, name: 'Artemis Hospital', city: 'Gurgaon', description: 'A state-of-the-art hospital offering advanced medical care with a focus on patient-centric services.' },
    { id: 12, name: 'Medanta - The Medicity', city: 'Gurgaon', description: 'A multi-specialty hospital known for its advanced medical technology and world-class healthcare services.' },
    { id: 13, name: 'Jaslok Hospital', city: 'Mumbai', description: 'A leading hospital in Mumbai known for its excellence in healthcare and patient care.' },
    { id: 14, name: 'Ruby Hall Clinic', city: 'Pune', description: 'A well-known hospital in Pune offering comprehensive healthcare services.' },
    { id: 15, name: 'Columbia Asia Hospital', city: 'Bangalore', description: 'A trusted hospital chain providing high-quality healthcare services across India.' },
    { id: 16, name: 'Global Hospitals', city: 'Hyderabad', description: 'A leading hospital in Hyderabad known for its advanced medical care and patient-centric approach.' },
    { id: 17, name: 'BLK Super Specialty Hospital', city: 'New Delhi', description: 'A premier hospital in Delhi offering world-class healthcare services.' },
    { id: 18, name: 'Wockhardt Hospital', city: 'Mumbai', description: 'A trusted hospital in Mumbai known for its advanced medical care and patient-friendly services.' },
    { id: 19, name: 'Sir Ganga Ram Hospital', city: 'New Delhi', description: 'A renowned hospital in Delhi providing high-quality healthcare services.' },
    { id: 20, name: 'Sahyadri Hospitals', city: 'Pune', description: 'A leading hospital chain in Pune offering comprehensive healthcare services.' },
    { id: 21, name: 'Lilavati Hospital', city: 'Mumbai', description: 'A well-known hospital in Mumbai offering advanced medical care and patient-centric services.' },
    { id: 22, name: 'Breach Candy Hospital', city: 'Mumbai', description: 'A prestigious hospital in Mumbai known for its high-quality healthcare services.' },
    { id: 23, name: 'KIMS Hospital', city: 'Hyderabad', description: 'A leading hospital in Hyderabad offering advanced medical care and specialized treatments.' },
    { id: 24, name: 'Amrita Hospital', city: 'Kochi', description: 'A renowned hospital in Kerala known for its advanced medical facilities and patient care.' },
    { id: 25, name: 'Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGI)', city: 'Lucknow', description: 'A premier medical institution in Lucknow offering specialized healthcare services.' },
    { id: 26, name: 'Sri Ramachandra Medical Centre', city: 'Chennai', description: 'A leading hospital in Chennai known for its advanced medical care and research.' },
    { id: 27, name: 'Rajiv Gandhi Cancer Institute and Research Centre', city: 'New Delhi', description: 'A specialized cancer hospital in Delhi offering advanced treatment options.' },
    { id: 28, name: 'Aditya Birla Memorial Hospital', city: 'Pune', description: 'A well-known hospital in Pune offering comprehensive healthcare services.' },
    { id: 29, name: 'Care Hospitals', city: 'Hyderabad', description: 'A trusted hospital chain in Hyderabad known for its advanced medical care and patient-centric approach.' },
    { id: 30, name: 'Hiranandani Hospital', city: 'Mumbai', description: 'A leading hospital in Mumbai offering advanced medical care and specialized treatments.' },
];

const HospitalList = () => {
    const [selectedCity, setSelectedCity] = useState('All');
    const [hospitals, setHospitals] = useState(hospitalsData); // Initialize with sample data

    // Get unique cities from the hospital data
    const cities = ['All', ...new Set(hospitalsData.map(hospital => hospital.city))];

    // Filter hospitals based on selected city
    const filteredHospitals = selectedCity === 'All' 
        ? hospitals 
        : hospitals.filter(hospital => hospital.city === selectedCity);

    // Handle delete
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this hospital?");
        if (confirmDelete) {
            setHospitals(hospitals.filter(hospital => hospital.id !== id)); // Simulate deletion
        }
    };

    return (
        <div className="hospital-list">
            <h2>Hospitals</h2>
            <label htmlFor="city-select">Select City:</label>
            <select 
                id="city-select" 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
            >
                {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                ))}
            </select>

            <div className="hospital-container">
                {filteredHospitals.map(hospital => (
                    <div key={hospital.id} className="hospital-card">
                        <h3>{hospital.name}</h3>
                        <p><strong>City:</strong> {hospital.city}</p>
                        <p>{hospital.description}</p>

                        {/* Delete Button */}
                        <button onClick={() => handleDelete(hospital.id)}>Delete</button>

                        {/* Edit Link (Remains if needed) */}
                        <Link to={`/hospital/edit/${hospital.id}`}>Edit</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HospitalList;