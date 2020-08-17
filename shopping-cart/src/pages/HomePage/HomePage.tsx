import React, { Component } from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/Directory";
interface Props {}
interface State {}

export default class HomePage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}
