import React, { Component } from "react";
import "./homepage.styles.scss";
interface Props {}
interface State {}

export default class HomePage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">JACKET</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>

          <div className="menu-item">
            <div className="content">
              <h1 className="title">BOOTS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>

          <div className="menu-item">
            <div className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>

          <div className="menu-item">
            <div className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
