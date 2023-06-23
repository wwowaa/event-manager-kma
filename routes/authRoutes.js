const { Router } = require("express");
const authContoller = require("../controllers/authController");

const router = Router();

<<<<<<< HEAD
router.get("", authContoller.auth_get);
router.post("", authContoller.auth_post);
router.get("/signup", authContoller.signup_get);
router.post("/signup", authContoller.signup_post);
router.get("/auth", authContoller.auth_get);
router.post("/auth", authContoller.auth_post);
router.get("/signout", authContoller.signout_get);
=======
router.get('', authContoller.auth_get);
router.post('', authContoller.auth_post);
router.get('/signup', authContoller.signup_get);
router.post('/signup', authContoller.signup_post);
router.get('/auth', authContoller.auth_get);
router.post('/auth', authContoller.auth_post);
router.get('/signout', authContoller.signout_get);
router.get('/currentuser', authContoller.current_user_get );
>>>>>>> 1a07db856a898e715a9f9537179844807bc730ee

module.exports = router;
