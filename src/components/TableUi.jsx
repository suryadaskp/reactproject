import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const TableUi = () => {
    var[users,setUsers] = useState([]);
    useEffect(()=>{
         axios.get("http://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response.data);
        setUsers(response.data);
       
    })
    .catch((error)=>console.log(error))
    },[])
   
   
  return (
    <div><br></br><br></br><br/><br/><br/>
        <Typography>Table view</Typography>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"red"}}>
                            Name
                        </TableCell>
                        <TableCell style={{color:"blue"}}>Email</TableCell>
                        <TableCell style={{color:"green"}}>Username</TableCell>
                        

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((value,index)=>{
                          return(
                         <TableRow key={index}>
                         <TableCell >{value.name}</TableCell>
                         <TableCell >{value.email}</TableCell>
                         <TableCell >{value.username}</TableCell>
                         </TableRow>
                          )
                        })
                    }
                    
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default TableUi