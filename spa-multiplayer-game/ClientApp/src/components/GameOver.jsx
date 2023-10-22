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

const GameOver = () => {
    const { wordFound, currentAttempt, gameOver } = useContext(GameContext);

    return (
        <GameOverWrapper>
            <h1>
                {wordFound ? 'You found the word!' : 'Better luck next time'}
            </h1>
            {wordFound && gameOver && (
                <h3>It took you {currentAttempt.row} tries</h3>
            )}
        </GameOverWrapper>
    );
};

export default GameOver;
