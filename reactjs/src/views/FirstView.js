import React, { Component } from 'react';

import ChildView from './ChildView';

import { Route, Redirect, Switch } from 'react-router-dom';

type Props = {};

export default class FirstView extends Component<Props> {
    constructor() {
        super();

        this.state = {
            goToChildView: false
        };
    }

    render() {
        return (
            <Switch>
                <Route exact path={this.props.match.url} render={(match) => {
                    var redirectToChildView = this.state.goToChildView ? <Redirect to={`${this.props.match.url}/ChildView`} push /> : null;
                    return (
                        <div>
                            {redirectToChildView}
                            <div>FirstView Component</div>
                            <button onClick={() => this.setState({ goToChildView: true })}>goToChildView</button>
                        </div>
                    );
                }} />
                <Route path={`${this.props.match.url}/ChildView`} component={ChildView} />
            </Switch>
        );
    }
}
