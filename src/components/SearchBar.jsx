import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
    };
  }
  
  onSearchTextChange = event => this.setState({ searchText: event.target.value });

  onBookmarkedChange = event => this.setState({ bookmarkedOnly: event.target.checked });

  onSelectedGenreChange = event => {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">Inclui o texto:
          <input 
            type="text" 
            value={this.state.searchText}
            onChange={this.onSearchTextChange}
            data-testid="text-input"
          />
        </label >
        <label data-testid="checkbox-input-label">Mostrar somente favoritos:  
          <input 
            type="checkbox"
            checked={this.state.bookmarkedOnly}
            onChange={this.onBookmarkedChange}
            data-testid="checkbox-input"
           />
        </label>
        <label data-testid="select-input-label">Filtrar por gênero                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
          <select data-testid="select-input">
            <option data-testid="select-option" value="" onChange={this.onSelectedGenreChange}>Todos</option>
            <option data-testid="select-option" value="action" onChange={this.onSelectedGenreChange}>Ação</option>
            <option data-testid="select-option" value="comedy" onChange={this.onSelectedGenreChange}>Comédia</option>
            <option data-testid="select-option" value="thriller" onChange={this.onSelectedGenreChange}>Suspense</option>
          </select>
        </label>
      </form>
    )
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
}

export default SearchBar;
