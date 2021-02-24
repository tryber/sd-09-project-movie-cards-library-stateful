// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // constructor() {
  //   super()
  // }

  // handleChange (event) {
  //   this.setState({})
  // }
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <session>
        <h4>SearchBar</h4>
        <form>
          <input 
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
          <input
            type="bool"
            value={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          <input
            type="text"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          />
        </form>
      </session>
    );
  }
}
SearchBar.propTypes = ({
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
});

export default SearchBar;
