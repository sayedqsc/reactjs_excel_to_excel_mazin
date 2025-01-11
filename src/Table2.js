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


  const [favImages, setFavImages] = useState([]);
  

 useEffect(() => {
  var arr = [...favImages]; //copy array by value
  // arr.push(imageId)
 
  props.data.map((row) =>{

    if(Object.entries(row).length>9)
    {
      arr.push({
        'col1':String(Object.entries(row)[1][1]),
        'col2':String(Object.entries(row)[2][1]),
        'col3':String(Object.entries(row)[4][1]),
        'col4':String(Object.entries(row)[9][1]),
      } )  
      
      }

    })

// setFavImages(arr) //override state with new values

const uniqueArray = arr.filter((o, index, myarr) =>
  myarr.findIndex(item => JSON.stringify(item) === JSON.stringify(o)) === index
);
setFavImages(uniqueArray) //override state with new values


 }, [])


 useEffect(() => {
 
 }, [favImages])
 
 

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

    {favImages &&(
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
       
          {favImages.map((row,index) => { return (
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