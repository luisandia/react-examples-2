import React, { Component } from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory";
interface Props {}
interface State {}

export default class HomePage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="homepage">
        <h1>TO FIX</h1>
        <Directory />
      </div>
    );
  }
}
