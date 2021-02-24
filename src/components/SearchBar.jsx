// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {

  render() {

    const{
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (

      <form data-testid="search-bar-form">
        <div>
          <label data-testid="text-input-label" htmlFor="inputSearch">Inclui o texto:</label>
          <input id="inputSearch" type="text" onChange={onSearchTextChange} value={searchText} data-testid="text-input"></input>
        </div>
        <div>
          <label data-testid="checkbox-input-label" htmlFor="inputCheckbox">Mostrar somente favoritos</label>
          <input data-testid="checkbox-input" onChange={onBookmarkedChange} checked={bookmarkedOnly} id="inputCheckbox" type="checkbox" ></input>
        </div>
        <label>Filtrar por gênero</label>
        <select>

        </select>
      </form>

    );
  }
}

export default SearchBar;

5 - Renderize um select dentro do formulário em <SearchBar />
O select deve ter uma label associada com o texto: "Filtrar por gênero";

Essa label deve apresentar o atributo data-testid="select-input-label"

A propriedade value do select deve receber o valor da prop selectedGenre;

A propriedade onChange do select deve receber o valor da prop onSelectedGenreChange;

O select deve renderizar quatro tags option, com as opções de filtragem por gênero, na seguinte ordem:

Todos, com o valor "";
Ação, com o valor action;
Comédia, com o valor comedy;
Suspense, com o valor thriller.
O select deve apresentar o atributo data-testid="select-input"

Cada option deve apresentar o atributo data-testid="select-option"
