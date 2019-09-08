import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Switch, Route, Redirect } from "react-router";
import { routers } from "../Router/router.config";
import PrimarySearchAppBar from "../Header";
import DocumentTitle from "react-document-title";
import utils from "src/utils/utils";
import ScrollableTabsButtonForce from "../Navbar";

interface IProps {
  history: any;
  pathname: any;
  location: { pathname };
}

export default function AppLayout(props: any) {
  const {
    history,
    location: { pathname }
  } = props;
  const { path } = props.match;
  const layout = (
    <div>
      <CssBaseline />
      <ScrollableTabsButtonForce
        path={path}
        history={history}
      ></ScrollableTabsButtonForce>
      <main>
        <div style={{ marginTop: 13 }}></div>
        <Container maxWidth="lg">
          <Switch>
            {routers
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
