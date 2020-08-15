import React, { Component } from "react";
import CardList from "./components/CardList";
import "./App.css";
interface Props {}

export interface Monster {
  id: string;
  name: string;
  email: string;
}
interface State {
  monsters: Monster[];
}

class App extends Component<Props, State> {
  state = {
    monsters: [] as Monster[],
  };

  async componentDidMount() {
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    const monsters = await response.json();
    console.log(monsters);
    this.setState({ monsters });
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
