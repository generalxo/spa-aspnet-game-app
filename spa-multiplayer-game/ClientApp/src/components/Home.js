import React, { Component } from 'react';
import Game from './Game';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <Game />
            </div>
        );
    }
}
