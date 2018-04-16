import React, { Component } from 'react';
import { NativeRouter, Route, Redirect, Switch } from 'react-router-native';

import { Button, Text, View } from 'react-native';

import FirstView from './views/FirstView';

type Props = {};

export default class App extends Component<Props> {
    constructor() {
        super();

        this.state = {
            goToFirstView: false
        };
    }

    render() {
        var redirectToFirstView = this.state.goToFirstView ? <Redirect to='/FirstView' push /> : null;

        return (
            <NativeRouter>
                <Switch>
                    <Route exact path='/' render={() => {
                        return (
                            <View>
                                <Text>App Component</Text>
                                <Button title='goToFirstView' onPress={() => this.setState({goToFirstView: true})} />
                                {redirectToFirstView}
                            </View>
                        );
                    }} />
                    <Route path='/FirstView' component={FirstView} />
                </Switch>
            </NativeRouter>
        );
    }
}
