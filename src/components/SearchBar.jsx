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
                    <label data-testid="text-input-label">
                        Inclui o texto:
                        <input type="text"
                        value={searchText}
                        onChange={onSearchTextChange}
                        data-testid="text-input"
                        />
                    </label>
                    <label data-testid="checkbox-input-label">
                        Mostrar somente favoritos
                        <input type="checkbox"
                        checked={bookmarkedOnly}
                        onChange={onBookmarkedChange}
                        data-testid="checkbox-input"
                        />
                    </label>
                </form>
            </div>
        )
    }
}

export default SearchBar;
