import React from 'react';
import PropTypes from 'prop-types';

class CreateSelect extends React.Component {
  render() {
    const { value, funcRec } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        <select
          name="genre"
          id="genre"
          value={ value }
          onChange={ funcRec }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

CreateSelect.propTypes = {
  value: PropTypes.oneOf(['string', 'number']).isRequired,
  funcRec: PropTypes.func.isRequired,
};

export default CreateSelect;
