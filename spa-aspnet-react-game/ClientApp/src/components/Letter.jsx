import React, { useContext } from 'react';
import styled from 'styled-components';
import { GameContext } from './Helper';

const StyledLetter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #2b2b2b;
    color: #f3f3f3;
    margin: 0.3rem;
    padding: 0;
    font-size: 2.1rem;
    font-weight: bold;
    width: 70px;
    height: 70px;
`;

const Letter = ({ position, row }) => {

    const { board, CorrectWord } = useContext(GameContext); // board is a 6x5 matrix of letters
    const letter = board[row][position];

    
    return (
        <StyledLetter>{letter}</StyledLetter>
    );
};

export default Letter;
