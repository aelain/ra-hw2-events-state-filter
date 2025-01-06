import React from 'react';
import PropTypes from 'prop-types';

export default class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { projects } = this.props;

    return (
      <div className="card_flexbox">
        {projects.map((item, index) => (
          <img src={item.img} className="img_flexbox" key={index} />
        ))}
      </div>
    );
  }
}

ProjectList.propTypes = {
  projects: PropTypes.array,
};
