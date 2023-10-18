import React, { Component } from 'react';
import styled from 'styled-components';
import Game from './Game';

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #f1f1f1;
    width: 100%;
    min-height: 90vh;
`;

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <HomeWrapper>
                <Game />
            </HomeWrapper>
        );
    }
}
