import React from 'react';
// importa biblioteca react
import Header from './components/Header';
// importa componente Header
import MovieLibrary from './components/MovieLibrary';
// importa componente MovieLibrary
import movies from './data';
// importa arr de obj com informacoes dos filmes
import './App.css';
// importa estilizacao da pagina

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
    </div>
    // constroi Header e MovieLibrary dentro de uma div
  );
}

export default App;
