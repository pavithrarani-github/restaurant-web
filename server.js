const express = require("express");
const app = express();
const authRoutes = require("./Routes/authRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { json } = require("express/lib/response");
dotenv.config();

//DB connection
mongoose.connect(process.env.DB_URL,{useNewUrlParser:true})
.then (() => 
   console.log("DB connected"))
   .catch(err => console.log(err))

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());
app.use(function(req,res,next)
{
    //website you wish to allow to connect for all website
    res.setHeader('Access-Control-Allow-Origin','*');

    //request method you wish to allow
    res.setHeader('Access-Control-Allow-Methods','GET','POST','DELETE','UPDATE');

    //request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,Content-type');

    //set to true if you need the website to include cookies in the request sent
    res.setHeader('Access-Control-Allow-Credentials',true);

    next();

})



//routes
app.use("/api/user",authRoutes);

app.listen(3100,() => {
    console.log("Server running at 3100");
})