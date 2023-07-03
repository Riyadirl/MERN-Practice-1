const ProfileModel = require('../models/ProfileModel');
const jwt = require('jsonwebtoken');


//create
exports.CreateProfile = async (req, res) => {
    let reqBody = req.body;
    ProfileModel.create(reqBody)
        .then((data) => {
            // Profile created successfully
            res.status(200).json({ message: 'Profile created successfully', data });
        })
        .catch((error) => {
            // Handle the error
            console.error('Error creating profile:', error);
            res.status(500).json({ error: 'Failed to create profile' });
        });
};




//login
const secretKey = 'secretkey123'; // Replace with 

exports.UserLogin = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const profile = await ProfileModel.findOne({ userName, password });

        if (profile) {
            // Generate JWT token
            const token = jwt.sign({ userName: profile.userName }, secretKey, { expiresIn: '1h' });

            res.status(200).json({ message: 'Login successful', token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Failed to login' });
    }
};





