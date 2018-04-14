import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

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
    <Route exact
      path={'/Carnitas'}
      component={Carnitas}
    />
    TACOS
    <Redirect to='/Carnitas' push />
  </div>
)
