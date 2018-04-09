import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Expo from 'expo';
import { API_KEY } from './utils/WeatherAPIKey.js';
import Weather from './components/Weather.js';
import * as Progress from 'react-native-progress';

export default class MainProgram extends Component {
    state = {
        isLoading: true,
    
        temperature: 0,
        temp_max: 0,
        temp_min: 0,
        visibility: 0,
        weather: null,
        description: null,
        name: null,
        humidity: 0,
        wind_speed: 0,

        error: null
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.fetchWeather(position.coords.latitude, position.coords.longitude);
                // this.fetchWeather(67.918881, -42.753010);
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
            console.log(json);
            this.setState({
                temperature: json.main.temp,
                temp_max: json.main.temp_max,
                temp_min: json.main.temp_min,
                visibility: json.visibility,
                weather: json.weather[0].main,
                description: json.weather[0].description,
                name: json.name,
                humidity: json.main.humidity,
                wind_speed: json.wind.speed,

                isLoading: false
            });
        });
    }

    render() {
        const { isLoading, temperature, temp_max, temp_min, visibility, weather, description, name, humidity, wind_speed } = this.state;
        
        return (
            <View style = {styles.container}>
                {isLoading ?
                    (<ImageBackground source = {require('./images/bg.png')}
                                        style = {{flex: 1}}>
                        <View style = {styles.fetching}>
                            <Progress.Circle size={50} thickness = {15}
                                            indeterminate={true}/>
                            <Text style = {{fontSize: 30,
                                            color: '#fff',
                                            textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                            textShadowOffset: {width: -1, height: 1},
                                            textShadowRadius: 10}}>
                                Fetching data...
                            </Text>
                        </View>
                    </ImageBackground>)
                    :
                    (<Weather   temperature = {temperature}
                                temp_max = {temp_max}
                                temp_min = {temp_min}
                                visibility = {visibility}
                                weather = {weather}
                                description = {description}
                                name = {name}
                                humidity = {humidity}
                                wind_speed = {wind_speed}/>)
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