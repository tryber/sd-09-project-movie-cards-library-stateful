import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

class GenreType extends Component {
  render() {
    const { label, name, value, onChange } = this.props;
    const genreOptions = [
      {
        id: 1,
        description: 'Todos',
        value: '',
        test: `${name}-option`,
      },
      {
        id: 2,
        description: 'Ação',
        value: 'action',
        test: `${name}-option`,
      },
      {
        id: 3,
        description: 'Comédia',
        value: 'comedy',
        test: `${name}-option`,
      },
      {
        id: 4,
        description: 'Suspense',
        value: 'thriller',
        test: `${name}-option`,
      },
    ];
    let options = [];
    if (name === 'genre') {
      options = genreOptions.filter((_, index) => index > 0)
        .map((option) => <Option key={ option.id } properties={ option } />);
    } else {
      options = genreOptions
        .map((option) => <Option key={ option.id } properties={ option } />);
    }
    return (
      <div>
        <label htmlFor={ name } data-testid={ `${name}-input-label` }>{ label }</label>
        <select
          name={ name }
          id={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ `${name}-input` }
        >
          { options }
        </select>
      </div>
    );
  }
}

GenreType.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenreType;
