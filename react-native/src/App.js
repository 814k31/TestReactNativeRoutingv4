import React, { Component } from 'react';
import { NativeRouter, Route, Redirect } from 'react-router-native';

import { Button, Text, View } from 'react-native';

import FirstView from './views/FirstView';
import ChildView from './views/ChildView';

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
                <View style={{flex: 1}}>
                    {/* Base route */}
                    <Route exact path='/' render={() => {
                        return (
                            <View>
                                <Text>App Component</Text>
                                <Button title='goToFirstView' onPress={() => this.setState({goToFirstView: true})} />
                                {redirectToFirstView}
                            </View>
                        );
                    }} />
                    <Route exact path='/FirstView' component={FirstView} />
                    {
                        /* It works if the Route Component is rendered here. Uncomment to test */
                        /*<Route exact path='/FirstView/ChildView' component={ChildView} />*/
                    }
                </View>
            </NativeRouter>
        );
    }
}
