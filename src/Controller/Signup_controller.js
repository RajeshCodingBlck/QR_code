const StudentRepo = require("../RepositoryLayer/Student.js");
const  {student, studentService}= require("../ServiceLayer/StudentService.js");
var nodemailer = require("nodemailer");
const dotenv= require("dotenv");
dotenv.config();

const Student_service= new studentService();

async function GetQR(req, res){
   
    //console.log("hello for add Studnet");
     const name= req.body.user_name;
     const  rollno= req.body.user_password;
     const s1=  await new student(name, rollno);
    // console.log(s1);
     await Student_service.addStudent(s1);

     res.send("Student is Added");
     
}


var rand=Math.floor((Math.random() * 100) + 54);
async function Signup(req, res){

   var smtpTransport =  await nodemailer.createTransport({
        service: "gmail",
        auth: {

            user: "premkiryanastore2016@gmail.com",
            pass: "zxsonsknrtxyqacd",
            
        },
        authMethod: 'PLAIN',
    });
    
    console.log(process.env.email);
    

    
   var  host = req.get('host');
   console.log(host);
   var link = "http://" + req.get('host') + "/verify";
   console.log(link);
   var  mailOptions = {

        from:"premkiryanastore@gmail.com",
        to: req.body.user_email,
        subject: "Please confirm your Email account",
        html: ` <h2>Email Verification</h2>
        <p>Dear ${req.body.user_name},</p>
        <p>Thank you for signing up! Please click on the link below to verify your email:</p>
    
        <!-- Replace the 'verificationLink' with the actual link generated in your server-side code -->
        <a href="${link}">Verify Email</a>
    
        <p>If you did not sign up for our service, you can ignore this email.</p>
    
        <p>Best regards,<br>CollegeVala</p>
        `,
    }
    
    await smtpTransport.sendMail(mailOptions, function(error, response) {
            if (error) {
                console.log(error);
                res.end("error");
            } else {
                console.log("Message sent: " + response.message);
                res.end("Email sent");
                
            }
        })
    }

   
    async function verify(req, res){
       
        res.send("<h2>Congratulations, Your Email is Verified!</h2>");
    }

module.exports= {
        Signup,
        verify
    };

