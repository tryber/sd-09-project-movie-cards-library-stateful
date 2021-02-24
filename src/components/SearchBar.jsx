import React, { Component } from 'react';

class SearchBar extends Component {
    // constructor(props) {
    //     super(props);
    //   }
    render () {
        const { searchText } = this.props;
        return (            
            // <div>Make it so</div>
            <div>{ searchText }</div>           
        )
    }
}

export default SearchBar;
