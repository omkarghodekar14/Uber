const captainModel= require('../models/captain.model');

module.exports.createCaptain = async ({ fullname, email, password, vehicle }) => {
    try {
        if (!fullname || !email || !password || !vehicle) {
            throw new Error('All fields are required');
        }

        const captain = await captainModel.create({ fullname, email, password, vehicle });

        return captain;
    } catch (error) {
        console.error('Error creating captain:', error.message);
        throw error;
    }
};
