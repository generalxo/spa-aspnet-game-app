import React, { Component, useEffect } from 'react';
import styled from 'styled-components';
import authService from './api-authorization/AuthorizeService';
import StartGame from './StartGame';

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    h1 {
        font-size: 4rem;
    }
`;

export class Home extends Component {
    static displayName = Home.name;

    state = {
        isAuthenticated: false,
        user: null,
    };

    async componentDidMount() {
        try {
            const isAuthenticated = await authService.isAuthenticated();
            this.setState({ isAuthenticated });
        } catch (error) {
            console.error('Error checking authentication:', error);
        }
    }

    render() {
        const { isAuthenticated } = this.state;

        return (
            <HomeWrapper>
                {isAuthenticated ? <StartGame /> : <h1>Please login</h1>}
            </HomeWrapper>
        );
    }
}
