const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
    
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token) {
        return res.status(401).json({message: 'unauthorized'});
    }

    const isBlackListed = await userModel.findOne({token: token});

    if(isBlackListed) {

        return res.status(401).json({message: 'unauthorized'});

    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        if(user == null) {
            return res.status(401).json({message: 'unauthorized'});
        }

        req.user = user;

        return next();
    }
    catch(err) {
        return res.status(401).json({message: "unauthorized access"});
    }
}

module.exports.authCaptain = async (req, res, next) => {
    
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token) {
        return res.status(401).json({message: 'unauthorized'});
    }

    const isBlackListed = await captainModel.findOne({token: token});

    if(isBlackListed) {

        return res.status(401).json({message: 'unauthorized'});

    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);

        if(captain == null) {
            return res.status(401).json({message: 'unauthorized'});
        }

        req.captain = captain;

        return next();
    }
    catch(err) {
        return res.status(401).json({message: "unauthorized access"});
    }
}