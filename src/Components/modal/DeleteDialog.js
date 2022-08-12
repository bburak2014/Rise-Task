import * as React from 'react';
 import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styled from '@emotion/styled';
export default function DeleteDialog({ open, setOpen, handleDelete }) {

 
  const Button = styled.button`
   background: ${props => props.primary ? "#ff6380" : "whitesmoke"};
  color: ${props => props.primary ? "white" : "gray"};
  border: ${props => props.primary ? "1px solid #ff6380" : "1px solid gray"};
  &:hover {
  
    background: ${props => props.primary ? "white" : "gray"};
    color: ${props => props.primary ? "#ff6380" : "whitesmoke"};
    border: ${props => props.primary ? "1px solid #ff6380" : "1px solid gray"};
  }
  cursor:pointer;
  font-size: 12px;
  margin: 1em;
  padding:0.75em 4em 0.75em 4em;
  border-radius: 3px;
`;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Dialog

        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ display: "flex", px: 8, flexDirection: " column", justifyContent: "center", alignItems: "center" }} id="alert-dialog-title">
          <ErrorOutlineIcon sx={{ fontSize: 40, color: "#ff6380" }} />
        </DialogTitle>

        <DialogContent >
          <b>Are you sure you want to delete it?</b>

        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }} >
          <Button   onClick={handleClose}>Cancel</Button>
          <Button  primary onClick={handleDelete} autoFocus>
            Approve
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}