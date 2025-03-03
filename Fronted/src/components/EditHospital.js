import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FormStyles.css'; // Import the CSS file for styling

const EditHospital = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [hospitalData, setHospitalData] = useState({
        name: '',
        city: '',
        image: '',
        rating: '',
        description: '',
        numberOfDoctors: '',
        numberOfDepartments: ''
    });

    useEffect(() => {
        // Fetch the hospital data based on the ID from the URL
        const fetchHospitalData = async () => {
            try {
                // Replace with your API endpoint
                const response = await fetch(`/api/hospitals/${id}`);
                const data = await response.json();
                setHospitalData(data);
            } catch (error) {
                console.error('Error fetching hospital data:', error);
            }
        };

        fetchHospitalData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHospitalData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace with your API endpoint
            const response = await fetch(`/api/hospitals/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(hospitalData),
            });

            if (response.ok) {
                navigate(`/hospital/${id}`); // Redirect to hospital detail page after successful update
            } else {
                console.error('Failed to update hospital');
            }
        } catch (error) {
            console.error('Error updating hospital:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Edit Hospital Details</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={hospitalData.name}
                    onChange={handleChange}
                    placeholder="Hospital Name"
                    required
                />
                <input
                    type="text"
                    name="city"
                    value={hospitalData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                />
                <input
                    type="url"
                    name="image"
                    value={hospitalData.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    required
                />
                <input
                    type="number"
                    name="rating"
                    value={hospitalData.rating}
                    onChange={handleChange}
                    placeholder="Rating (1-5)"
                    min="1"
                    max="5"
                    required
                />
                <textarea
                    name="description"
                    value={hospitalData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />
                <input
                    type="number"
                    name="numberOfDoctors"
                    value={hospitalData.numberOfDoctors}
                    onChange={handleChange}
                    placeholder="Number of Doctors"
                    required
                />
                <input
                    type="number"
                    name="numberOfDepartments"
                    value={hospitalData.numberOfDepartments}
                    onChange={handleChange}
                    placeholder="Number of Departments"
                    required
                />
                <button type="submit">Update Hospital</button>
            </form>
        </div>
    );
};

export default EditHospital;