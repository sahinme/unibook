import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import "./index.css";
import { primaryRouters } from "../Router/router.config";
import { Icon } from "@material-ui/core";

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.background.paper
    }
  })
);

interface Props {
  history: any;
  path: any;
}

export default function ScrollableTabsButtonForce(props: Props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar
        style={{ backgroundColor: "#ffffff" }}
        position="static"
        color="default"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {primaryRouters
            .filter((item: any) => !item.isLayout && item.showInMenu)
            .map((route: any, index: number) => {
              return (
                <Tab
                  onClick={() => props.history.push(route.path)}
                  label={route.title}
                  icon={<Icon className={route.icon} />}
                  {...a11yProps(index)}
                />
              );
            })}
        </Tabs>
      </AppBar>
    </div>
  );
}
