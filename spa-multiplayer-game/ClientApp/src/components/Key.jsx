import React, { useContext } from 'react';
import styled from 'styled-components';
import AuthService from './api-authorization/AuthorizeService';
import { GameContext } from './Helper';

//Styled Components Start
const KeyWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.1rem;
    margin: 0.3rem;
    padding: 0;
    background-color: #2b2b2b;
    color: #f3f3f3;
    font-weight: bold;
    width: 70px;
    height: 70px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        box-shadow: 0 0 16px #2b2b2b;
        font-size: 2.5rem;
    }
`;

const BigKeyWrapper = styled(KeyWrapper)`
    font-size: 1.9rem;
    width: 125px;

    &:hover {
        font-size: 2.1rem;
    }
`;
//Styled Components End

const Key = ({ letter }) => {
    const {
        board,
        setBoard,
        currentAttempt,
        setCurrentAttempt,
        gameOver,
        setGameOver,
        wordFound,
        setWordFound,
    } = useContext(GameContext);

    const HandleKeyClick = () => {
        if (letter === 'ENTER') {
            if (currentAttempt.column !== 5) {
                return;
            } else {
                const dataToSend = {
                    Guesses: board,
                    CurrentAttemptRow: currentAttempt.row,
                    IsGameOver: gameOver,
                    IsWordFound: wordFound,
                };

                const checkword = async () => {
                    const token = await AuthService.getAccessToken();
                    const response = await fetch('api/game/checkword', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify(dataToSend),
                    });
                    if (!response.ok) {
                        console.log('Error');
                        return;
                    } else {
                        const data = await response.json();
                        setBoard(data.guesses);
                        setCurrentAttempt({
                            row: (currentAttempt.row += 1),
                            column: 0,
                        });
                        setGameOver(data.isGameOver);
                        setWordFound(data.isWordFound);
                    }
                };
                checkword();
            }
        } else if (letter === 'DELETE') {
            if (currentAttempt.column === 0) {
                return;
            } else {
                const newBoard = [...board];
                newBoard[currentAttempt.row][currentAttempt.column - 1].letter =
                    '';
                setBoard(newBoard);
                setCurrentAttempt({
                    ...currentAttempt,
                    column: (currentAttempt.column -= 1),
                });
            }
        } else {
            const newBoard = [...board];
            if (currentAttempt.column > 4) return;
            else {
                newBoard[currentAttempt.row][currentAttempt.column].letter =
                    letter;
                setBoard(newBoard);
                setCurrentAttempt({
                    ...currentAttempt,
                    column: (currentAttempt.column += 1),
                });
            }
        }
    };

    if (letter.length > 1) {
        return <BigKeyWrapper onClick={HandleKeyClick}>{letter}</BigKeyWrapper>;
    } else {
        return <KeyWrapper onClick={HandleKeyClick}>{letter}</KeyWrapper>;
    }
};

export default Key;
