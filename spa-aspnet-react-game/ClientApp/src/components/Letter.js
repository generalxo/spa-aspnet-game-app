import React, { useContext } from 'react';
import styled from 'styled-components';
import { GameContext } from './Game';

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

const Letter = ({ position, attempt }) => {

    const { board } = useContext(GameContext);
    const letter = board[attempt][position];

    return (
        <StyledLetter>{letter}</StyledLetter>
    );
};

export default Letter;
