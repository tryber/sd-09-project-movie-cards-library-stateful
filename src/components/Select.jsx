/* import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.renderOption = this.renderOption.bind(this);
  }

  renderOption(optionObject) {
    optionObject.map(() => {

    });
  }

  render() {
    const { name, labelText, selectValue, onChange } = this.props;
    const idLabel = `${name}-input-label`;
    const idSelect = `${name}-input`;
    const optionObject = name === 'select' ? [
      { value: '', text: 'Todos' },
      { value: 'action', text: 'Ação' },
      { value: 'comedy', text: 'Comédia' },
      { value: 'thriller', text: 'Suspense' },
    ] : [
      { value: 'action', text: 'Ação' },
      { value: 'comedy', text: 'Comédia' },
      { value: 'thriller', text: 'Suspense' }];
    return (
      <label htmlFor={ idLabel } data-testid="select-input-label">
        { labelText }
        <select
          data-testid={ idSelect }
          value={ selectValue }
          onChange={ onChange }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
*/
