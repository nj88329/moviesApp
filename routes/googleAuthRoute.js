const  googleLogin  = require('../controllers/authController');
const router = require('express').Router();
const { verifyToken } = require('../middleware/verifyToken')

router.post('/google',verifyToken, googleLogin);


module.exports = router;
