import { Button, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'

 const Basics = () => {
  return (
    <div>
        <h1>Suryadas</h1>
        <Typography variant='h1' color="red">Suryadas</Typography>
        <TextField label='Name' variant='outlined'/><br></br>
        <TextField label='age' variant='standard'/><br></br>
        <TextField label='year' variant='filled'/><br></br>
        <Button variant='outlined' color='secondary' >click</Button><br></br>
        <Button variant='contained' color='success'>click</Button><br></br>
        <Button variant='text' color='error'>click</Button>
       


    </div>
    
  )
}
export default Basics