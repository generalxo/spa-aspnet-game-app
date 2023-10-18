import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { GameContext } from './Helper';

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

const Key = ({ letter }) => {
    const { board, setBoard, currentAttempt, setCurrentAttempt } =
        useContext(GameContext); // get our functions from the context

    useEffect(() => {
        const savedBoard = JSON.parse(sessionStorage.getItem('board'));
        const savedCurrentAttempt = JSON.parse(
            sessionStorage.getItem('currentAttempt')
        );
        if (savedBoard) {
            setBoard(savedBoard);
        }
        if (savedCurrentAttempt) {
            setCurrentAttempt(savedCurrentAttempt);
        }
    }, []);

    const HandleKeyClick = () => {
        if (letter === 'DELETE') {
            if (currentAttempt.letterPosition === 0) {
            } // Do nothing
            else {
                const newBoard = [...board];
                newBoard[currentAttempt.row][
                    currentAttempt.letterPosition - 1
                ] = ''; //letterPosition -1 beacuse we are already on the next letter
                setBoard(newBoard);
                setCurrentAttempt({
                    ...currentAttempt,
                    letterPosition: (currentAttempt.letterPosition -= 1),
                });
            }
        } else if (letter === 'ENTER') {
            if (currentAttempt.letterPosition !== 5) return;
            else {
                setCurrentAttempt({
                    row: (currentAttempt.row += 1),
                    letterPosition: 0,
                });
            }
        } else {
            if (currentAttempt.letterPosition > 4) return; // if we're at the end of the board, do nothing
            const newBoard = [...board];
            newBoard[currentAttempt.row][currentAttempt.letterPosition] =
                letter;
            setBoard(newBoard);
            setCurrentAttempt({
                ...currentAttempt,
                letterPosition: (currentAttempt.letterPosition += 1),
            });
        }

        console.log(currentAttempt.letterPosition);
        sessionStorage.setItem('board', JSON.stringify(board));
        sessionStorage.setItem(
            'currentAttempt',
            JSON.stringify(currentAttempt)
        );
    };

    if (letter.length > 1) {
        return <BigKeyWrapper onClick={HandleKeyClick}>{letter}</BigKeyWrapper>;
    } else {
        return <KeyWrapper onClick={HandleKeyClick}>{letter}</KeyWrapper>;
    }
};

export default Key;
