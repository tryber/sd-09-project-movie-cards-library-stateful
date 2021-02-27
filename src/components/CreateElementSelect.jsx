import React from 'react'

class Select extends React.Component {
  render() {
    const { nameTestLabel, nameTestOption, nameId, labelName, value, func } = this.props
    return (
      <label data-testid={ `${nameTestLabel}-label` } htmlFor={ nameId }>
        { labelName }
        <select
          id={ nameId }
          name={ nameId }
          value={ value }
          data-testid={ nameTestLabel }
          onChange={ func }
        >
          <option data-testid={ nameTestOption } value="action">Ação</option>
          <option data-testid={ nameTestOption } value="comedy">Comédia</option>
          <option data-testid={ nameTestOption } value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Select;
