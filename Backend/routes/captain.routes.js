const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller')

router.post('/register', [
    // Email validation
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname')
        .isLength({ min: 3 })
        .withMessage('First name must be at least 3 characters long'),    
    // Password validation
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    // Vehicle validation
    body('vehicle.color')
        .isLength({ min: 3 })
        .withMessage('Color must be at least 3 characters'),
    body('vehicle.plate')
        .isLength({ min: 3 })
        .withMessage('Plate must be at least 3 characters'),
    body('vehicle.capacity')
        .isInt({ min: 1 })
        .withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType')
        .isIn(['car', 'motorcycle', 'auto'])
        .withMessage('Vehicle type must be one of: car, motorcycle, auto'),
],
captainController.registerCaptain
)

module.exports = router;