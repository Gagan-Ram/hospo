const {authorization} = require("../models/index.models")
const jwt = require('jsonwebtoken')

const  bcrypt = require("bcrypt")

const encryptPassword = async (pass) => {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash( pass, salt )
    console.log(hashedPassword);
    return hashedPassword
}

const verifyPassword = async ( enterdPassword, hashedPassword ) => {

    // returns boolean
    const passw = await bcrypt.compare( enterdPassword, hashedPassword )
    return passw

}

const generateToken = ( email ) => {
    const payload = { email };
    const secret = "process.env.SECRET"
    const options = { expiresIn : "1h" }

    console.log("In generate Tokens\n")
    try{
        console.log("Inside generate Tokens try block \n")
        const token =  jwt.sign( payload, secret, options )

        return token
    
    }
    catch ( error ){
        throw error
    }
    
}


const signup = async ( body ) => {

    try{
        const hashedpassword = await encryptPassword( body.password )

        const user = new authorization ( {...body, password: hashedpassword} )
        const newUser = await user.save()
        return newUser
    }
    catch(error){
        throw error
    }
}

const login = async ( body ) => {
    const {email,  password } = body
    console.log("email and password---> "+ email + password );

    try {

        const dbPassword = await authorization.findOne( {email : email} , {password: 1 , _id : 0} )
        console.log(dbPassword.password);

        // if( !dbPassword ){
        //     return {
        //         isLoggedin : false
        //     }
        // }

        const checkPassword = await verifyPassword( password , dbPassword.password )
        console.log( checkPassword );

        const token = generateToken( email )
        console.log("token---> "+token)

        if( !checkPassword ){
            return {
                isLoggedin : false
            }
        }
        return { 
            isLoggedin : true,
            token : token 
        }

    } catch (error) {
        throw error
    }
}

module.exports = {
    autherizationService: {
        signup,
        login
    }
}