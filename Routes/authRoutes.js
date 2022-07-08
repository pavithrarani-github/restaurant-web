const express = require('express');
const authRoutes = express.Router();
const User = require('../model/User');
const { hashGenerate } = require('../helpers/hashing');
const { hashValidator } = require('../helpers/hashing');
const { tokenGenerator } = require('../helpers/token');
const authVerify = require('../helpers/authverify');


authRoutes.post("/signup", async (req, res) => {
//checking user already exists
    const userExist = await User.findOne({Phonenumber:req.body.Phonenumber});
    if(userExist){
       return res.send({ 
        status:false,
        errmsg:"Phonenumber already exists" 
    });
    }
    //password hashing
        const hashPassword = await hashGenerate(req.body.Password);
        //create new user
        const user = new User({
            Username: req.body.Username,
            Phonenumber: req.body.Phonenumber,
            Email: req.body.Email,
            Password: hashPassword,
            Confirmpassword: req.body.Confirmpassword
        });
    try {
       //save new user
        const savedUser = await user.save();
        res.send({
            status:true,
            savedUser,
            errmsg:"Signup successfully"
        });
       
        
        }catch (error) {
        res.send(error);
    }
});

authRoutes.post("/login", async (req, res) => {
    try {
        const existingUser = await User.findOne({ Phonenumber: req.body.Phonenumber });
        if (!existingUser) {
            res.send({
               Phonenumberstatus:true,
                errmsg:"Invalid Phonenumber"
            })
        } else {
            const checkUser = await hashValidator(req.body.Password, existingUser.Password);
            if (!checkUser) {
                res.send({
                   Passwordstatus:true,
                    errmsg:"Password is invalid"
                });
            } else {
                const token = await tokenGenerator(existingUser.Phonenumber);
                res.cookie("jwt", token);
                res.send({
                   Username: (existingUser.Username),
                    msg:"Login Successful!",
                    token});
            }

        }
    }
    catch (error) {
        res.send(error);
    }
});

authRoutes.get("/protected", authVerify, (req, res) => {
    res.send("I am Protected");
})

module.exports = authRoutes;