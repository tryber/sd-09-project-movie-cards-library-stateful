import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this)
  }
handleChange = (event)=>{
    const {value, name} = event.target
this.setState({
    [name]:value
})
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <label htmlFor="" data-testid="title-input-label">
            Título
            <input type="text" name="" id="" value={ this.state.title } data-testid="title-input" onChange={this.handleChange}/>
          </label>
        </form>
      </div>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
