import React, { Component } from 'react';
import styled from 'styled-components';
import HomeLayout from './HomeLayout';

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
`;

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <HomeWrapper>
                <HomeLayout />
            </HomeWrapper>
        );
    }
}
