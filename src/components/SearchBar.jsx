import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label
          data-testid="text-input-label"
          htmlFor="inclui-o-texto"
        >
          Inclui o texto:
          <input
            data-testid="text-input"
            id="inclui-o-texto"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
