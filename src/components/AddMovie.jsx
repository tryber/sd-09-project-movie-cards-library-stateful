// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class AddMovie extends Component {
//   // const { onClick } = this.props;

//   constructor(props) {
//     super(props);
//     this.state = {
//       subtitle: '',
//       title: '',
//       imagePath: '',
//       storyline: '',
//       rating: 0,
//       genre: 'action',
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.addMovieClick = this.addMovieClick.bind(this);
//   }

//   handleChange({ target }) {
//     const { name, value } = target;
//     this.setState({
//       [name]: value,
//     });
//   }

//   addMovieClick() {
//     onClick(this.state);
//     this.setState({
//       subtitle: '',
//       title: '',
//       imagePath: '',
//       storyline: '',
//       rating: 0,
//       genre: 'action',
//     });
//   }

//   render() {
//     const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
//     const { handleChange } = this;
//     return (
//       <div>
//         <form data-testid="add-movie-from">
//           <label htmlFor="" data-testid="title-input-label">
//             Título
//             <input type="text" name="title" value={ title } data-testid="title-input" onChange={ this.handleChange } />
//           </label>
//           <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
//             Subtítulo
//             <input
//               type="text"
//               name="subtitle"
//               value={ subtitle }
//               data-testid="subtitle-input"
//               onChange={ this.handleChange }
//             />
//           </label>
//           <label htmlFor="image-input" data-testid="image-input-label">
//             Imagem
//             <input
//               type="text"
//               name="imagePath"
//               value={ imagePath }
//               data-testid="image-input"
//               onChange={ this.handleChange }
//             />
//           </label>
//           <label htmlFor="storyline-input" data-testid="storyline-input-label">
//             Sinopse
//             <textarea
//               name="storyline"
//               value={ storyline }
//               data-testid="storyline-input"
//               onChange={ this.handleChange }
//             />
//           </label>
//           <label htmlFor="rating-input" data-testid="rating-input-label">
//             Avaliação
//             <input
//               type="number"
//               name="rating"
//               value={ rating }
//               data-testid="rating-input"
//               onChange={ this.handleChange }
//             />
//           </label>
//           <label htmlFor="genre-input" data-testid="genre-input-label">
//             Gênero
//             <select type="text" name="genre" value={ genre } data-testid="genre-input" onChange={ this.handleChange }>
//               <option value="action" data-testid="genre-option">Ação</option>
//               <option value="comedy" data-testid="genre-option">Comédia</option>
//               <option value="thriller" data-testid="genre-option">Suspense</option>
//             </select>
//           </label>
//         </form>
//         <button data-testid="send-button" onClick="">Adicionar filme</button>
//       </div>
//     );
//   }
// }

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

// export default AddMovie;
