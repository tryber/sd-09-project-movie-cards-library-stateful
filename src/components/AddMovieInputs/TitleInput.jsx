import React from 'react';
import PropTypes from 'prop-types';

export default function TitleInput({ title, onChange }) {
  return (
    <label htmlFor="title-input" data-testid="title-input-label">
      Título
      <input
        id="title-input"
        type="text"
        value={ title }
        onChange={ (ev) => onChange(ev.target.value) }
        data-testid="title-input"
      />
    </label>
  );
}

TitleInput.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
