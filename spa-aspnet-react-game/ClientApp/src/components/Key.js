import React, { useContext } from 'react';
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
    const { onSelectLetter, onDeleteLetter, onEnterLetter } =
        useContext(GameContext); // get our functions from the context

    const HandleKeyClick = () => {
        if (letter === 'DELETE') {
            onDeleteLetter();
        } else if (letter === 'ENTER') {
            onEnterLetter();
        } else {
            onSelectLetter(letter);
        }
    };

    if (letter.length > 1) {
        return <BigKeyWrapper onClick={HandleKeyClick}>{letter}</BigKeyWrapper>;
    } else {
        return <KeyWrapper onClick={HandleKeyClick}>{letter}</KeyWrapper>;
    }
};

export default Key;
