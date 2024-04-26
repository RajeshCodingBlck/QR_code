const express= require("express");
const {Signup, verify} = require("../Controller/Signup_controller");
const QrController = require("../Controller/QrController");
const router= express.Router();

router.post('/',QrController);

router.get('/verify', verify);
module.exports=router;
