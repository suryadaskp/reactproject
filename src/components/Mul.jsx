import { TextField } from '@mui/material'
import React, {useState} from 'react'

const Mul = () => {
    var[val,setVal]=useState({id:'',age:'',place:''});
    const inputHandler = (e)=>{
       const{name,value}=e.target
       setVal((val)=>({...val,[name]:value}))
    }
  return (
    <div>
        <TextField name='id' label='id' value={val.id} onChange={inputHandler}></TextField><br></br><br></br>
        id={val.id}<br></br>
        <TextField name='age' label='age' value={val.age} onChange={inputHandler}></TextField>
        <br></br>age={val.age}<br></br>
        <br></br><TextField name='place' label='place' value={val.place} onChange={inputHandler}></TextField><br></br><br></br>
        place={val.place}<br></br>
    </div>
  )
}

export default Mul