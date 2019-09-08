import React from "react";
import { Grid, makeStyles, Theme, createStyles } from "@material-ui/core";
import FollowerSuggestionCard from "src/components/FollowerSuggestion";
import NotifyTab from "./components/NotifyTab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "start",
      flexWrap: "wrap"
    }
  })
);

export default function Notifications() {
  let classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <FollowerSuggestionCard></FollowerSuggestionCard>
          </Grid>
          <Grid item xs={6}>
            <NotifyTab />
          </Grid>
          <Grid item xs>
            <FollowerSuggestionCard></FollowerSuggestionCard>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
