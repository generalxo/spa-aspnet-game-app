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
                <Letter />
                <Letter />
                <Letter />
                <Letter />
                <Letter />
            </BoardRowWrapper>
            <BoardRowWrapper>
                <Letter />
                <Letter />
                <Letter />
                <Letter />
                <Letter />
            </BoardRowWrapper>
            <BoardRowWrapper>
                <Letter />
                <Letter />
                <Letter />
                <Letter />
                <Letter />
            </BoardRowWrapper>
            <BoardRowWrapper>
                <Letter />
                <Letter />
                <Letter />
                <Letter />
                <Letter />
            </BoardRowWrapper>
            <BoardRowWrapper>
                <Letter />
                <Letter />
                <Letter />
                <Letter />
                <Letter />
            </BoardRowWrapper>
            <BoardRowWrapper>
                <Letter />
                <Letter />
                <Letter />
                <Letter />
                <Letter />
            </BoardRowWrapper>
        </BoardWrapper>
    );
};

export default Board;
