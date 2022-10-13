const express = require('express');

const router = express.Router();

const { registerUser } = require('../controllers/authController');

/* Routes - Only one purpose & No validation here,
the validation must be done by creating Helper Function outside of Route Handlers in our Controllers
& calling it inside of the middleware stack or pipeline
*/
router.get('/users/registerUser', registerUser);

module.exports = router;
