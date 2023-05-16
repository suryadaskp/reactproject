import { Button, TextField, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React,{useState} from 'react'

const StateBaics = () => {
    var [pname,setPname]=useState("Class");
     var[data,setData]=useState();
    const changeName = () =>{
        console.log("clicked");
        setPname(data);
    }  
     const readVal=(data)=>{
       
        setData(data.target.value);
        console.log(data);
        
        }
       
    
      return (
      <div><br></br><br>
      </br><br>
      </br>
       
       <br></br> <TextField variant='outlined' label='name' onChange={readVal}></TextField><br></br>
        <Button variant='contained' onClick={changeName}>Change</Button>
         <Typography variant='h3'>welcome {pname}</Typography>
       </div>
  )
}

export default StateBaics