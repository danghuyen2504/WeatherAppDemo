import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions.js';

const Weather = ({weather, temperature, nameCity}) => {
    return (
        <View style = {[
                    styles.container,
                    {backgroundColor: weatherConditions[weather].color}
                ]}>
            <View style = {styles.headerContainer}>
                <MaterialCommunityIcons size = {72}
                                        style = {{marginTop: 25}}
                                        name = {weatherConditions[weather].icon}
                                        color = {'#fff'}/>
                <Text style = {{fontSize: 65, color: '#fff'}}>{temperature}˚C</Text>
                <Text style = {{fontSize: 72, color: '#fff'}}>{nameCity}</Text>
            </View>
            <View style = {styles.bodyContainer}>
                <Text style = {{fontSize: 60, color: '#fff'}}>{weatherConditions[weather].title}</Text>
                <Text style = {{fontSize: 24, color: '#fff'}}>{weatherConditions[weather].subtitle}</Text>
            </View>
        </View>
    );
};

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string,
    nameCity: PropTypes.string
};

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
    }
});

export default Weather;