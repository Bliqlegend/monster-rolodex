import React, { Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monster: [],
      searchField: '',  
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster : users}));
  }

  render() {
    const {monster , searchField} = this.state;
    const filteredmonsters = monster.filter(monsters => 
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
      <div className="App">
      <input type="search" placeholder="Search Monsters"
        onChange={e => {
          this.setState({ searchField: e.target.value }, () => console.log(this.state)
          );
        }}
      />
      <CardList monsters={filteredmonsters}>
      </CardList>
    </div>
    )
  }
}

export default App;
