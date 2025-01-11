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
    
   if (props.items1.length>0){

   
    props.items1.map((row) =>{
      let search = row.col1
      let phone = row.col3
      console.log(props.items1,search,phone)
      if(props.items2.length>0){

      
      
      let myArr =[]
      myArr=props.items2.filter(data => 
        String(data.col1).toLowerCase()==(String(search).toLowerCase())
      )
      myArr.length>0 && myArr.map((mydata)=>{
        arr.push({
          'col1':String(mydata.col1),
          // 'col2':String(mydata.col2),
          // 'col3':String(mydata.col3),
          // 'col4':String(mydata.col4),
          'col5':String(phone)} )  
  
      })
      
      setFavImages(arr) //override state with new values

    
    }       
   })
  
  }
  
  
  
   }, [props])
  
 

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