const {tokenValidator} = require('./token');
 //middleware
 module.exports = async function(req,res,next){
     try {
        const{jwt} = req.cookie;
        const valid = await tokenValidator(jwt);
        if(valid){
            next();
        }else{
            res.send("Access denied");
        }
     } catch (error) {
         res.send(error);
     }
     
 }