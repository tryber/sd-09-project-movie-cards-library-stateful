import React from 'react';
import PropTypes from 'prop-types';
import GenreRender from './GenreRender';

export default class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <section>
        <form data-testid="search-bar-form">
          <div>
            <label
              htmlFor="search"
              data-testid="text-input-label"
            >
              Inclui o texto:
              <input
                id="search"
                data-testid="text-input"
                type="text"
                name="search"
                value={ searchText }
                onChange={ onSearchTextChange }
              />
            </label>
          </div>
          <label
            htmlFor="checkbox"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
            <input
              id="checkbox"
              type="checkbox"
              name="checkbox"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          <GenreRender
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          />
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
