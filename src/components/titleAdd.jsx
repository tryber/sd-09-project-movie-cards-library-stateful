import React from 'react';
import Proptypes from 'prop-types'

class TitleAdd extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleAdd.propTypes = {
  title: Proptypes.string.isrequired,
  handleChange: Proptypes.func.isRequired,
};

export default TitleAdd;
