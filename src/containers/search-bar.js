import React, { Component } from 'react';


export default class SearchBar extends  Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this)
    }

    render() {
        return (
            <form className="input-group">
                <input
                    className="form-control"
                    placeholder="Get a five-day forecast in your favorite cities"
                    value={this.state.term}
                    onChange={ this.onInputChange }/>

                <span className="input-group-btn">
                    <button type="sdubmit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }

    onInputChange(event) {
        console.log( event.target.value)
        this.setState({term: event.target.value})
    }
}