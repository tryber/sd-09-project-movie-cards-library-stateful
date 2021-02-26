import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    // this.onSearchTextChange = this.onSearchTextChange.bind(this);
    // this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    // this.onSelectedGenreChange = this.onSelectedGenreChange(this);
    
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    }
  }

  // onSearchTextChange ({ target }) {
  //   const { value } = target;
  //   console.log(value)
  //   this.setState({
  //       searchText: value
  //   });
  // }

  // onBookmarkedChange ({ target }) {
  //   const { checked } = target;
  //   this.setState({
  //     bookmarkedOnly: checked
  //   });
  // }

  // onSelectedGenreChange ({ target }) {
  //   const { value } = target;
  //   console.log(value)
  //   this.setState({
  //     selectedGenre: value
  //   });
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
      <form data-testid="search-bar-form">
        <div>
          <label data-testid="text-input-label">Inclui o texto:</label>
        </div>
        <div>
          <input data-testid="text-input"
            type="text"
            name="searchText" 
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </div>
        <div>
          <label data-testid="checkbox-input-label">
            <input data-testid="checkbox-input"
              type="checkbox"
              name="bookmarkedOnly"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
            Mostrar somente favoritos
          </label>
          <div>
            <label data-testid="select-input-label">
              Filtrar por gênero
            </label>
          </div>
          <div>
            <select data-testid="select-input"
              name="selectedGenre"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </div>
        </div>
      </form> 
    );
  }
}

export default SearchBar;

// onChange={ (event) => {
//   const { value } = event.target
//   this.setState ({
//     selectedGenre: value
//   })
// }
// }