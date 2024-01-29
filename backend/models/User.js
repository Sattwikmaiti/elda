const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String,  default:'' },
    email: { type: String, required: true, unique: true },
    phone: { type: String, default:''},
   
    
   
    bookings:{
      type:Array,default:[]
  }
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);