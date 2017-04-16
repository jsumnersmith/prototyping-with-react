import React, { Component } from 'react';
import _ from 'lodash';
import './MultiSortSelect.css';

class MultiSortSelect extends Component {
  render() {
    const { options, selected, updateOption } = this.props;
    const unselected = _.difference(options, selected);
    return (
      <div className="row">
        <div className="col-md-6">
          <h3>Available Options</h3>
          <div className="available-options">
            { unselected.map(option => <AvailableOption {...option} updateOption={updateOption} />) }
          </div>
        </div>
        <div className="col-md-6">
          <h3>Selected Options</h3>
          <div className="selected-options">
            { selected.map(option => <SelectedOption {...option} />) }
          </div>
        </div>
      </div>
    );
  }
}

const AvailableOption = ({name, value, updateOption}) => (
  <div className="option available-option" onClick={()=> updateOption(value)}>
    {name}
  </div>
);

const SelectedOption = ({name, value}) => (
  <div className="option selected-option">
    {name}
  </div>
);

export default MultiSortSelect;