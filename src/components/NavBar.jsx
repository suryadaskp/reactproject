import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
             
                <Typography component="div" sx={{flexGrow:1}} align='left'>Trial App</Typography>
                
                
                <Button  gradiant><Link to='/s' style={{color:'white', textDecoration:'none'}} >state</Link></Button>
                <Button ><Link to='/t' style={{color:'white', textDecoration:'none'}}>Table</Link></Button>
                <Button ><Link to='/ax' style={{color:'white', textDecoration:'none'}}>view</Link></Button>
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar