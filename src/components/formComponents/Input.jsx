import React from 'react';
// import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.chooseElement = this.chooseElement.bind(this);
  }

  chooseElement(props) {
    // const [idInput, idLabel, labelValue, typeInput, stateName,
    //   actualValue, handleChange, tag] = props.movieInfo;
    const { idInput, idLabel, labelValue, typeInput, stateName,
      actualValue, handleChange, tag } = props;

    if (tag === 'input') {
      const result = (
        <div>
          <label htmlFor={ idInput } data-testid={ idLabel }>
            {labelValue}
            <input
              type={ typeInput }
              name={ stateName }
              value={ actualValue }
              onChange={ handleChange }
              data-testid={ idInput }
            />
          </label>
        </div>);
      return result;
    }
  }

  render() {
    const { props } = this;

    return (
      <div>
        {this.chooseElement(props)}
      </div>
    );
  }
}
// Input.propTypes = {
//   idInput: PropTypes.string.isRequired,
//   idLabel: PropTypes.string.isRequired,
//   typeInput: PropTypes.string.isRequired,
//   actualValue: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   labelValue: PropTypes.string.isRequired,
//   stateName: PropTypes.string.isRequired,
// };

export default Input;
