// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const userRouter = require('./src/routes/userRoute');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/user', userRouter);
app.use('/api/user', userRouter);

module.exports = app;
