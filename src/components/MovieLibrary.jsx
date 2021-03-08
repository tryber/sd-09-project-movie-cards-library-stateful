// implement AddMovie component here
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
class MovieLibrary extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={this.props.movies} />
        <MovieList />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;