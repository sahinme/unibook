import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { appRouters } from "../Router/router.config";
import { ListItemIcon, ListItemText, Icon } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2)
    }
  })
);

interface ISidebarProps {
  open?: boolean;
  /*   handleDrawerClose(): void;
   */ history: any;
  path?: any;
}

export default function OpenedSidebar(props: ISidebarProps) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <List>
          {appRouters
            .filter((item: any) => !item.isLayout && item.showInMenu)
            .map((route: any, index: number) => {
              return (
                <ListItem
                  onClick={() => props.history.push(route.path)}
                  button
                  key={route.path}
                >
                  <ListItemIcon>
                    <Icon className={route.icon} color={route.color} />
                  </ListItemIcon>
                  <ListItemText primary={route.title} />
                </ListItem>
              );
            })}
        </List>
      </Paper>
    </div>
  );
}
