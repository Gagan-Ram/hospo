const {autherizationService} = require("../services/index.service")


const postSignup = async (req, res) => {

    const body = req.body

    try{

        const results = await autherizationService.signup(body)
        res.json(results)

    }
    catch(error){
        res.status(500)
        .json({
            message: "Sing up problem at routes"
        })
    }

}

const postLogin = async ( req, res ) => {
    const body = req.body

    try {

        const { isLoggedin, token } = await autherizationService.login( body )
        console.log(isLoggedin);

        if( isLoggedin ){

            const cookieName = "myCookie"
            const cookieValue = token

            res.cookie( 
                cookieName,
                cookieValue,
                {
                    maxAge : 60 * 60 * 1000,
                    httpOnly : true
                }
              )

            res.status(200).json({
                message:"You are a verified user",
            })
        }
        else{
            res.status(400).json({message:"You are not a verified user"})
        }
        
    } catch (error) {
        res.status(500)
        .json({
            message: "log in problem at routes",
        })  
    }
}

module.exports = {

    postSignup,
    postLogin
}