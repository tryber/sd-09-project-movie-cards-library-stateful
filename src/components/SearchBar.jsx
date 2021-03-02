// implement AddMovie component here
import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        const { searchText, onSearchTextChange } = this.props;
        return(
            <form data-testid='search-bar-form'>
                <label data-testid='text-input-label'>
                    Incluir o texto:
                    <input 
                        type='text' 
                        id='text-input' 
                        value={searchText} 
                        onChange={onSearchTextChange} 
                        data-testid='text-input'
                    />
                </label>
            </form>
        );
    }
}

SearchBar.protoTypes = {
    searchText: PropTypes.string.isRequired,
    onSearchTextChange: propTypes.func.isRequired
}

export default SearchBar;
