const Joi = require("joi")


const signUpValidationschema = Joi.object().keys({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }),

    password: Joi.string()
        .required()

})

module.exports = {
    signUpValidationschema
}