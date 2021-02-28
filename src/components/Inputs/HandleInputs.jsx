import React from 'react';
import PropTypes from 'prop-types';

class HandleInputs extends React.Component {
  render() {
    const {
      labelValue,
      dataTestidLabel,
      dataTestidInput,
      title,
      value,
      handleOnChange,
      name,
    } = this.props;
    return (
      <label
        data-testid={ dataTestidLabel }
        title={ title }
        htmlFor={ title }
      >
        {labelValue}
        <input
          value={ value }
          data-testid={ dataTestidInput }
          onChange={ handleOnChange }
          id={ title }
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
