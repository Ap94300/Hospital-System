const Hospital = require('../models/Hospital');

// @desc    Get all hospitals
// @route   GET /api/hospitals
// @access  Public
const getHospitals = async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        res.json(hospitals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc    Get a single hospital by ID
// @route   GET /api/hospitals/:id
// @access  Public
const getHospitalById = async (req, res) => {
    try {
        const hospital = await Hospital.findById(req.params.id);
        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.json(hospital);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc    Create a new hospital
// @route   POST /api/hospitals
// @access  Public
const createHospital = async (req, res) => {
    const hospital = new Hospital(req.body);
    try {
        const newHospital = await hospital.save();
        res.status(201).json(newHospital);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc    Update a hospital by ID
// @route   PUT /api/hospitals/:id
// @access  Public
const updateHospital = async (req, res) => {
    try {
        const hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.json(hospital);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc    Delete a hospital by ID
// @route   DELETE /api/hospitals/:id
// @access  Public
const deleteHospital = async (req, res) => {
    try {
        const hospital = await Hospital.findByIdAndDelete(req.params.id);
        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.json({ message: 'Hospital deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getHospitals,
    getHospitalById,
    createHospital,
    updateHospital,
    deleteHospital,
};