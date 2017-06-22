import React, { Component } from 'react';
import  { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';
import  { fetchWeather } from '../actions/index'


class SearchBar extends  Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
            <form className="input-group" onSubmit={event => this.onSubmit(event)}>
                <input
                    className="form-control"
                    placeholder="Get a five-day forecast in your favorite cities"
                    value={this.state.term}
                    onChange={ event => this.changeTerm(event.target.value) }/>
                <span className="input-group-btn">
                    <button type="sdubmit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }

    changeTerm(term) {
        this.setState({term})
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''})
    }
}


function mapDispatchToProps(dispatch) {
    return  bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
