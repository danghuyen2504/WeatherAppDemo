import React, { Component } from 'react';
import { firebaseApp } from '../database/FirebaseConfig.js';
import {Container, Content, Input, Item, Button, Text} from 'native-base';

export default class AddCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            latitude: '',
            longitude: ''
        };
        this.database = firebaseApp.database();
    }

    addCity() {
        if (this.state.name !== '') {
            this.database.ref('City').push({
                name: this.state.name,
                latitude: this.state.latitude,
                longitude: this.state.longitude
            });
            this.setState({
                name: '',
                latitude: '',
                longitude: ''
            })
        }
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Item regular>
                        <Input placeholder = 'Name City'
                                onChangeText = {(text) => this.setState({name: text})}/>
                    </Item>
                    <Item regular>
                        <Input placeholder = 'Latitude'
                                onChangeText = {(text) => this.setState({latitude: text})}/>
                    </Item>
                    <Item regular>
                        <Input placeholder = 'Longitude'
                                onChangeText = {(text) => this.setState({longitude: text})}/>
                    </Item>
                    <Button full success
                            onPress = {() => this.addCity()}>
                        <Text>Add</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}