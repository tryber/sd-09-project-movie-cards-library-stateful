import React from 'react';
import Form from './CreateForm';
import Button from './CreateButton';


class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <Form />
        <Button />
      </form>
    );
  }
}

export default AddMovie;
