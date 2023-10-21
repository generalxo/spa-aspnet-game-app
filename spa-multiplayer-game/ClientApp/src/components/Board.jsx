import React, { useContext } from 'react';
import styled from 'styled-components';
import Letter from './Letter';
import { GameContext } from './Helper';

const BoardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 70px);
    grid-template-rows: repeat(5, 70px);
    grid-column-gap: 0px;
    grid-row-gap: 0.5rem;
    background-color: lightgray;
    margin: 0;
    padding: 0;
`;

function Board() {
    const { board } = useContext(GameContext);
    return (
        <BoardWrapper>
            {board.map((row, rowIndex) =>
                row.map((cell, cellIndex) => (
                    <Letter
                        column={cellIndex}
                        row={rowIndex}
                        letterState={cell.letterState}
                        key={`${rowIndex}-${cellIndex}`}
                    >
                        {cell.letter}
                    </Letter>
                ))
            )}
        </BoardWrapper>
    );
}

export default Board;
