import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { Switch, Route, Redirect, withRouter } from "react-router";
import { appRouters } from "../Router/router.config";
import PrimarySearchAppBar from "../Header";
import DocumentTitle from "react-document-title";
import utils from "src/utils/utils";
import clsx from "clsx";

interface IProps {
  history: any;
  pathname: any;
  location: { pathname };
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function AppLayout(props: any) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const layout = (
    <div>
      <CssBaseline />
      <PrimarySearchAppBar path={props.match.path} history={props.history} />
      <main>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg">
          <Switch>
            {appRouters
              .filter((item: any) => !item.isLayout)
              .map((route: any, index: any) => (
                <Route
                  key={index}
                  path={route.path}
                  component={route.component}
                />
              ))}
            <Redirect from="/" to="/anasayfa" />
          </Switch>
        </Container>
      </main>
    </div>
  );
  return (
    <DocumentTitle title={utils.getPageTitle(props.location.pathname)}>
      {layout}
    </DocumentTitle>
  );
}
