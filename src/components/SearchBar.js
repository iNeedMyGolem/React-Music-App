import React from 'react';

class SearchBar extends React.Component {
    state = { searchWord: '' };

    onInputChange = (event) => {
        this.setState({ searchWord: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onFormSubmit(this.state.searchWord)
    };

    render() {
        return (
            <div className="search-bar ui segment" style={{ marginTop: '3%' }}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.searchWord} 
                            onChange={this.onInputChange} 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;