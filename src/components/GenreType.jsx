import React, { Component } from 'react';

import Option from './Option'

class GenreType extends Component {
  render() {
    const { label, name, value, onChange, test, testLabel, testOption } = this.props;
    const genreOptions = [
      {
        id: 1,
        description: 'Todos',
        value: '',
        test: testOption,
      },
      {
        id: 2,
        description: 'Ação',
        value: 'action',
        test: testOption,
      },
      {
        id: 3,
        description: 'Comédia',
        value: 'comedy',
        test: testOption,
      },
      {
        id: 4,
        description: 'Suspense',
        value: 'thriller',
        test: testOption,
      },
    ];
    let options = [];
    if (name === 'genre') {
      options = genreOptions.filter((_, index) => index > 0)
        .map((option) => <Option key={option.id} optionProperties={option} />);
    } else {
      options = genreOptions.map((option) => <Option key={option.id} optionProperties={option} />);
    }

    return (
      <div>
        <label htmlFor={ name } data-testid={ testLabel }>{ label }</label>
        <select
          name={ name }
          id={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ test }
        >
          {options}
        </select>
      </div>
    );
  }
}

export default GenreType;
