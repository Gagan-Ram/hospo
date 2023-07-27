const router = require('express').Router()

const {authorizationController} = require("../controllers/index.controllers")

const { signUpValidationschema } = require("../validations/signUp.validator");
const { loginValidationschema } = require("../validations/login.validator");

const { validateSchema } = require("../middlewares/signUp.middleware");

const validateUser = validateSchema(signUpValidationschema);
const validateUserLogin = validateSchema(loginValidationschema);


router.post('/signup', validateUser, authorizationController.postSignup )

router.post('/login', validateUserLogin, authorizationController.postLogin )


module.exports = router