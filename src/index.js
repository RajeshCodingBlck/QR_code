const express= require("express");
const router= require("./Router/Qrrouter.js");
const Student_router= require("./Router/Signup_route.js");
const bodyParser= require("body-parser");
const path= require("path");
const dotenv= require("dotenv");
const app= express();

dotenv.config();

const port =process.env.port || 3000;
console.log(process.env.port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", router);
app.use("/signup", Student_router);
app.use("/", Student_router);
app.listen(port, function(err){
    if(err){
        console.log("err in server Starting");
    }else{
        console.log("server is Start" , port);
    }

})




