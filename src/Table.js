import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();



  return (
    <>
    {/* <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
       
          {props.data.map((row,index) => { return (
                     <StyledTableRow key={index}>
           
          {
            
          

             Object.entries(row).map((col,ind)=>(
              
                <StyledTableCell component="th" scope="row">
                  {
                      
                       String(Object.entries(row)[ind][1])
                    
                      
                   }
                </StyledTableCell>
          
  
             
            

             
            
          ))

          }
           </StyledTableRow>
          
          )})}

        </TableBody>
      </Table>
    </TableContainer> */}

    {props.data &&(
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
       
          {props.data.map((row,index) => { return (
                     <StyledTableRow key={index}>
           
          {
            
          

             Object.entries(row).map((col,ind)=>(
              
                <StyledTableCell component="th" scope="row">
                  {
                      
                       String(Object.entries(row)[ind][1])
                    
                      
                   }
                </StyledTableCell>
          
  
             
            

             
            
          ))

          }
           </StyledTableRow>
          
          )})}

        </TableBody>
      </Table>
    </TableContainer>

    )}
    
</>
  );
};