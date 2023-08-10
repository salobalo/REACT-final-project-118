import React, { useEffect } from "react";
import RoutesComponent from "./Routes";
// import { Link } from "react-router-dom";
// import { isUserAdmin } from "./helpers";
import { useUser } from "./hooks";
import { Grid } from "@mui/material";
import { Header } from "./components/header";
import { useDispatch } from "react-redux";
import { fetchHomePageProducts } from "./redux";

const App = () => {
  const { formValues } = useUser();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomePageProducts());
  }, []);
  return (
    <Grid sx={{ minHeight: "100vh" }}>
      <Grid item>
        <Header />
      </Grid>
      <Grid
        item
        sx={{
          paddingTop: 20,
          minHeight: "100vh",
          width: "100%",
          pb: 10,
          backgroundColor: "f5f5f5,",
        }}
      >
        <RoutesComponent />
      </Grid>
    
    </Grid>
  );
};

export default App;
