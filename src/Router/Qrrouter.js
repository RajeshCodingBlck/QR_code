const express= require("express");
const Qrcontroller= require("../Controller/QrController.js");

const router= express.Router();

router.post("/QR", Qrcontroller);
// console.log(Qrcontroller);


module.exports=router;
