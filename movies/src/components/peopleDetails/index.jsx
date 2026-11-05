import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import PersonIcon from "@mui/icons-material/Person"
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const PeopleDetails = ({ people }) => {

  return (
    <>
      <Typography variant="h5" component="h3">
        {people.name}
      </Typography>

      <Grid container spacing={5} style={{ padding: "30px" }}>
        <Grid size={{xs: 3}} style={{ marginRight: "30px"}}>
          <img src={`https://image.tmdb.org/t/p/w500/${people.profile_path}`} alt={people.name} style={{}}/>
        </Grid>
        <Grid size={{xs: 7}} style={{ marginLeft: "30px"}}>
          <Typography variant="h6" component="p">
        {people.biography}
      </Typography>
        </Grid>
      </Grid>

      

      <Paper 
        component="ul" 
        sx={{...root}}
      >
      </Paper>
      </>
  );
};
export default PeopleDetails ;
