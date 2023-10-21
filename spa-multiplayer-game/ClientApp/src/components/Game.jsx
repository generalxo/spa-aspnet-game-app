import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';
import { GameContext, boardMatrix } from './Helper';
import Keyboard from './KeyBoard';

const GameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
`;

const StyledH1 = styled.h1`
    margin: 1rem 0 1.25rem 0;
    padding: 0;
    font-size: 3rem;
    font-weight: bold;
`;

const Game = () => {
    const [board, setBoard] = useState(boardMatrix);
    const [currentAttempt, setCurrentAttempt] = useState({ row: 0, column: 0 });
    const [gameOver, setGameOver] = useState(false);

    return (
        <GameWrapper>
            <GameContext.Provider
                value={{
                    board,
                    setBoard,
                    currentAttempt,
                    setCurrentAttempt,
                    gameOver,
                    setGameOver,
                }}
            >
                <StyledH1>Wordle</StyledH1>
                <Board />
                <Keyboard />
            </GameContext.Provider>
        </GameWrapper>
    );
};

export default Game;
