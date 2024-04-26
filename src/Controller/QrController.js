const servicelayer= require("../ServiceLayer/QRBussinessLogic.js");
const request = require('request');
const path= require("path");

const fs = require("fs");
async function getQR(req, res){

    //console.log(req.name);
    let message= req.body.user_name +" , "+ req.body.user_email;
    

    const url= await servicelayer(message);

   // console.log(typeof url);
    //  res.send(url.then((data)=> data.json()).then((data)=>{
    //       console.log(data);
    //       return data;
    //  }));
    // console.log(url.split(",")[1]);
     
    
     let buff = Buffer.from(url, 'base64');
    //  Jimp.read(buff, (err, res1) => {
    //   if (err) throw new Error(err);
    //   res1.quality(5).write("./img.png");
    //   //console.log("work");
    // });
    const path= __dirname+ "/img.jpg";
      fs.writeFileSync(path, buff);

       
       console.log(path);
       res.set("Content-Type", "text/html");
       res.send("<img src='" + path + "'>");


     


}


module.exports= getQR;
