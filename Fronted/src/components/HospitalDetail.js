import React, { useState } from 'react'; // Ensure useState is imported
import { Link } from 'react-router-dom';
import './HospitalList.css'; // Import your CSS file for styling

// Sample data for hospitals
const hospitalsData = [
    {
        id: 1,
        name: 'All India Institute of Medical Sciences (AIIMS)',
        city: 'New Delhi',
        image: 'https://upload.wikimedia.org/wikipedia/en/3/3e/AIIMS_New_Delhi.jpg',
        specialties: ['Cardiology', 'Neurology', 'Pediatrics', 'Surgery', 'Orthopedics'],
        rating: 4.5,
        description: 'A premier medical institution providing comprehensive healthcare services and advanced medical education.',
        doctors: 150,
        departments: 10
    },
    {
        id: 2,
        name: 'Apollo Hospital',
        city: 'Chennai',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Apollo_Hospitals_Logo.png',
        specialties: ['Cardiology', 'Orthopedics', 'Gastroenterology', 'Oncology'],
        rating: 4.7,
        description: 'One of the largest healthcare groups in Asia, known for its advanced medical technology and patient care.',
        doctors: 200,
        departments: 12
    },
    {
        id: 3,
        name: 'Fortis Hospital',
        city: 'Noida',
        image: 'https://fortishealthcare.com/images/fortis-logo.png',
        specialties: ['Oncology', 'Gastroenterology', 'Cardiology', 'Neurosurgery'],
        rating: 4.6,
        description: 'A multi-specialty hospital offering a wide range of healthcare services with a focus on patient-centric care.',
        doctors: 180,
        departments: 11
    },
    {
        id: 4,
        name: 'Max Super Specialty Hospital',
        city: 'New Delhi',
        image: 'https://www.maxhealthcare.in/assets/images/max-logo.png',
        specialties: ['Cardiology', 'Urology', 'Neurosurgery', 'Pediatrics'],
        rating: 4.5,
        description: 'A leading healthcare provider with a focus on patient-centric care and advanced medical facilities.',
        doctors: 160,
        departments: 9
    },
    {
        id: 5,
        name: 'Manipal Hospital',
        city: 'Bangalore',
        image: 'https://www.manipalhospitals.com/images/manipal-hospital-logo.png',
        specialties: ['Pediatrics', 'Orthopedics', 'Cardiology', 'Gastroenterology'],
        rating: 4.4,
        description: 'A renowned hospital known for its quality healthcare and advanced medical facilities.',
        doctors: 140,
        departments: 8
    },
    {
        id: 6,
        name: 'Kokilaben Dhirubhai Ambani Hospital',
        city: 'Mumbai',
        image: 'https://www.kokilabenhospital.com/images/logo.png',
        specialties: ['Cardiology', 'Neurology', 'Oncology', 'Pediatrics'],
        rating: 4.8,
        description: 'A state-of-the-art hospital offering comprehensive healthcare services with a focus on quality and patient care.',
        doctors: 220,
        departments: 15
    },
    {
        id: 7,
        name: 'Tata Memorial Hospital',
        city: 'Mumbai',
        image: 'https://tmc.gov.in/images/logo.png',
        specialties: ['Oncology', 'Radiology', 'Surgery'],
        rating: 4.9,
        description: 'A specialized cancer treatment and research center known for its advanced treatment options.',
        doctors: 300,
        departments: 5
    },
    {
        id: 8,
        name: 'Christian Medical College (CMC)',
        city: 'Vellore',
        image: 'https://www.cmch-vellore.edu/images/logo.png',
        specialties: ['General Medicine', 'Surgery', 'Pediatrics', 'Obstetrics'],
        rating: 4.7,
        description: 'A prestigious medical institution known for its quality education and healthcare services.',
        doctors: 250,
        departments: 14
    },
    {
        id: 9,
        name: 'Narayana Health',
        city: 'Bangalore',
        image: 'https://www.narayanahealth.org/images/logo.png',
        specialties: ['Cardiology', 'Gastroenterology', 'Orthopedics', 'Neurosurgery'],
        rating: 4.6,
        description: 'A multi-specialty hospital chain known for its affordable healthcare and advanced medical facilities.',
        doctors: 190,
        departments: 11
    },
    {
        id: 10,
        name: 'PGIMER',
        city: 'Chandigarh',
        image: 'https://pgimer.edu.in/images/logo.png',
        specialties: ['General Surgery', 'Pediatrics', 'Cardiology', 'Neurosurgery'],
        rating: 4.8,
        description: 'A leading medical and research institution in India, providing high-quality healthcare and education.',
        doctors: 300,
        departments: 13
    },
    {
        id: 11,
        name: 'Artemis Hospital',
        city: 'Gurgaon',
        image: 'https://www.artemishospitals.com/assets/images/logo.png',
        specialties: ['Cardiology', 'Orthopedics', 'Neurology', 'Oncology'],
        rating: 4.6,
        description: 'A state-of-the-art hospital offering advanced medical care with a focus on patient-centric services.',
        doctors: 170,
        departments: 10
    },
    {
        id: 12,
        name: 'Medanta - The Medicity',
        city: 'Gurgaon',
        image: 'https://www.medanta.org/images/logo.png',
        specialties: ['Cardiology', 'Oncology', 'Neurology', 'Transplant'],
        rating: 4.7,
        description: 'A multi-specialty hospital known for its advanced medical technology and world-class healthcare services.',
        doctors: 250,
        departments: 12
    },
    {
        id: 13,
        name: 'Jaslok Hospital',
        city: 'Mumbai',
        image: 'https://www.jaslokhospital.net/images/logo.png',
        specialties: ['Cardiology', 'Oncology', 'Neurology', 'Orthopedics'],
        rating: 4.5,
        description: 'A leading hospital in Mumbai known for its excellence in healthcare and patient care.',
        doctors: 200,
        departments: 11
    },
    {
        id: 14,
        name: 'Ruby Hall Clinic',
        city: 'Pune',
        image: 'https://www.rubyhall.com/wp-content/themes/rubyhall/images/logo.png',
        specialties: ['Cardiology', 'Neurology', 'Oncology', 'Orthopedics'],
        rating: 4.4,
        description: 'A well-known hospital in Pune offering comprehensive healthcare services.',
        doctors: 180,
        departments: 10
    },
    {
        id: 15,
        name: 'Columbia Asia Hospital',
        city: 'Bangalore',
        image: 'https://www.columbiaasia.com/india/sites/default/files/logo.png',
        specialties: ['Cardiology', 'Orthopedics', 'Neurology', 'Pediatrics'],
        rating: 4.3,
        description: 'A trusted hospital chain providing high-quality healthcare services across India.',
        doctors: 160,
        departments: 9
    },
    {
        id: 16,
        name: 'Global Hospitals',
        city: 'Hyderabad',
        image: 'https://www.globalhospitalsindia.com/images/logo.png',
        specialties: ['Cardiology', 'Oncology', 'Neurology', 'Transplant'],
        rating: 4.6,
        description: 'A leading hospital in Hyderabad known for its advanced medical care and patient-centric approach.',
        doctors: 220,
        departments: 12
    },
    {
        id: 17,
        name: 'BLK Super Specialty Hospital',
        city: 'New Delhi',
        image: 'https://www.blkhospital.com/images/logo.png',
        specialties: ['Cardiology', 'Oncology', 'Neurology', 'Orthopedics'],
        rating: 4.7,
        description: 'A premier hospital in Delhi offering world-class healthcare services.',
        doctors: 240,
        departments: 13
    },
    {
        id: 18,
        name: 'Wockhardt Hospital',
        city: 'Mumbai',
        image: 'https://www.wockhardthospitals.com/images/logo.png',
        specialties: ['Cardiology', 'Neurology', 'Orthopedics', 'Oncology'],
        rating: 4.5,
        description: 'A trusted hospital in Mumbai known for its advanced medical care and patient-friendly services.',
        doctors: 190,
        departments: 11
    },
    {
        id: 19,
        name: 'Sir Ganga Ram Hospital',
        city: 'New Delhi',
        image: 'https://www.sgrh.com/images/logo.png',
        specialties: ['Cardiology', 'Neurology', 'Orthopedics', 'Oncology'],
        rating: 4.6,
        description: 'A renowned hospital in Delhi providing high-quality healthcare services.',
        doctors: 210,
        departments: 12
    },
    {
        id: 20,
        name: 'Sahyadri Hospitals',
        city: 'Pune',
        image: 'https://www.sahyadrihospitals.com/images/logo.png',
        specialties: ['Cardiology', 'Neurology', 'Orthopedics', 'Oncology'],
        rating: 4.4,
        description: 'A leading hospital chain in Pune offering comprehensive healthcare services.',
        doctors: 180,
        departments: 10
    }
];

const HospitalList = () => {
    const [selectedCity, setSelectedCity] = useState('All');

    // Get unique cities from the hospital data
    const cities = ['All', ...new Set(hospitalsData.map(hospital => hospital.city))];

    // Filter hospitals based on selected city
    const filteredHospitals = selectedCity === 'All' 
        ? hospitalsData 
        : hospitalsData.filter(hospital => hospital.city === selectedCity);

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
            <Link to={`/hospital/${hospital.id}`} className="hospital-link">
                <h3>{hospital.name}</h3>
                <img src={hospital.image} alt={hospital.name} className="hospital-image" /> {/* Display the image */}
                <p><strong>City:</strong> {hospital.city}</p>
                <p><strong>Rating:</strong> {hospital.rating} ★</p>
                <p><strong>Doctors:</strong> {hospital.doctors}</p>
                <p><strong>Departments:</strong> {hospital.departments}</p>
                <p><strong>Specialties:</strong> {hospital.specialties.join(', ')}</p> {/* Join specialties array into a string */}
                <p><strong>Description:</strong> {hospital.description}</p>
            </Link>
        </div>
    ))}
</div>
        </div>
    );
};

export default HospitalList;