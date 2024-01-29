import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css"
const Login = () => {
  const [email, setEmail] = useState('Enter Your Email');
  const [username, setUsername] = useState('Enter Your Username');
  const [phoneNumber, setPhoneNumber] = useState('Enter Your Phone Number');
  const [otp, setOtp] = useState('Enter Otp');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const navigate=useNavigate();
  const handleLogin = () => {
    
    console.log('Logging in with:', { email, username, phoneNumber, otp });
    
    navigate('/home')
       

  };

  const handleSendOtp = () => {
    
    setIsOtpSent(true);
  };
  return (
    <center>
    <div className="login">
              <div>

     <center><h2>Login to Your Account</h2></center> 

     <div className="divwrapper">
     <div className="divid">
     
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

     </div>

     <div className="divid">
    
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

     </div>
     
      
  <div className="divid">

      <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

  </div>
      

     </div>
    

      {!isOtpSent ? (
        <button onClick={handleSendOtp}>Send OTP</button>
      ) : (
        <>
        <div className="divid">
        
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />

        </div>
         
        </>
      )}

      <button onClick={handleLogin}>Login</button>
    </div>
      
    </div>
    </center>
  )
}

export default Login
