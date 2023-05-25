// Dependencies
const userRouter = require('express').Router();
const { signup, login } = require('../controllers/userController');

// routes
userRouter.post('/signup', signup);
userRouter.post('/login', login);

// exports
module.exports = userRouter;
