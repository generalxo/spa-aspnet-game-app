import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AuthService from './api-authorization/AuthorizeService';
import Game from './Game';

const StartGameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StartGame = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [startGame, setStartGame] = useState(false);

    useEffect(() => {
        const CheckAuthenticated = async () => {
            const token = await AuthService.getAccessToken();
            if (!token) {
                setIsAuthenticated(false);
            } else {
                setIsAuthenticated(true);
            }
        };
        CheckAuthenticated();
    }, []);

    return (
        <StartGameWrapper>
            {startGame ? (
                <Game />
            ) : (
                <>
                    <h1>Welcome to my Wordle Clone</h1>
                    {isAuthenticated ? (
                        <>
                            <p>
                                Click the button below to start or continue a
                                game
                            </p>
                            <button onClick={() => setStartGame(true)}>
                                Start Game
                            </button>
                        </>
                    ) : (
                        <p>Please log in to start a new game</p>
                    )}
                </>
            )}
        </StartGameWrapper>
    );
};

export default StartGame;
