import React from 'react';
import { string, func } from 'prop-types';

class InputSearchText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="searchInput">
        Busca:
        <input
          type="text"
          id="searchInput"
          placeholder="Termo da Busca"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

InputSearchText.propTypes = {
  searchText: string,
  onSearchTextChange: func,
};

InputSearchText.defaultProps = {
  searchText: '',
  onSearchTextChange: () => {},
};

export default InputSearchText;
