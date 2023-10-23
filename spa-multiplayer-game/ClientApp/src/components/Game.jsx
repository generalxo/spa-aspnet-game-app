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
    //const [newGame, setNewGame] = useState(false);
    const [isBusy, setIsBusy] = useState(false);

    useEffect(() => {
        const FetchToken = async () => {
            const token = await AuthService.getAccessToken();
            // const response = await fetch('api/game/newgame', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         Authorization: `Bearer ${token}`,
            //     },
            // });
            // const data = await response.json();
            // console.log(data);
        };
        FetchToken();
    }, []);

    const FetchGame = async () => {
        isBusy = true;
        setIsBusy(isBusy);

        const response = await fetch('api/game/');
    };

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
