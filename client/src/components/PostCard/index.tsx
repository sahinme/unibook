import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import { loadCSS } from "fg-loadcss";
import { Icon, Grid } from "@material-ui/core";
import "./index.css";
import PostCardMenu from "./components/PostCardMenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);

interface IPostCardProps {
  postDescription: string;
  userName: string;
  createdDate: string;
  userImagePath: string;
  postContentPath: string;
  likes: number;
}

export default function PostCard(props: IPostCardProps) {
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            aria-label="Recipe"
            src={props.userImagePath}
            className={classes.avatar}
          />
        }
        action={<PostCardMenu />}
        title={props.userName}
        subheader={props.createdDate}
      />
      <CardMedia className={classes.media} image={props.postContentPath} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.postDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid item xs={3}>
          <IconButton aria-label="Add to favorites">
            <Icon className="far fa-heart" />
          </IconButton>
          <span className="icons-count">{props.likes}</span>
        </Grid>
        <Grid item xs={3}>
          <IconButton aria-label="Comment">
            <Icon className="far fa-comment-dots" />
          </IconButton>
          <span className="icons-count">21</span>
        </Grid>
        <Grid item xs={3}>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <span className="icons-count">21</span>
        </Grid>
        <Grid item xs={3}>
          <IconButton aria-label="Repost">
            <Icon className="fas fa-retweet" />
          </IconButton>
          <span className="icons-count">21</span>
        </Grid>
      </CardActions>
    </Card>
  );
}
