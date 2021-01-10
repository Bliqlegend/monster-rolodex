import React, { Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monster: [
        {
          'name':'JamJelly',
        },
        {
          'name':'Dee'
        },
        {
          'name':'Kashnikov'
        },
      ]
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => console.log(response))

  }

  render() {
    return(
      <div className="App">
        {
          this.state.monster.map(monster => (
            <h1 >{ monster.name }</h1>
          ))
        }
    </div>
    )
  }
}

export default App;
