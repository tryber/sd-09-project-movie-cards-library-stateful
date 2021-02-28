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
        dataTestidLabel={ dataTestidLabel }
        title={ title }
        htmlFor={ title }
      >
        {labelValue}
        <input
          value={ value }
          dataTestidInput={ dataTestidInput }
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
  dataTestidLabel: PropTypes.string,
  dataTestidInput: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  name: PropTypes.string,
};

HandleInputs.defaultProps = {
  labelValue: '',
  dataTestidLabel: '',
  dataTestidInput: '',
  title: '',
  value: '',
  handleOnChange: 'undefined',
  name: '',
};

export default HandleInputs;
