import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

const TableArray = () => {
    var[names,setNames]=useState(["suryadas","nakul","nikhil","nimisha"]);
    
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
                   
                </TableRow>
              </TableHead>
              <TableBody>
               {names.map((values,index)=>{
                return(
                    <TableRow>
                        <TableCell>{values}= {index}</TableCell>
                    </TableRow>
                )
               })}
              </TableBody>
                
            </Table>
        </TableContainer>
    </div>
  )
}

export default TableArray