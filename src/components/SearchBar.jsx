import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
    <div>
      <form>
        <div>
          <label>Inclui o texto</label>
        </div>
        <div>
          <input type="text" name="searchText" />
        </div>
        <div>
          <label>
            <input type="checkbox" name="bookmarkedOnly" />
            Mostrar somente favoritos
          </label>
          <div>
            <label>
              Filtrar por gênero
            </label>
          </div>
          <div>
            <select>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="fantasy">Fantasia</option>
            </select>
          </div>
          
         
        </div>
        
      </form> 
    </div>
    );
  }

}

export default SearchBar;