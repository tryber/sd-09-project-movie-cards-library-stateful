// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <fieldset>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label"> 
            Inclui o texto:
            <input type="text" name="" id="" value={searchText} onChange={this.props.onSearchTextChange} data-testid="text-input" />
          </label>
        </form>
      </fieldset>
    );
  }
}

export default SearchBar;
