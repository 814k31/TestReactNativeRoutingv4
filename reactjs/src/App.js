import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

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
            <BrowserRouter>
                <Switch>
                    {/* Base route */}
                    <Route exact path='/' render={() => {
                        return (
                            <div>
                                <div>App Component</div>
                                <button onClick={() => this.setState({goToFirstView: true})}>goToFirstView</button>
                                {redirectToFirstView}
                            </div>
                        );
                    }} />
                    <Route path='/FirstView' component={FirstView} />
                </Switch>
            </BrowserRouter>
        );
    }
}
