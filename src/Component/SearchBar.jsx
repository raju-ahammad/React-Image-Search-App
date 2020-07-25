import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        term: ""
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    render() {
        return (
            <div className="ui segment">
                <h1 className="ui center aligned header">Image Search App</h1>
                <form onSubmit={this.onFormSubmit} className="ui form" action="">
                    <div className="field">
                        <label htmlFor="">ImageSearch</label>
                        <input type="text" value={this.state.term} onChange={ e=>this.setState({term: e.target.value}) }/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar
