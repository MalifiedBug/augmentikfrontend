import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useContext } from "react";
import { MainContext } from "./App";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,   
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function createData(city, url, description) {
  return { city, url, description };
}


export default function Dash() {
  //for modal

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const admin = window.localStorage.getItem('admin')
  
  const {data} = useContext(MainContext);

  const rows = data.map((ele,index)=>createData(ele.city,ele.url,ele.description))


  return (
    <div>
        {admin==="true"?
        <>
        <button onClick={()=>{return <BasicModal open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen}/>}} className="border p-2 bg-sky-400 hover:bg-sky-500 active:bg-sky-600 text-white">Add City, Image and Description +</button>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Sr. No.</StyledTableCell>
                  <StyledTableCell align="left">City</StyledTableCell>
                  <StyledTableCell align="left">Image Url</StyledTableCell>
                  <StyledTableCell align="left">Description</StyledTableCell>
                  <StyledTableCell align="left">Options</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <>
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.city}</StyledTableCell>
                      <StyledTableCell align="right" ><p className="max-w-readable overflow-hidden" >{row.url}</p></StyledTableCell>
                      <StyledTableCell align="right">
                        {row.description}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <button
                          onClick={() => {handleOpen()}}
                          className="text-orange-500 border p-1 rounded-lg hover:text-white hover:bg-orange-600 active:bg-orange-700"
                        >
                          Edit
                        </button>
                        <button className="text-red-500 border p-1 rounded-lg hover:text-white hover:bg-red-600 active:bg-red-700">
                          Delete
                        </button>
                      </StyledTableCell>
                    </StyledTableRow>
                    <BasicModal id={index} open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen}/>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    </>:<h1>Get Admin Permission</h1>}
    
    </div>
  )
}
 

 function BasicModal({id,open,setOpen,handleClose,handleOpen, row}) {
    const {data} = useContext(MainContext);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col gap-2">
          <input value={data[id].city} className="border-2 p-1 rounded-lg" placeholder="enter city"></input>
          <input value={data[id].url} className="border-2 p-1 rounded-lg" placeholder="image url"></input>
          <input value={data[id].description} className="border-2 p-1 rounded-lg" placeholder="description"></input>
          <button className="border-2 bg-sky-500 rounded-lg">Submit</button>
        </Box>
      </Modal>
    </div>
  );
}