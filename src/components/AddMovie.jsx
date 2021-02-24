import React from 'react';

class AddMovie extends React.Component {
    constructor() {
        super()
        this.state = {
            subtitle: '',
            title: '',
            imagePath: '',
            storyLine: '',
            rating: 0,
            genre: 'action',
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler({ target }){
        const { name, value } = target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { onClick } = this.props
        return (
            <div>
                <form data-testid="add-movie-form">
                    <label data-testid="title-input-label">
                        Título
                        <input type="text"
                        name="title"
                        value={this.state.title} 
                        data-testid="title-input"
                        onChange={this.changeHandler}
                        />
                    </label>
                    <label data-testid="subtitle-input-label">
                        Subtítulo
                        <input type="text"
                        name="subtitle"
                        value={this.state.subtitle} 
                        data-testid="subtitle-input"
                        onChange={this.changeHandler}
                        />
                    </label>
                </form>
            </div>
        )
    }
}

export default AddMovie;
