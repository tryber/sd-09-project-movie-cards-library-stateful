import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

function App() {
  const movies = [
    {
      title: 'An awesome title',
      subtitle: 'Movie Subtitle 1',
      storyline: 'Movie Storyline 1',
      rating: 4.5,
      imagePath: 'images/movie_1',
      bookmarked: true,
      genre: 'action',
    },
    {
      title: 'Movie Title 2',
      subtitle: 'An incredible subtitle',
      storyline: 'Movie Storyline 2',
      rating: 4.5,
      imagePath: 'images/movie_2',
      bookmarked: false,
      genre: 'comedy',
    },
    {
      title: 'Movie Title 3',
      subtitle: 'Movie Subtitle 3',
      storyline: 'An great storyline',
      rating: 3,
      imagePath: 'images/movie_3',
      bookmarked: false,
      genre: 'thriller',
    },
  ];
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
