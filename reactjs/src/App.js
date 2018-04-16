import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Carnitas from './views/Carnitas';

type Props = {};

export default class App extends Component<Props> {
    constructor() {
        super();

        this.state = {
            goToTacos: false
        };
    }

    render() {
        var redirectToTacos = this.state.goToTacos ? <Redirect to='/tacos' push /> : null;

        return (
            <BrowserRouter>
                <Switch>
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
                </Switch>
            </BrowserRouter>
        );
    }
}


// when the url matches `/tacos` this component renders
const Tacos  = ({ match }) => (
  // here's a nested div
  <Switch>
    TACOS
    <Route exact
      path={`${match.url}/Carnitas`}
      component={Carnitas}
    />
    <Redirect to={`${match.url}/Carnitas`} push />
  </Switch>
)
