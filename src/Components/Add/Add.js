import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import {
  FormControl,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
  Button
  
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux/es/exports";
import { addTodo } from "../../redux/todoSlice";
import TransitionAlerts from '../Alert/TransitionAlerts';

const Add = () => {
   const dispatch = useDispatch();
 
  const [searchInput, setSearchInput] = useState("");
  const [selectbox, setSelectbox] = useState(10);
  const [priority, setPriority] = useState("Urgent");
  const [openalert, setOpenalert] = useState(false);


  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSelect = (e) => {
    setSelectbox(e.target.value);
   };
  const handleAdd=()=>{
    searchInput.length>0 ?
    dispatch(addTodo({
      name:searchInput,
      priority:priority

    })):setOpenalert(true)
  }
   return (
    <Grid container spacing={2} sx={{ my: 2 }}>
      <Grid item xs={12}>
        <h2>Create New Job</h2>
        <TransitionAlerts openalert={openalert} setOpenalert={setOpenalert}/>
      </Grid>
      <Grid item xs={12} md={8}>
        <InputLabel shrink sx={{ fontSize: 22, color: "#a19c9c" }}>
          Job Name
        </InputLabel>
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            fullWidth
            id="outlined-adornment-weight"
            value={searchInput}
            onChange={handleChange}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder="Search..."
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={8} md={2}>
        <InputLabel shrink sx={{ fontSize: 22, color: "#a19c9c" }}>
          Job Priority
        </InputLabel>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={selectbox ?? 0}
            onChange={handleSelect}
          >
            <MenuItem onClick={(e)=>setPriority(e.target.innerText)} value={10}>Urgent</MenuItem>
            <MenuItem onClick={(e)=>setPriority(e.target.innerText)} value={20}>Regular</MenuItem>
            <MenuItem onClick={(e)=>setPriority(e.target.innerText)} value={30}>Trivial</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        md={2}
        
        style={{ display: "flex", alignItems: "flex-end" }}
      >
        <Button
          variant="contained"
          sx={{ height: "100%", width: "100%", maxHeight: 56 }}
          startIcon={<AddIcon sx={{ fontSize: 20 }} />}
          onClick={handleAdd}
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
};
export default Add;
