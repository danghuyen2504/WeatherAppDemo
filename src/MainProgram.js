import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import Expo from 'expo';
import { API_KEY } from './utils/WeatherAPIKey.js';
import Weather from './components/Weather.js';

export default class MainProgram extends Component {
    state = {
        isLoading: true,
    
        temperature: 0,
        weatherCondition: null,
        nameCity: null,
        error: null
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.fetchWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                this.setState({
                    error: 'Error getting weather condition'
                });
            }
        );
    }

    fetchWeather(lat, lon) {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
        )
        .then(res => res.json())
        .then(json => {
            // console.log(json);
            this.setState({
                temperature: json.main.temp,
                weatherCondition: json.weather[0].main,
                nameCity: json.name,
                isLoading: false
            });
        });
    }

    render() {
        const { isLoading, weatherCondition, temperature, nameCity } = this.state;
        // console.log('isLoading', isLoading);
        // console.log('weatherCondition', weatherCondition);
        // console.log('temperature', temperature);
        // console.log('nameCity', nameCity);
        return (
            <View style = {styles.container}>
                {isLoading ?
                    (<View style = {styles.fetching}>
                        <Text style = {{fontSize: 25}}>Fetching the Weather</Text>
                    </View>)
                    :
                    (<Weather   weather = {weatherCondition}
                                temperature = {temperature}
                                nameCity = {nameCity}/>)
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    fetching: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});