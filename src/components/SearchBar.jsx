// implement AddMovie component here
import React from 'react';
import { string, func, bool } from 'prop-types';
import InputSearchText from './InputSearchText';
import InputSearchGenre from './InputSearchGenre';
import InputSearchBookMarked from './InputSearchBookMarked';
import '../css/SearchBar.css';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <section className="search-bar">
        <form data-testid="search-bar-form" className="search-bar-form">
          <div className="box-text-genre">
            <InputSearchText
              searchText={ searchText }
              onSearchTextChange={ onSearchTextChange }
            />
            <InputSearchGenre
              selectedGenre={ selectedGenre }
              onSelectedGenreChange={ onSelectedGenreChange }
            />
          </div>
          <InputSearchBookMarked
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ onBookmarkedChange }
          />
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchText: string,
  onSearchTextChange: func,
  bookmarkedOnly: bool,
  onBookmarkedChange: func,
  selectedGenre: string,
  onSelectedGenreChange: func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: () => {},
  bookmarkedOnly: Boolean,
  onBookmarkedChange: () => {},
  selectedGenre: '',
  onSelectedGenreChange: () => {},
};

export default SearchBar;
