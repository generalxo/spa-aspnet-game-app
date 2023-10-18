﻿import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Board from './Board';
import Keyboard from './Keyboard';
import { boardMatrix, GameContext } from './Helper';

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
    const [currentAttempt, setCurrentAttempt] = useState({
        letterPosition: 0,
        row: 0,
    });
    const [CorrectWord, setCorrectWord] = useState('');

    useEffect(() => {
        fetch('api/game/newgame', {
            method: 'POST'
        })
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                //console.log(data.word);
                setCorrectWord(data.word);
            })
    }, []);
    

    const onSelectLetter = (letter) => {
        if (currentAttempt.letterPosition > 4) return; // if we're at the end of the board, do nothing

        const newBoard = [...board];
        newBoard[currentAttempt.row][currentAttempt.letterPosition] = letter;
        setBoard(newBoard);
        setCurrentAttempt({
            ...currentAttempt,
            letterPosition: currentAttempt.letterPosition + 1,
        });
    };
    const onDeleteLetter = () => {
        if (currentAttempt.letterPosition === 0) {
        } // Do nothing
        else {
            const newBoard = [...board];
            newBoard[currentAttempt.row][currentAttempt.letterPosition - 1] =
                ''; //letterPosition -1 beacuse we are already on the next letter
            setBoard(newBoard);
            setCurrentAttempt({
                ...currentAttempt,
                letterPosition: currentAttempt.letterPosition - 1,
            });
        }
    };
    const onEnterLetter = () => {
        if (currentAttempt.letterPosition !== 5) return;
        else {
            setCurrentAttempt({
                row: currentAttempt.row + 1,
                letterPosition: 0,
            });
        }
    };

    return (
        <GameWrapper>
            <StyledH1>Wordle</StyledH1>
            <GameContext.Provider
                value={{
                    board,
                    setBoard,
                    currentAttempt,
                    setCurrentAttempt,
                    onSelectLetter,
                    onDeleteLetter,
                    onEnterLetter,
                    CorrectWord,
                }}
            >
                <Board />
                <Keyboard />
            </GameContext.Provider>
        </GameWrapper>
    );
};

export default Game;
