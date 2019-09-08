import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  Avatar,
  CardHeader,
  Button,
  Link,
  Grid
} from "@material-ui/core";
import "./index.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    avatar: {},
    column: {
      padding: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(1),
      color: "#1da1f2",
      textTransform: "none",
      fontWeight: 600,
      borderRadius: 25
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

export default function FollowerSuggestionCard() {
  const classes = useStyles();
  return (
    <Card>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              aria-label="Recipe"
              src="https://scontent.fist1-2.fna.fbcdn.net/v/t1.0-1/p100x100/53475226_10218930539042825_9178500683857395712_n.jpg?_nc_cat=104&_nc_oc=AQmqJwIV1idrkjFJ4KxOST_pPI9FnF72ogUxBV37sxWz05sMU3pQdRzsSXpiBSAMKxg&_nc_ht=scontent.fist1-2.fna&oh=084db3099dd99ff1066cfba0354b0f2f&oe=5E0C703A"
              className={classes.avatar}
            />
          }
          title="Ali Şahin"
          subheader="@whippers"
          action={
            <Button variant="outlined" className={classes.button}>
              Takip et
            </Button>
          }
        />
        <CardHeader
          avatar={
            <Avatar
              aria-label="Recipe"
              src="https://scontent.fist1-2.fna.fbcdn.net/v/t1.0-1/p100x100/53475226_10218930539042825_9178500683857395712_n.jpg?_nc_cat=104&_nc_oc=AQmqJwIV1idrkjFJ4KxOST_pPI9FnF72ogUxBV37sxWz05sMU3pQdRzsSXpiBSAMKxg&_nc_ht=scontent.fist1-2.fna&oh=084db3099dd99ff1066cfba0354b0f2f&oe=5E0C703A"
              className={classes.avatar}
            />
          }
          title="Ali Şahin"
          subheader="@whippers"
          action={
            <Button variant="outlined" className={classes.button}>
              Takip et
            </Button>
          }
        />
        <CardHeader
          avatar={
            <Avatar
              aria-label="Recipe"
              src="https://scontent.fist1-2.fna.fbcdn.net/v/t1.0-1/p100x100/53475226_10218930539042825_9178500683857395712_n.jpg?_nc_cat=104&_nc_oc=AQmqJwIV1idrkjFJ4KxOST_pPI9FnF72ogUxBV37sxWz05sMU3pQdRzsSXpiBSAMKxg&_nc_ht=scontent.fist1-2.fna&oh=084db3099dd99ff1066cfba0354b0f2f&oe=5E0C703A"
              className={classes.avatar}
            />
          }
          title="Ali Şahin"
          subheader="@whippers"
          action={
            <Button variant="outlined" className={classes.button}>
              Takip et
            </Button>
          }
        />
        <a href="#" className="link" style={{ color: "#1da1f2 " }}>
          <Grid item xs={12}>
            <p className={classes.paper}>Daha fazla goster</p>
          </Grid>
        </a>
      </Card>
    </Card>
  );
}
