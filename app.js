const express = require("express");
const router = require("./src/routes/api");

const app = express();

const bodyParser = require('body-parser');

//security middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');
const xss = require('xss-clean');

//database
const mongoose = require('mongoose');

//Security
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(xss())

//app.use(express.json({ limit: '50mb' }));
//app.use(express.urlencoded({ limit: '50mb' }));

// JSON Parser
app.use(bodyParser.json())


// Rate Limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 300 });
app.use(limiter);