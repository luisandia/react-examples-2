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
  searchField: string;
}

class App extends Component<Props, State> {
  state = {
    monsters: [] as Monster[],
    searchField: "",
  };

  async componentDidMount() {
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    const monsters = await response.json();
    console.log(monsters);
    this.setState({ monsters });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            this.setState({ searchField: e.target.value })
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
