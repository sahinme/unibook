import React from "react";
import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
import CollegeCard from "src/components/CollegeCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "start",
      flexWrap: "wrap"
    }
  })
);
let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
export default function Colleges() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          {data.map(value => (
            <Grid key={value} item>
              <CollegeCard></CollegeCard>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
