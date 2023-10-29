import React, { useContext } from 'react';
import styled from 'styled-components';
import { GameContext } from './Helper';

const GameOverWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
`;

const LinkToHome = styled.a`
    color: #f0f0f0;
    text-decoration: none;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 1rem;
    background-color: #242424;
    padding: 0.3rem 1rem 0.5rem 1rem;
    border-radius: 5px;
`;

const GameOver = () => {
    const { wordFound, currentAttempt, gameOver } = useContext(GameContext);

    return (
        <GameOverWrapper>
            <h1>
                {wordFound ? 'You found the word!' : 'Better luck next time'}
            </h1>
            {wordFound && gameOver && (
                <>
                    <h3>It took you {currentAttempt.row} tries</h3>
                    <LinkToHome href='/'>Home</LinkToHome>
                </>
            )}
        </GameOverWrapper>
    );
};

export default GameOver;
