import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import { deleteTodo,updateTodo } from "../../redux/todoSlice";
import { useDispatch,useSelector } from "react-redux/es/exports";
import DeleteDialog from "../modal/DeleteDialog";
import UpdateDialog from "../modal/UpdateDialog";
function CartItem({name,priority,id }) {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [name1, setName] = React.useState(name);
  const [priority1, setPriority] = React.useState(priority);

  const dispatch=useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleDelete=()=>(
    dispatch(deleteTodo({id})),
    setOpen(false)
  )
   const handleUpdate=()=>(
    
     dispatch(updateTodo({id:id,name:name1,priority:priority1})),
      setOpen1(false)
  )
  return (
    <div>
      <Grid container spacing={1} sx={{ my: 1 }}>
        <Grid item xs={12} md={8}>
          <p>{name}</p>
        </Grid>
        <Grid item xs={8} md={2}>
          <Box
            sx={{
              p: 1,
              bgcolor:
                priority === "Urgent"
                  ? "#ff4b4b"
                  : priority === "Regular"
                  ? "#ff8d00"
                  : "#396dff",
              gridTemplateColumns: { md: "1fr 1fr" },
              gap: 1,
              maxWidth: 80,
              maxHeight: 24,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              borderRadius: 2,
            }}
          >
            <p>{priority}</p>
          </Box>
        </Grid>

        <Grid
          item
          xs={4}
          md={2}
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          <IconButton
             onClick={setOpen1}
            sx={{
              borderRadius: 2,
              backgroundColor: "#e5e5e5",
              mx: 1,
              p: "13px",
            }}
          >
            <EditOutlinedIcon />
          </IconButton>
          <IconButton
          onClick={setOpen}
            sx={{
              borderRadius: 2,
              backgroundColor: "#e5e5e5",
              mx: 1,
              p: "13px",
            }}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>{" "}
      <Divider variant="middle" />
      <DeleteDialog open={open} setOpen={setOpen} handleDelete={handleDelete} />
      <UpdateDialog open1={open1} setOpen1={setOpen1} handleUpdate={handleUpdate} setPriority={setPriority} setName={setName} name1={name1} priority1={priority1} />

    </div>
  );
}

export default CartItem;
