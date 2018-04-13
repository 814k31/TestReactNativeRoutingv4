import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import { Redirect, Route } from 'react-router-native';

type Props = {};

/* This view only gets rendered when the route is declared in App.js */
export default class ChildView extends Component<Props> {
    render() {
        return (
            <View style={{flex:1}}>
                <Text>ChildView Component</Text>
            </View>
        );
    }
}
