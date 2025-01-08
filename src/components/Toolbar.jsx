import React from 'react';
import PropTypes from 'prop-types';

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { filters, selected, onSelectFilter } = this.props;

    return (
      <div>
        {filters.map((filter, index) => {
          return (
            <button
              className={filter === selected ? "btn btn_selected" : "btn"}
              onClick={onSelectFilter}
              key={index}>
              {filter}
            </button>
          );
        })}
      </div>
    );
  }
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};
