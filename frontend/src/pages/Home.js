import React from 'react'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./style.css"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Home = () => {
 
  const navigate=useNavigate();
  return (
    <div>

      <div className="home">
        <div className="top">
          <div className="left">

            Yoga for mind 
            <br />

            Watch our Lead Yoga Therapist, Mrs Uma Subramanian explaining the benefits of Yoga for the mind.

          </div>
          <div className="right">
                       <img src={"https://images.healthshots.com/healthshots/en/uploads/2022/05/11184715/Yoga-for-weight-loss.jpg"} />
          </div>
        </div>
        <p style={{color:'black',fontSize:'2rem',backgroundColor:'pink'}}>Is this for You ?   <Chip onClick={()=>navigate('/product')}label="click here @99 " /></p>
        <div className="bottom">
        <div className="bottom" style={{ display: 'flex', justifyContent: 'center' }}>
    
      <div className="iconWrapper">
        <div className="greyCircle">
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </div>
        <div>Had to Feel Calm because of Stress </div>
      </div>

      
      <div className="iconWrapper">
        <div className="greyCircle">
          <Avatar>
            <EmailIcon />
          </Avatar>
        </div>
        <div>If You have palpations and have stress for more than hour</div>
      </div>

     
      <div className="iconWrapper">
        <div className="greyCircle">
          <Avatar>
            <PhoneIcon />
          </Avatar>
        </div>
        <div>You Had been advised by doctors to stay relaxed </div>
      </div>
    </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
