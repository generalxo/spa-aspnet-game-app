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

const Board = () => {
    return (
        <BoardWrapper>
            <BoardRowWrapper>
                <Letter position={0} attempt={0} />
                <Letter position={1} attempt={0} />
                <Letter position={2} attempt={0} />
                <Letter position={3} attempt={0} />
                <Letter position={4} attempt={0} />
            </BoardRowWrapper>
            <BoardRowWrapper>
                <Letter position={0} attempt={1} />
                <Letter position={1} attempt={1} />
                <Letter position={2} attempt={1} />
                <Letter position={3} attempt={1} />
                <Letter position={4} attempt={1} />
            </BoardRowWrapper>
            <BoardRowWrapper>
                <Letter position={0} attempt={2} />
                <Letter position={1} attempt={2} />
                <Letter position={2} attempt={2} />
                <Letter position={3} attempt={2} />
                <Letter position={4} attempt={2} />
            </BoardRowWrapper>
            <BoardRowWrapper>
                <Letter position={0} attempt={3} />
                <Letter position={1} attempt={3} />
                <Letter position={2} attempt={3} />
                <Letter position={3} attempt={3} />
                <Letter position={4} attempt={3} />
            </BoardRowWrapper>
            <BoardRowWrapper>
                <Letter position={0} attempt={4} />
                <Letter position={1} attempt={4} />
                <Letter position={2} attempt={4} />
                <Letter position={3} attempt={4} />
                <Letter position={4} attempt={4} />
            </BoardRowWrapper>
            <BoardRowWrapper>
                <Letter position={0} attempt={5} />
                <Letter position={1} attempt={5} />
                <Letter position={2} attempt={5} />
                <Letter position={3} attempt={5} />
                <Letter position={4} attempt={5} />
            </BoardRowWrapper>
        </BoardWrapper>
    );
};

export default Board;
