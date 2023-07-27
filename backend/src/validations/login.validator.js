const Joi = require("Joi")


const loginValidationschema = Joi.object().keys({

    email: Joi.string()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }),

    password: Joi.string()
        .required()

})

module.exports = {
    loginValidationschema
}