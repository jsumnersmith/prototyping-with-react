import React, { Component } from 'react';
import MultiSortSelect from './MultiSortSelect.js';
import './App.css';
import _ from 'lodash';

const options = [
  {name: 'First', value: 1},
  {name: 'Second', value: 2},
  {name: 'Third', value: 3},
  {name: 'Fourth', value: 4}
]

class App extends Component {
  constructor(props){
    super(props)
    this.updateOption = this.updateOption.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
    this.state = {
      options,
      selected: options.slice(0,2)
    }
  }

  updateOption(value){
    const option = _.find(this.state.options, (option) => option.value == value);
    console.log(option);
    this.setState({
      selected: this.state.selected.concat([option])
    })
  }

  onSortEnd(selected){
    this.setState({selected})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Multi-Select-And-Sort Prototype</h2>
        </div>
        <p className="App-intro">
          <MultiSortSelect
            {...this.state}
            updateOption={this.updateOption}
            onSortEnd={this.onSortEnd}
          />
        </p>
      </div>
    );
  }
}

export default App;
