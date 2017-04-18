import {Component} from 'react';
import Head from 'next/head';
import MultiSelectSort from '../components/MultiSelectSort';
import Styles from '../styles/MultiSelectSort';

export default () => (
  <div>
    <Head>
      <title>Prototype</title>
      <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ic" />
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
    </Head>
    <Styles/>
    <div className="container">
      <h2>Multi Sort Select Prototype</h2>
      <App />
    </div>
  </div>
);

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
          <MultiSelectSort
            {...this.state}
            updateOption={this.updateOption}
            onSortEnd={this.onSortEnd}
          />
      </div>
    );
  }
}