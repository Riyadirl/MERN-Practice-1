const ProfileModel = require('../models/ProfileModel');


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

