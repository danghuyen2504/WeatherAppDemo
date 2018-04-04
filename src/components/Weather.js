import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions.js';

const Weather = ({temperature, temp_max, temp_min, visibility, weather, description, name, humidity, wind_speed}) => {
    return (
        <ImageBackground    source = {require('../images/bg.png')}
                            style = {styles.container}>
            {/* <View style = {styles.headerContainer}>
                <MaterialCommunityIcons size = {72}
                                        style = {[styles.text_shadow, {marginTop: 25}]}
                                        name = {weatherConditions[weather].icon}
                                        color = {'#fff'}/>
                <Text style = {[styles.text_shadow, {fontSize: 65}]}>{temperature}˚C</Text>
                <Text style = {[styles.text_shadow, {fontSize: 72}]}>{name}</Text>
            </View>
            <View style = {styles.bodyContainer}>
                <Text style = {[styles.text_shadow, {fontSize: 60}]}>{weatherConditions[weather].title}</Text>
                <Text style = {[styles.text_shadow, {fontSize: 24}]}>{weatherConditions[weather].subtitle}</Text>
            </View> */}

            <View style = {{alignItems: 'center', marginTop: 30}}>
                <Text style = {[styles.text_shadow, {fontSize: 50}]}>City</Text>
            </View>
            
            <View style = {{flexDirection: 'row', margin: 10}}>
                <View style = {{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                    <Text style = {{fontSize: 55}}>Temp</Text>
                    <Text style = {{fontSize: 20}}>Temp Min/Max</Text>
                </View>
                <View style = {{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                <Text style = {{fontSize: 40}}>Icon</Text>
                </View>
            </View>

            <View style = {{flexDirection: 'row', marginTop: 20}}>
                <View style = {{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                    <Text>Humidity</Text>
                    <Text>Icon</Text>
                    <Text>value</Text>
                </View>
                <View style = {{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                    <Text>Wind Speed</Text>
                    <Text>Icon</Text>
                    <Text>value</Text>
                </View>
                <View style = {{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                    <Text>Visibility</Text>
                    <Text>Icon</Text>
                    <Text>value</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string,
    name: PropTypes.string
};

const win = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    text_shadow: {
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
});

export default Weather;