import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { nameTestLabel, nameTestOption, nameId, labelName, value, func } = this.props;
    return (
      <label data-testid={ `${nameTestLabel}-label` } htmlFor={ nameId }>
        { labelName }
        <select
          id={ nameId }
          name={ nameId }
          value={ value }
          data-testid={ nameTestLabel }
          onChange={ func }
        >
          <option data-testid={ nameTestOption } value="action">Ação</option>
          <option data-testid={ nameTestOption } value="comedy">Comédia</option>
          <option data-testid={ nameTestOption } value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  nameTestLabel: PropTypes.string.isRequired,
  nameTestOption: PropTypes.bool.isRequired,
  nameId: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  value: PropTypes.oneOf(['string', 'number']).isRequired,
  func: PropTypes.func.isRequired,
};

export default Select;
