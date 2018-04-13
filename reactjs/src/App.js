import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


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
            <BrowserRouter>
                <div>
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
                    <Route exact path='/FirstView' component={FirstView} />
                    {
                        /* It works if the Route Component is rendered here. Uncomment to test */
                        /*<Route exact path='/FirstView/ChildView' component={ChildView} />*/
                    }
                </div>
            </BrowserRouter>
        );
    }
}
