var express= require("express");
var QRCode = require('qrcode');

async function generateQr(message){
    let url_image;
    // QRCode.toString(message, function (err, url) {
    //   console.log(url)
    //   url_image=url;
    // })
   // const generateQR = async text => {

   QRCode.toString(message,{type:'terminal'}, function (err, url) {
    console.log(url)
  })

      try {
        var url= await QRCode.toDataURL(message);
        console.log(url);
        return url;
      } catch (err) {
        console.error(err)
      }
      
    //}
    
    //  return url_image;
}

module.exports= generateQr;

