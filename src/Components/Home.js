import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync } from "../redux/todoSlice";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Container } from "@mui/material";
import Add from './Add/Add';
import List from "./list/list";
const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);
   return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xs={4}>
          <img src="img/logo.png" width={200} alt="logo" />
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>{" "}
      <Divider variant="middle" />
       <Add/>

       <List/>
      </Container>
  );
};
export default Home;
