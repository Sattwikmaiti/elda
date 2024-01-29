import React,{useState} from 'react'
import "./style.css"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from "axios"
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
const Product = () => {
 
  const [time, settime] = React.useState('8am-10am');
  const [value, setValue] = React.useState(null);

  const handletime = (event, newtime) => {
    if (newtime !== null) {
      settime(newtime);
    }
  };
  const makerequest=async()=>{
    try{
      await axios.post("http://localhost:8000/api/checkout",{price_id:"price_1NQAU0SBTEpl1BvvyFvVfNuS"}).then((response)=>  window.location.assign(response.data.url))
  //console.log(response.data)
    }catch(err)
    {
      console.log(err)
    }
       
    
      
     
      }
      
  
    

  const data=[
    {
      Bookingid:"ELDA-Premium",
      duration:"6 month",
      originalcost:"5000",
      totalcost:"3000", 
      paymenttype:"emi/one-time",



    },
     {
      Bookingid:"ELDA-Special",
      duration:"3 month",
      originalcost:"2000",
      totalcost:"1000", 
      paymenttype:"one-time",
      


    },
    
    {
      Bookingid:"ELDA-Normal",
      duration:"1 month",
      originalcost:"1000",
      totalcost:"599", 
      paymenttype:"one-time",
      


    }
  ]

  
  return (
    <div className="product">
      <div className="left">
        <div className="img">
          <p>
             Your Elda Journey Starts Here 
          </p>

          <img src={"https://images.healthshots.com/healthshots/en/uploads/2022/05/11184715/Yoga-for-weight-loss.jpg"} />

        </div>
        <div className="content">

        </div>

      </div>
      
      <div className="right">
                <h5>Choose Options</h5>

                {
                  data.map((item)=> {
                      

                    return (
                      <div className="product__info">
                        <p>
                          <div>Module : {item.Bookingid}</div>
                         <div>  Duration: {item.duration}</div>
                          <div style={{  textDecoration: "line-through"}}>Rs {item.originalcost}</div>
                          <div>New Price : Rs {item.totalcost}</div>
                          <div>Available in {item.paymenttype}</div>
                          
                           
                        </p>
                        <button>select</button>
                      </div>
                    )

                  } )
                }



      </div>
      <div className="down">
      
         <div className="datepicker">
          <div>Start Date</div>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
    </LocalizationProvider>

         </div>
         <div className="timeslot">
         <div>Time Slot</div>
         <Stack direction="row" spacing={4}>
      <ToggleButtonGroup
        value={time}
        exclusive
        onChange={handletime}
        aria-label="text time"
      >
        <ToggleButton value="8am-10am" aria-label="left aligned">
        8am-10am
        </ToggleButton>
        <ToggleButton value="12pm-1pm" aria-label="centered">
        12pm-1pm
        </ToggleButton>
        <ToggleButton value="4pm-5pm" aria-label="right aligned">
        4pm-5pm
        </ToggleButton>
      </ToggleButtonGroup>

      
    </Stack>

         </div>
         <button onClick={makerequest} className="payment">Pay</button>
      </div>
      
    </div>
  )
}

export default Product
