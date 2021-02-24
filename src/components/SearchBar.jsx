import React from 'react';

class SearchBar extends React.Component {
    render() {
        const { 
            searchText, 
            onSearchTextChange,
            bookmarkedOnly,
            onBookmarkedChange,
            selectedGenre,
            onSelectedGenreChange,
        } = this.props
        return (
            <div>
                <form data-testid="search-bar-form">

                </form>
            </div>
        )
    }
}

export default SearchBar;
