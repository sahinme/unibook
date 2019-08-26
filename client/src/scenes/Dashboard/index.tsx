import * as React from "react";
import PostCard from "src/components/PostCard";
import { Grid, makeStyles, Theme, createStyles } from "@material-ui/core";
import CreatePost from "src/components/CreatePost";
import OpenedSidebar from "src/components/OpenedSidebar";
import QuestionAnswer from "src/components/QuestionAnswer";
import FollowerSuggestionCard from "src/components/FollowerSuggestion";

let data = [1, 2, 3, 4, 5, 6, 7, 6, 3, 2];

interface IDashboardProps {
  history: any;
  path: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    },
    root2: {
      display: "flex",
      justifyContent: "end",
      flexWrap: "wrap"
    },
    chip: {
      margin: theme.spacing(1)
    }
  })
);

export default function Dashboard(props: IDashboardProps) {
  let classes = useStyles();

  const columns = data.map((item: any) => {
    return (
      <Grid style={{ marginTop: 10 }}>
        <PostCard
          key={item}
          postDescription="asdasdsadasd"
          likes={20}
          postContentPath="https://cn.opendesktop.org/img/e/c/2/3/b016ec2bcb8eb01cd58bf56b1f929e5f6080.jpg"
          userImagePath="https://pbs.twimg.com/profile_images/1133530124186476545/Od_DxKfq_bigger.jpg"
          createdDate="2 saat once"
          userName="freeadmiral"
        />
      </Grid>
    );
  });

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid /* style={{ margin: "0px" }} */ container spacing={3}>
          <Grid item xs>
            <OpenedSidebar
              history={props.history}
              path={props.path}
            ></OpenedSidebar>
          </Grid>
          <Grid item xs={6}>
            <CreatePost />
            {columns}
          </Grid>
          <Grid item xs>
            <FollowerSuggestionCard></FollowerSuggestionCard>
            <div style={{ marginTop: 30 }}>
              <QuestionAnswer></QuestionAnswer>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
