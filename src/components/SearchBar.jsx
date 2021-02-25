// implement AddMovie component here
// estrutura
import React from 'react';

let searchText;
let onSearchTextChange;
let bookmarkedOnly;
let onBookmarkedChange;

const createForm = () => (
  <form>
    <label name='Inclui o texto:' data-testid="text-input-label">
      <input type='text' name='Inclui o texto:' value = { searchText } onChange={ onSearchTextChange } data-testid="text-input" ></input>
    </label>
    <label  data-testid="checkbox-input-label">
      <input type='checkbox' checked={ bookmarkedOnly } onChange={ onBookmarkedChange } data-testid="checkbox-input"/>
    </label>
    <select data-testid="select-input">
      <option value=""  data-testid="select-option">Todos</option>
      <option value="action"  data-testid="select-option">Ação</option>
      <option value="comedy"  data-testid="select-option">Comédia</option>
      <option value="thriller"  data-testid="select-option">Suspense</option>
    </select>
  </form>
)

export default createForm;