import React, { Component } from "react";
import CardList from "./components/CardList";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import connectSqlite3 from "connect-sqlite3";

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

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Search</h1>
        <SearchBox handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
