import React from 'react';
import PropTypes from 'prop-types';

class HandleInputs extends React.Component {
  render() {
    const {
      labelValue,
      dataTestid,
      title,
      htmlFor,
      value,
      handleOnChange,
      name,
    } = this.props;
    return (
      <label
        data-testid={ dataTestid }
        title={ title }
        htmlFor={ htmlFor }
      >
        {labelValue}
        <input
          value={ value }
          data-testid={ dataTestid }
          onChange={ handleOnChange }
          id={ htmlFor }
          name={ name }
        />
      </label>
    );
  }
}

HandleInputs.propTypes = {
  labelValue: PropTypes.string,
  dataTestid: PropTypes.string,
  title: PropTypes.string,
  htmlFor: PropTypes.string,
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  name: PropTypes.string,
};

HandleInputs.defaultProps = {
  labelValue: '',
  dataTestid: '',
  title: '',
  htmlFor: '',
  value: '',
  handleOnChange: 'undefined',
  name: '',
};

export default HandleInputs;
