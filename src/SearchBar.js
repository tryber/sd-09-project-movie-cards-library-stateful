import React from 'react';


class SearchBar extends React.Component {
  render() {
    return (

      <form data-testid="search-bar-form">
        <label for="first" data-testid="text-input-label" value = { searchText } >
          Inclui o texto
        </label>
        <input id ="first" data-testid="text-input" onChange = { onSearchTextChange }></input>
      </form>

    );
  }
}


export default SearchBar;
