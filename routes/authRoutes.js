const { Router } = require('express');
const authContoller = require('../controllers/authController'); 

const router = Router();

router.get('', authContoller.auth_get);
router.post('', authContoller.auth_post);
router.get('/signup', authContoller.signup_get);
router.post('/signup', authContoller.signup_post);
router.get('/auth', authContoller.auth_get);
router.post('/auth', authContoller.auth_post);
router.get('/signout', authContoller.signout_get);

module.exports = router; 