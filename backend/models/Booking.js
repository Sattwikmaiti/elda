const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    Bookingid: { type: String,  default:'' },
    startdate: { type: String,  },
    duration: { type: String,  },
    timeslot: { type: String,  },  
    totalcost: { type: String,  },
    paymenttype: { type: String,  },
    yoga_trainer_id:{type:String},
    status:{type:String ,default:'pending'},
    
   
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);