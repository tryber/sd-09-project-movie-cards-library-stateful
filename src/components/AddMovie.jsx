// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import LabelAndTitle from './LabelAndTitle';
import LabelAndSubtitle from './LabelAndSubtitle';
import LabelAndImage from './LabelAndImage';
import LabelAndTextarea from './LabelAndTextarea';
import LabelAndNumber from './LabelAndNumber';
import LabelAndSelect from './LabelAndSelect';

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
    this.setState({ [name]: value });
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
