//here we add the logic for the user to create an account or login an existing account

//Route for user login
const loginUser = async(req,res)=>{

}

//Route for user register
const registerUser = async(req,res)=>{
    res.json({
        msg : "Register API working"
    })
}

//Route for admin login
const adminLogin = async(req,res)=>{

}


export {
    loginUser,
    registerUser,
    adminLogin
}