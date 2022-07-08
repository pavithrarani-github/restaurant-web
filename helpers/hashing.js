const bcryptjs = require("bcryptjs");
const saltRounds = 10;

const hashGenerate = async (Password) =>{
    const salt = await bcryptjs.genSalt(saltRounds);
    const hash = await bcryptjs.hash(Password,salt);
    return hash;

}

const hashValidator = async(Password , hashPassword) => {
    try {
        const result = await bcryptjs.compare(Password,hashPassword);
    return result;
    } catch (error) {
        return false;
    }
    
}

module.exports.hashGenerate = hashGenerate;
module.exports.hashValidator = hashValidator;