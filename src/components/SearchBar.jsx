import React from 'react';
import PropTypes from 'prop-types';
import genreRender from './genreRender';

export default class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <section>
        <form data-testid="search-bar-form">
          <div>
            <label htmlFor="search" data-testid="text-input-label"> Inclui o texto:</label>
            <input
              id="search"
              data-testid="text-input"
              type="text"
              name="search"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </div>
          <div>
            <label
              htmlFor="checkbox"
              data-testid="checkbox-input-label"
            >
              Mostrar somente favoritos
            </label>
            <input
              id="checkbox"
              type="checkbox"
              name="checkbox"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </div>
          <genreRender value={ selectedGenre } onChange={ onSelectedGenreChange } />
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;
