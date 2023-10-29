import React, { useState, useEffect } from 'react';
import AuthService from './api-authorization/AuthorizeService';
import styled from 'styled-components';
import Board from './Board';
import { GameContext, boardMatrix } from './Helper';
import Keyboard from './KeyBoard';
import GameOver from './GameOver';

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
    const [wordFound, setWordFound] = useState(false);

    useEffect(() => {
        const FetchGame = async () => {
            let token = await AuthService.getAccessToken();
            let response = await fetch('api/game/fetchactivegame', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            //console.log(response);
            if (response.ok) {
                const data = await response.json();
                //console.log(response);
                if (data.activeGameStatus === 'found active game') {
                    setBoard(data.guesses);
                    setCurrentAttempt({
                        row: data.currentAttemptRow,
                        column: 0,
                    });
                }
            } else if (response.status === 404) {
                token = await AuthService.getAccessToken();
                response = await fetch('api/game/newgame', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                //console.log(response);
                if (response.ok) {
                    setBoard(boardMatrix);
                    setCurrentAttempt({ row: 0, column: 0 });
                }
            }
        };
        FetchGame();
    }, []);

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
                    wordFound,
                    setWordFound,
                }}
            >
                <StyledH1>Wordle</StyledH1>
                <Board />
                {gameOver ? <GameOver /> : <Keyboard />}
            </GameContext.Provider>
        </GameWrapper>
    );
};

export default Game;
