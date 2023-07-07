

const jwt = require('jsonwebtoken');
const secretKey = 'secretkey1234'; // Replace with your own secret key

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ status: 'unauthorized' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ status: 'unauthorized' });
        }

        req.userName = decoded.userName;
        next();
    });
};















/*
const jwt = require('jsonwebtoken');

const secretKey = 'secretkey123'; // Replace with your own secret key

module.exports = (req, res, next) => {
    let token = req.headers['token-key'];

    if (!token) {
        return res.status(401).json({ status: 'unauthorized' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ status: 'unauthorized' });
        }

        let userName = decoded.data.userName;
        req.headers.userName = userName;

        next();
    });
};



/*
const secretKey = 'secretkey123'; // Replace with your own secret key

module.exports = (req, res, next) => {
    let token = req.headers['token-key'];

    if (!token) {
        return res.status(401).json({ status: 'unauthorized' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ status: 'unauthorized' });
        }

        next();
    });
};




















const jwt = require('jsonwebtoken');



module.exports = (req, res, next) => {

    let token = req.headers['token-key'];

    jwt.verify(token, "secretkey123", function (err, decoded) {
        if (err) {
            res.status(401).json({ status: "unauthorized" });
        } else {
            //get user name from decoded token and add with req header
            let userName = decoded['data']['userName'];
            req.headers.userName = userName

            next();
        }
    });
};

*/

