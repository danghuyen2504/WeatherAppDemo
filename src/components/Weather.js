import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions.js';

const Weather = ({temperature, temp_max, temp_min, visibility, weather, description, name, humidity, wind_speed}) => {
    var speed = (wind_speed * 1.6).toFixed(1);
    var vision = (visibility / 1000).toFixed(1);
    return (
        <ImageBackground    source = {weatherConditions[weather].background}
                            style = {styles.container}>
            <ScrollView>
                <View style = {{alignItems: 'center', marginTop: 50}}>
                    <Text style = {[styles.text_shadow, {fontSize: 50}]}>{name}</Text>
                </View>
                
                <View style = {{flexDirection: 'row', margin: 20}}>
                    <View style = {{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style = {[styles.text_shadow, {fontSize: 60}]}>{temperature}˚C</Text>
                        <View style = {{flexDirection: 'row', marginTop: 15}}>
                            <View style = {{flex: 1, alignItems: 'center'}}>
                                <Text style = {[styles.text_shadow, {fontSize: 20}]}>Min: {temp_min}˚C</Text>
                            </View>
                            <View style = {{flex: 1, alignItems: 'center'}}>
                                <Text style = {[styles.text_shadow, {fontSize: 20}]}>Max: {temp_max}˚C</Text>
                            </View>
                        </View>
                    </View>

                    <View style = {{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        <MaterialCommunityIcons size = {65}
                                                style = {[styles.text_shadow, {marginTop: 10}]}
                                                name = {weatherConditions[weather].icon}
                                                color = {'#fff'}/>
                        <Text style = {[styles.text_shadow, {fontSize: 35, marginTop: 10}]}>{weather}</Text>
                        <Text style = {[styles.text_shadow, {fontSize: 20}]}>{description}</Text>
                    </View>
                </View>

                <View style = {{flexDirection: 'row', marginTop: 20}}>
                    <View style = {{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style = {[styles.text_shadow, {fontSize: 22}]}>Humidity</Text>
                        <MaterialCommunityIcons size = {35}
                                                style = {[styles.text_shadow, {marginTop: 10}]}
                                                name = 'water-percent'
                                                color = {'#fff'}/>
                        <Text style = {[styles.text_shadow, {marginTop: 10, fontSize: 20}]}>{humidity}%</Text>
                    </View>
                    <View style = {{flex: 1, flexDirection: 'column', alignItems: 'center', borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#fff'}}>
                        <Text style = {[styles.text_shadow, {fontSize: 22}]}>Windy</Text>
                        <MaterialCommunityIcons size = {35}
                                                style = {[styles.text_shadow, {marginTop: 10}]}
                                                name = 'weather-windy'
                                                color = {'#fff'}/>
                        <Text style = {[styles.text_shadow, {marginTop: 10, fontSize: 20}]}>{speed}km/h</Text>
                    </View>
                    <View style = {{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style = {[styles.text_shadow, {fontSize: 22}]}>Visibility</Text>
                        <MaterialCommunityIcons size = {35}
                                                style = {[styles.text_shadow, {marginTop: 10}]}
                                                name = 'eye'
                                                color = {'#fff'}/>
                        <Text style = {[styles.text_shadow, {marginTop: 10, fontSize: 20}]}>{vision}km</Text>
                    </View>
                </View>

                <View style = {{marginTop: 30, marginLeft: 20, marginBottom: 30}}>
                    <Text style = {[styles.text_shadow, {fontSize: 30}]}>Should do</Text>
                    <Text style = {[styles.text_shadow, {fontSize: 15}]}>{weatherConditions[weather].subtitle}</Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

// Weather.propTypes = {
//     temperature: PropTypes.number.isRequired,
//     temp_max: PropTypes.number.isRequired,
//     temp_min: PropTypes.number.isRequired,
//     visibility: PropTypes.number.isRequired,
//     weather: PropTypes.string,
//     description: PropTypes.string,
//     name: PropTypes.string,
//     humidity: PropTypes.number.isRequired,
//     wind_speed: PropTypes.number.isRequired
// };

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