const jwt = require('jsonwebtoken');

//generate token
const tokenGenerator = (Phonenumber) =>{
    const token = jwt.sign(
        {Phonenumber},
        process.env.JWT_KEY
)
return token;
}

//validate token
const tokenValidator = (token) => {
    try {
        const data = jwt.verify(token,process.env.JWT_KEY);
        return data;
    } catch (error) {
        return false;
    }
    
}

module.exports.tokenGenerator = tokenGenerator;
module.exports.tokenValidator = tokenValidator;