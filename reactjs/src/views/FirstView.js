import React, { Component } from 'react';

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
            <div>
                <Route exact path='/FirstView/ChildView' component={ChildView} />
                {redirectToChildView}
                {/* It doesn't work with the route component rendered here */}
                <div>FirstView Component</div>
                <button onClick={() => this.setState({ goToChildView: true })}>goToChildView</button>
            </div>
        );
    }
}
