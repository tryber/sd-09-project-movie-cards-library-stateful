// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import LabelAndTitle from './LabelAndTitle.jsx';
import LabelAndSubtitle from './LabelAndSubtitle.jsx';
import LabelAndImage from './LabelAndImage.jsx';
import LabelAndTextarea from './LabelAndTextarea.jsx';
import LabelAndNumber from './LabelAndNumber.jsx';
import LabelAndSelect from './LabelAndSelect.jsx';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeValue(event) {
    const { name, value } = event.target;
    if (name !== 'rating') this.setState({ [name]: value });
    else this.setState({ [name]: Number(value) });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onclick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form" className="input-container">
          <LabelAndTitle title={ title } changeValue={ this.changeValue } />
          <LabelAndSubtitle subtitle={ subtitle } changeValue={ this.changeValue } />
          <LabelAndImage imagePath={ imagePath } changeValue={ this.changeValue } />
          <LabelAndTextarea storyline={ storyline } changeValue={ this.changeValue } />
          <LabelAndNumber rating={ rating } changeValue={ this.changeValue } />
          <LabelAndSelect genre={ genre } changeValue={ this.changeValue } />
          <button
            type="submit"
            data-testid="send-button"
            onClick={ onclick }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.defaultProps = {
  onclick: () => {},
};

AddMovie.propTypes = {
  onclick: PropTypes.func,
};

export default AddMovie;
