import React from "react";
import {
  Card,
  Grid,
  Chip,
  Avatar,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    },
    chip: {
      margin: theme.spacing(1)
    }
  })
);

export default function QuestionAnswer() {
  let classes = useStyles();
  return (
    <div>
      <Card>
        <Grid style={{ textAlign: "center" }} xs={12}>
          <p>Soru/Cevap</p>
        </Grid>
        <div className={classes.root}>
          <Grid xs={10}>
            <Chip
              avatar={
                <Avatar
                  alt="Natacha"
                  src="https://pbs.twimg.com/profile_images/1071055431215276033/U9-RIlDs_normal.jpg"
                />
              }
              label="Finaller ne zaman bitiyor2"
              onClick={() => {}}
              onDelete={() => {}}
              className={classes.chip}
              variant="outlined"
            />
          </Grid>
          <Grid xs={2}>
            <p>77</p>
          </Grid>
        </div>
        <div className={classes.root}>
          <Grid xs={10}>
            <Chip
              avatar={
                <Avatar
                  alt="Natacha"
                  src="https://pbs.twimg.com/profile_images/1071055431215276033/U9-RIlDs_normal.jpg"
                />
              }
              label="Clickable Deletable Chip"
              onClick={() => {}}
              onDelete={() => {}}
              className={classes.chip}
              variant="outlined"
            />
          </Grid>
          <Grid xs={2}>
            <p>90</p>
          </Grid>
        </div>
      </Card>
    </div>
  );
}
