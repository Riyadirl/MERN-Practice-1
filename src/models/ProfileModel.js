const mongoose = require('mongoose')

const DataSchema = mongoose.Schema(
    {

        firstName: { type: String },
        lastName: { type: String },
        email: { type: String, unique: true },
        mobile: { type: String },
        userName: { type: String, unique: true },
        address: { type: String },
        password: { type: String },
    },
    { timestamps: true, versionKey: false }
)



const ProfileModel = mongoose.model('Profiles', DataSchema);
module.exports = ProfileModel;


/*

{
        "firstName": "",
        "lastName": "",
        "email": "",
        "mobile": "",
        "userName": "",
        "address": "",
        "password": ""
}
*/