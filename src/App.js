import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      heading: "Monster Rolodex",
      searchInput: ""
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {monsters, searchInput} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="App">
        <h1>{this.state.heading}</h1>
        <SearchBox placeholder='Search Monster' handleChange={this.handleChange} />
        {filteredMonsters !=0 ? <CardList monsters={filteredMonsters} /> : <h2>Monster not found with this keyword</h2>}        
      </div>
    )
  }
}

export default App;
