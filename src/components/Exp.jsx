import { TextField, Typography } from '@mui/material'
import React ,{useState}from 'react'

const  Exp = ()=> {
    
    var[val,setVal]=useState();
    var[val1,setVal1]=useState();
    const readData=(val)=>{
      setVal(val.target.value);
      
    }
    const readData1=(val1)=>{
        setVal1(val1.target.value);
        
      }
  return (
    <div>
        <TextField label='name' onChange={readData} ></TextField><br></br><br></br>
        <Typography color="red"> {val} </Typography> 
        <TextField label='last name' onChange={readData1} ></TextField><br></br>
        <Typography color="blue"> {val1} </Typography> 
      
    </div>
  )
}

export default Exp