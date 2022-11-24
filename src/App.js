import React from "react";
// import {models} from './models.js';
import TerminatorList from './TerminatorList.jsx'; 
import SearchBox from './SearchBox.jsx'; 
import './App.css';
import Scroll from './Scroll.jsx'; 
import ErrorBoundary from "./error-boundary.jsx";
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      models: [],
      searchfield: ''
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ models: users }));
  }
  render() {
    const filteredModels = this.state.models.filter((model) => {
      return model.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if(this.state.models.length === 0) {
      return <h1>Betöltés folyamatban...</h1>
    }
    return(
      <div className="tc">
        <h1 className="f1">Terminator modellek</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <TerminatorList models={filteredModels} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;