import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from '@emotion/styled';
import { OutlinedInput, FormControl, Grid, FormHelperText, Select, MenuItem } from '@mui/material';

export default function FormDialog({ open1, setOpen1, setPriority,name1,setName,handleUpdate,priority1 }) {
  const [selectbox, setSelectbox] = useState(10);

  const handleSelect = (e) => {
    setSelectbox(e.target.value);
  };
  const handleClose = () => {
    setOpen1(false);
  };
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
  return (
    <div>

      <Dialog open={open1} onClose={handleClose}>
        <DialogTitle>Job Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Job Name
          </DialogContentText>
          <OutlinedInput 
            autoFocus
            margin="dense"
            id="name"
            type="email"
            fullWidth
            variant="standard"
            value={name1}
            onChange={(e)=>setName(e.target.value)}
          />
          <FormControl sx={{width:"100%" }} variant="outlined">
            <FormHelperText id="outlined-weight-helper-text" sx={{ fontSize: 16, color: "#a19c9c" }}>Job Priority</FormHelperText>
            <Select fullWidth
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={priority1==="Urgent" ? 10:(priority1==="Regular" ? 20:30) }
              onChange={handleSelect}
            >
              <MenuItem onClick={(e) => setPriority(e.target.innerText)} value={10}>Urgent</MenuItem>
              <MenuItem onClick={(e) => setPriority(e.target.innerText)} value={20}>Regular</MenuItem>
              <MenuItem onClick={(e) => setPriority(e.target.innerText)} value={30}>Trivial</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
              <Button onClick={handleClose}>Cancel</Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
              <Button primary onClick={handleUpdate}>Save</Button>
            </Grid>
          </Grid>


        </DialogActions>
      </Dialog>
    </div>
  );
}