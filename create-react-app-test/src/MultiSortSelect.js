import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import _ from 'lodash';
import './MultiSortSelect.css';

class MultiSortSelect extends Component {
  constructor(props){
    super(props)
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  onSortEnd({oldIndex, newIndex}){
    const updated = arrayMove(this.props.selected, oldIndex, newIndex);
    console.log("Updated", updated);
    this.props.onSortEnd(updated)
  }

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
            <SelectedOptions
              options={selected}
              onSortEnd={this.onSortEnd}
            />
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

const SelectedOptions = SortableContainer(({options}) => {
  return (
    <div className="selected-options">
      {options.map(({name, value}, index) => (
        <SelectedOption key={`item-${index}`} index={index} value={value} name={name} />
      ))}
    </div>
  );
});

const SelectedOption = SortableElement(({name, value, index}) => (
  <div className="option selected-option">
    {name}
  </div>
));


export default MultiSortSelect;