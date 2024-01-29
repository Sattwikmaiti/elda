
const express=require("express");
const router = express.Router();
const User = require("../models/User.js");
const Booking = require("../models/Booking.js");
//const nodemailer = require('nodemailer');

//  register of user 
router.post("/register", async (req, res) => {
  
/*  
This is the code for sending mail to the user from the backend for otp verification.
This part is commented out because it requires the mailid and password of the sender due to security perpose.


    \
    const transporter = nodemailer.createTransport({
             
              service: 'gmail.com',
              auth:{
                  user:'user_mail_id',
                  pass:'password'
              }
            });
            console.log(transporter)
    
    
            const info = await transporter.sendMail({
              from: '"Sender_Name" <sender_email>', // sender address
              to: `${req.body.email}`, // list of receivers
              subject: "OTP For Elda Health", // Subject line
              text: "Welcome To ELDA HEALTH", // plain text body
              html: " YOUR OTP : 12345",
           
            })
            console.log("Message sent: %s", info.messageId); 
            
            */
        const newUser = new User({
         username: req.body.username,
         phone : req.body.phone,
          email: req.body.email,
          bookings : []
          
    
        });
    
        const user = await User.findOne({ email :req.body.email });
        
        if (user) {
          res.status(500).json("error");
    
        } else {
          try {
            const user= await newUser.save();
            
              console.log("user registered")
              res.status(201).json(user);
            } catch (err) {
              console.log("error")
              res.status(500).json(err);
            }
          
        }
      
        
      });


      router.put('/booking',async(req,res)=>{


        const new_booking=new Booking({
          Bookingid:req.body.Bookingid,
          startdate:req.body.startdate,
          duration:req.body.duration,
          timeslot:req.body.timeslot,
          totalcost:req.body.totalcost,
          paymenttype:req.body.paymenttype,
        
          
          status:req.body.status,
          yoga_trainer_id:req.body.yoga_trainer_id
        })

         
        try {
           
            const user = await User.findOne({ email: req.body.email });
        
            
            if (user) {
              
              user.bookings.push(new_booking);
        
              
              await user.save();
        
              res.status(200).json({ message: 'Booking added successfully' });
            } else {
              res.status(404).json({ message: 'User not found' });
            }
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
          }

  


      })



module.exports = router;