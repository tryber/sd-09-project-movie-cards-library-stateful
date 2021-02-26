import React from 'react';
import { bool, func } from 'prop-types';

class InputSearchBookMarked extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="searchCheckBox">
        Meus favoritos
        <input
          type="checkbox"
          id="searchCheckBox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

InputSearchBookMarked.propTypes = {
  bookmarkedOnly: bool,
  onBookmarkedChange: func,
};

InputSearchBookMarked.defaultProps = {
  bookmarkedOnly: Boolean,
  onBookmarkedChange: () => {},
};

export default InputSearchBookMarked;
