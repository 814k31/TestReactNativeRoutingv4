import React, { Component } from 'react';

import { Button, Text, View } from 'react-native';

import { Redirect, Route } from 'react-router-native';

import ChildView from './ChildView';

type Props = {};

/* FirstView Component responsible for redirecting to the ChildView component
 * Why Can't I declare the route here?
 */

export default class FirstView extends Component<Props> {
    constructor() {
        super();

        this.state = {
            goToChildView: false
        }
    }

    render() {
        var redirectToChildView = this.state.goToChildView ? <Redirect to='/FirstView/ChildView' push /> : null;

        return (
            <View style={{flex:1}}>
                {redirectToChildView}
                {/* It doesn't work with the route component rendered here */}
                <Route exact path='/FirstView/ChildView' component={ChildView} />
                <Text>FirstView Component</Text>
                <Button title='goToChildView' onPress={() => this.setState({ goToChildView: true })} />
            </View>
        );
    }
}
