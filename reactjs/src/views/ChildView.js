import React, { Component } from 'react';

type Props = {};

/* This view only gets rendered when the route is declared in App.js */
export default class ChildView extends Component<Props> {
    render() {
        return (
            <div>
                ChildView Component
            </div>
        );
    }
}
