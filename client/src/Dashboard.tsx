import * as React from "react";
import * as socketIOClient from "socket.io-client";
import Button from "@material-ui/core/Button";
import tokenAuthService from "./services/tokenAuth/tokenAuthService";
import PrimarySearchAppBar from "./components/Header";

export interface IDashboardState {
  endpoint: string;
  color: string;
}

class Dashboard extends React.Component<{}, IDashboardState> {
  public state: IDashboardState = {
    color: "white",
    endpoint: "localhost:5000"
  };

  public send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit("change color", this.state.color);
  };

  public setColor = (color: string) => {
    this.setState({ color });
  };

  public render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on("change color", (color: string) => {
      document.body.style.backgroundColor = color;
    });

    let data = {
      password: "vvvv",
      username: "vvvv"
    };
    return (
      <div style={{ textAlign: "center" }}>
        <PrimarySearchAppBar />
        <Button onClick={() => this.send()}>Change Color</Button>

        <Button
          color="primary"
          variant="contained"
          id="blue"
          onClick={() => tokenAuthService.authenticate(data)}
        >
          auth
        </Button>
        <Button
          color="primary"
          variant="contained"
          id="blue"
          onClick={() => this.setColor("blue")}
        >
          Blue
        </Button>
        <Button
          id="red"
          variant="contained"
          color="secondary"
          onClick={() => this.setColor("red")}
        >
          Red
        </Button>
      </div>
    );
  }
}

export default Dashboard;
