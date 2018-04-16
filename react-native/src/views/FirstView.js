import React, { Component } from 'react';

import { Button, Text, View } from 'react-native';

import { Redirect, Route, Switch } from 'react-router-native';

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
        return (
            <Switch>
                <Route exact path={`${this.props.match.url}/`} render={(match) => {
                    var redirectToChildView = this.state.goToChildView ? <Redirect to={`${this.props.match.url}/ChildView`} push /> : null;
                    return (
                        <View>
                            {redirectToChildView}
                            <Text>FirstView Component</Text>
                            <Button title='goToChildView' onPress={() => this.setState({ goToChildView: true })} />
                        </View>
                    );
                }} />
                <Route path={`${this.props.match.url}/ChildView`} component={ChildView} />
            </Switch>
        );
    }
}
