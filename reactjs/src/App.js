import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

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
        var redirectToTacos = this.state.goToTacos ? <Redirect to='/tacos' push /> : null;

        return (
            <BrowserRouter>
                <div>
                    {/* Base route */}
                    <Route exact path='/' render={() => {
                        return (
                            <div>
                                <div>App Component</div>
                                <button onClick={() => this.setState({goToTacos: true})}>goToTacos</button>
                                {redirectToTacos}
                            </div>
                        );
                    }} />
                    <Route path="/tacos" component={Tacos} />
                </div>
            </BrowserRouter>
        );
    }
}


// when the url matches `/tacos` this component renders
const Tacos  = ({ redirect }) => (
  // here's a nested div
  <div>
    {/* here's a nested Route,
        match.url helps us make a relative path */}
    <Route exact
      path={'/FirstView'}
      component={FirstView}
    />
    TACOS
    <Redirect to='/FirstView' push />
  </div>
)
