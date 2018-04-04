import React, { Component } from 'react';
import { firebaseApp } from '../database/FirebaseConfig.js';
import {FlatList} from 'react-native';
import {Container, View, Header, Content, Left, Body, Right, Button, ListItem, Text, Title} from 'native-base';

export default class CityList extends Component {
    constructor(props) {
        super(props);
        this.database = firebaseApp.database();

        this.state = {
            cities: []
        }
    }

    componentDidMount() {
        var cities = [];
        this.database.ref('City').on('child_added', dataSnapshot => {
            cities.push({
                name: dataSnapshot.val().name,
                lat: dataSnapshot.val().latitude,
                lon: dataSnapshot.val().longitude,
                key: dataSnapshot.key
            });
            this.setState({
                cities
            });
        });

        this.database.ref('City').on('child_removed', dataSnapshot => {
            cities = cities.filter((x) => x.key !== dataSnapshot.key);
            this.setState({
                cities
            });
        });
    }

    render() {
        console.log(this.state.cities);
        return (
            <Container>
                <View style = {{height: 23, backgroundColor: '#3b5bb2'}}></View>
                <Header>
                    <Left/>
                    <Body>
                        <Title>Weather</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content padder>
                    <FlatList   data = {this.state.cities}
                                renderItem = {this.renderItem}
                                keyExtractor = {(item, index) => index}>
                    </FlatList>
                </Content>
            </Container>
        );
    }

    renderItem = ({item}) => {
        return (
            <Button transparent
                    onPress = {() => {}}>
                <ListItem>
                    <Left/>
                    <Body>
                        <Text>{item.name}</Text>
                        <Text note>{item.lat} , {item.lon}</Text>
                    </Body>
                </ListItem>
            </Button>
        );
    }
}