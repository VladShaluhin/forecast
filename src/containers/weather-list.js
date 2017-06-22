import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from 'redux'

class WeatherList extends Component{

    render() {
        console.log(this);
        return (
           <table className="table table-hover">
               <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
               </thead>
               <tbody>
               {this.props.weather.map(this.renderWeather)}
               </tbody>
           </table>
        );
    }

    renderWeather(cityData, i) {
        console.log(cityData);

        return (
            <tr key={i}>
                <td>{cityData.city.name}</td>
                <td>{cityData.city.name}</td>
                <td>{cityData.city.name}</td>
                <td>{cityData.city.name}</td>
            </tr>
        );
    }
}

function  mapStateToProps ({weather}) {
    return { weather }
}


// {this.props.weather.map(this.renderWeather)}


export default connect(mapStateToProps)(WeatherList);