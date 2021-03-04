import React from 'react';


class SearchBar extends React.Component {
  render() {
    return (

      <form data-testid="search-bar-form">
        <label for="first" data-testid="text-input-label">Inclui o texto
          <input data-testid="text-input"
            type='text'
            value={this.props.searchText}
            onChange={this.props.onSearchTextChange}>
          </input>
        </label>
      </form>

    );
  }
}


export default SearchBar;
