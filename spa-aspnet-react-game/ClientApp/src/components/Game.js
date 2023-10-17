import { useState, createContext } from 'react';
import styled from 'styled-components';
import Board from './Board';
import Keyboard from './Keyboard';
import { boardMatrix } from './Helper';

export const GameContext = createContext();

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
    const [board, setBoard] = useState(boardMatrix)

    return (
        <GameWrapper>
            <StyledH1>Wordle</StyledH1>
            <GameContext.Provider value={{ board, setBoard }}>
                <Board />
                <Keyboard />
            </GameContext.Provider>
        </GameWrapper>
    );
};

export default Game;
