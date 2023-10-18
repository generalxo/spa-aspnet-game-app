import React from 'react';
import styled from 'styled-components';
import Letter from './Letter';

const BoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 1.25rem 0;
`;

const BoardRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

// The Board component is a container for the Letter components. It is a 6x5 matrix of Letter components.
const Board = () => {
    return (
        <BoardWrapper>
            <BoardRowWrapper>
                <Letter position={0} row={0} />
                <Letter position={1} row={0} />
                <Letter position={2} row={0} />
                <Letter position={3} row={0} />
                <Letter position={4} row={0} />
            </BoardRowWrapper>
            <BoardRowWrapper>
                <Letter position={0} row={1} />
                <Letter position={1} row={1} />
                <Letter position={2} row={1} />
                <Letter position={3} row={1} />
                <Letter position={4} row={1} />
            </BoardRowWrapper>
            <BoardRowWrapper>
                <Letter position={0} row={2} />
                <Letter position={1} row={2} />
                <Letter position={2} row={2} />
                <Letter position={3} row={2} />
                <Letter position={4} row={2} />
            </BoardRowWrapper>
            <BoardRowWrapper>
                <Letter position={0} row={3} />
                <Letter position={1} row={3} />
                <Letter position={2} row={3} />
                <Letter position={3} row={3} />
                <Letter position={4} row={3} />
            </BoardRowWrapper>
            <BoardRowWrapper>
                <Letter position={0} row={4} />
                <Letter position={1} row={4} />
                <Letter position={2} row={4} />
                <Letter position={3} row={4} />
                <Letter position={4} row={4} />
            </BoardRowWrapper>
            <BoardRowWrapper>
                <Letter position={0} row={5} />
                <Letter position={1} row={5} />
                <Letter position={2} row={5} />
                <Letter position={3} row={5} />
                <Letter position={4} row={5} />
            </BoardRowWrapper>
        </BoardWrapper>
    );
};

export default Board;
