const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    numberOfDoctors: {
        type: Number,
        required: true,
    },
    numberOfDepartments: {
        type: Number,
        required: true,
    },
    specialties: {
        type: [String],
        required: true,
    },
});

module.exports = mongoose.model('Hospital', HospitalSchema);