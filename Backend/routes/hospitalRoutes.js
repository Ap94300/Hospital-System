const express = require('express');
const hospitalController = require('../controllers/hospitalController');

const router = express.Router();

// Routes for hospitals
router.get('/', hospitalController.getHospitals);
router.get('/:id', hospitalController.getHospitalById);
router.post('/', hospitalController.createHospital);
router.put('/:id', hospitalController.updateHospital);
router.delete('/:id', hospitalController.deleteHospital);

module.exports = router;