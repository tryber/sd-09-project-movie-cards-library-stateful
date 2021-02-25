const genres = [
  { name: 'Todos', value: '' },
  { name: 'Ação', value: 'action' },
  { name: 'Comédia', value: 'comedy' },
  { name: 'Suspense', value: 'thriller' },
];

const addMovieFirstState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

const movieLibraryFirstState = {
  searchText: '',
  bookmarkedOnly: false,
  genre: '',
};

export { genres, addMovieFirstState, movieLibraryFirstState };
