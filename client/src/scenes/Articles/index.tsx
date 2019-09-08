import React from "react";
import ArticleCard from "src/components/ArticleCard";
import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "start",
      flexWrap: "wrap"
    }
  })
);

let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default function Articles() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={2}>
          {data.map((item: any) => {
            return (
              <Grid key={item} item>
                <ArticleCard></ArticleCard>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
