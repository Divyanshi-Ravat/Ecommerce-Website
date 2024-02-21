import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import { cyan } from '@mui/material/colors';

const createData=
 {
   id: "",
 
  title: "",
  price:"",
 
  description:"",
 
  tagline:""

}



 function Createproduct() {
  const [productlist, setproductlist] = React.useState({createData})
  return (
    <>

    {productlist.map((item,index)=>(

    <TableContainer component={Paper} sx={{display:"flex", justifyContent:"centre" , alignItems:"centre"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">TITLE</TableCell>
            <TableCell align="right">PRICE</TableCell>
            <TableCell align="right">DESCRIPTION</TableCell>
            <TableCell align="right">TAGLINE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

           
              <TableCell component="th" scope="row">
              <TextField id="id"   variant="outlined" />
              </TableCell>
             
              <TableCell align="right">
              <TextField id="title"  variant="outlined" sx={{}}/>
              </TableCell>
              <TableCell align="right">
              <TextField id="price" variant="outlined" />
              </TableCell>
              <TableCell align="right">
              <TextField id="description"  variant="outlined" />
              </TableCell>
              <TableCell align="right">
              <TextField id="tagline"  variant="outlined" />
              </TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    {productlist.length-1===index && productlist.length<4 &&
    
    <button >
      <span>Add a product</span>

    </button>
    }
    ))}
    
    </>
  );
}
export default Createproduct;