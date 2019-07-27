import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Avatar, TextField, Icon, Button } from "@material-ui/core";
import { loadCSS } from "fg-loadcss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2)
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60
    }
  })
);

export default function CreatePost() {
  const classes = useStyles();
  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);
  return (
    <div>
      <Paper className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Avatar
              alt="Remy Sharp"
              src="https://media.licdn.com/dms/image/C4D03AQFyZ8hZAspPzg/profile-displayphoto-shrink_100_100/0?e=1569456000&v=beta&t=2_tfUAMECP2IGb6pQXDyjTxEVJDpfRgVm2iJGc-JOZE"
              className={classes.bigAvatar}
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              id="standard-full-width"
              style={{ margin: 8 }}
              placeholder="Gonderi Paylas"
              helperText="Neler oluyor?"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid
            style={{ marginLeft: 20 }}
            container
            justify="flex-start"
            spacing={2}
          >
            <Grid item>
              <a href="#">
                <Icon
                  style={{ color: "rgba(29,161,242,1.00)" }}
                  className="far fa-image"
                />
              </a>
            </Grid>
            <Grid item>
              <a href="#">
                <Icon
                  style={{ color: "rgba(29,161,242,1.00)" }}
                  className="far fa-paper-plane"
                />
              </a>
            </Grid>
            <Grid item>
              <a href="#">
                <Icon
                  style={{ color: "rgba(29,161,242,1.00)" }}
                  className="fas fa-video"
                />
              </a>
            </Grid>
            <Grid item>
              <a href="#">
                <Icon
                  style={{ color: "rgba(29,161,242,1.00)" }}
                  className="far fa-smile"
                />
              </a>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                color="primary"
                style={{ backgroundColor: "#1976d2", marginLeft: "21em" }}
              >
                Paylaş
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
