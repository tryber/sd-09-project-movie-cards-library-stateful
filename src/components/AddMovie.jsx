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
    }
    render() {
        const { onClick } = this.props
        return (
            <div>
                Olá
            </div>
        )
    }
}

export default AddMovie;
