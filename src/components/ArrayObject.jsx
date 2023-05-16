import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

const ArrayObject = () => {
    var[name,setNames]=useState([
        {
            name:"suryadas", age:19

        },
        { 
            name:"nakul",age:19
        }

    ]);
    
  return (
    <div>
        <Typography variant='h3'>Table and Array</Typography>
        <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                    <TableCell style={{color:"red"}}>
                    Name
                    </TableCell>
                    <TableCell style={{color:"red"}}>
                    age
                    </TableCell>
                   
                </TableRow>
                
                    
                   
                
                
              </TableHead>
              <TableBody>
               {name.map((values,index)=>{
                return(
                    <TableRow key={index}>
                        <TableCell>{values.name}</TableCell>
                        <TableCell>{values.age}</TableCell>
                    </TableRow>
                )
               })}
              </TableBody>
                
            </Table>
        </TableContainer>
    </div>
  )
}
export default ArrayObject