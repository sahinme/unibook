import * as React from "react";
import PostCard from "src/components/PostCard";
import { Grid } from "@material-ui/core";
import CreatePost from "src/components/CreatePost";
import ProfileCard from "src/components/ProfileCard";

let data = [1, 2, 3, 4, 5, 6, 7, 6, 3, 2];

export default function Dashboard(props: any) {
  const columns = data.map((item: any) => {
    return (
      <PostCard
        key={item}
        postDescription="asdasdsadasd"
        likes={20}
        postContentPath="https://cn.opendesktop.org/img/e/c/2/3/b016ec2bcb8eb01cd58bf56b1f929e5f6080.jpg"
        userImagePath="https://pbs.twimg.com/profile_images/1133530124186476545/Od_DxKfq_bigger.jpg"
        createdDate="2 saat once"
        userName="freeadmiral"
      />
    );
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <ProfileCard />
      </Grid>
      <Grid item xs={6}>
        <CreatePost />
        {columns}
      </Grid>
      <Grid item xs>
        xs
      </Grid>
    </Grid>
  );
}
