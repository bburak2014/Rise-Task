import { useState } from "react";
import Grid from "@mui/material/Grid";
import { FormControl, OutlinedInput, MenuItem, Select } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "../card/CartItem";

const List = () => {
  const todos = useSelector((state) => state.todos);
  
   const [searchInput, setSearchInput] = useState("");
  const [selectbox, setSelectbox] = useState(0);
  const [priority, setPriority] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSelect = (e) => {
    setSelectbox(e.target.value);
   };
  return (
    <>
      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2>Job List</h2>
            <p>(3/3)</p>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={0} sx={{ backgroundColor: "#e3e8f1", p: 1 }}>
        <Grid item xs={12} sm={8} sx={{ p: 1, my: 1 }}>
          <FormControl
            fullWidth
            variant="outlined"
            sx={{ backgroundColor: "white", py: 0 }}
          >
            <OutlinedInput
              fullWidth
              id="outlined-adornment-weight"
              value={searchInput}
              onChange={handleChange}
              aria-describedby="outlined-weight-helper-text"
              placeholder="Job Name"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ p: 1, my: 1 }}>
          <FormControl fullWidth sx={{ backgroundColor: "white", py: 0 }}>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={selectbox ?? 0}
              onChange={handleSelect}
            >
              <MenuItem onClick={()=>setPriority("")} value={0}>Priority(all)</MenuItem>
              <MenuItem onClick={(e)=>setPriority(e.target.innerText)} value={10}>Urgent</MenuItem>
              <MenuItem onClick={(e)=>setPriority(e.target.innerText)} value={20}>Regular</MenuItem>
              <MenuItem onClick={(e)=>setPriority(e.target.innerText)} value={30}>Trivial</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        sx={{
          m: 0,
          p: 1,
          width: "100% !important",
          backgroundColor: "#d7e1f5",
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Grid item xs={12} sm={8}>
          Name
        </Grid>
        <Grid item xs={6} sm={2} sx={{ px: 2 }}>
          Priority
        </Grid>

        <Grid item xs={6} sm={2} sx={{ textAlign: "center" }}>
          Action
        </Grid>
      </Grid>
      <Grid container spacing={0} sx={{ m: 0, p: 1 }}>
        <Grid item xs={12} sx={{ p: 1, my: 1 }}>
          {todos.filter(
            (mydt) =>
            mydt.name.toLowerCase().includes(searchInput.toLowerCase()) &&
            mydt.priority.includes(priority) )
            
          .map((item, key) => (
            <CartItem name={item.name} priority={item.priority} id={item.id} key={key} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default List;
