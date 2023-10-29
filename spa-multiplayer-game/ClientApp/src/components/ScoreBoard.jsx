import React from 'react';
import styled from 'styled-components';

const ScoreBoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ScoreBoardTable = styled.table`
    border: 1px solid black;
    width: 40rem;
    margin: 0;
    padding: 0;
    table-layout: auto;

    table,
    td,
    th {
        border-collapse: collapse;
    }

    th,
    td {
        padding: 0.25rem;
        border: solid 1px;
        text-align: center;
    }
`;

const ScoreBoard = ({ scores }) => {
    const formatDateTime = (dateTimeString) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour12: false,
        };
        return new Intl.DateTimeFormat('sv', options).format(
            new Date(dateTimeString)
        );
    };

    return (
        <ScoreBoardWrapper>
            <ScoreBoardTable>
                <thead>
                    <tr>
                        <th>Score</th>
                        <th>Time to Complete</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((scoreData, index) => (
                        <tr key={index}>
                            <td>{scoreData.score}</td>
                            <td>{scoreData.timeToComplete} /sec</td>
                            <td>
                                {formatDateTime(scoreData.date).split(',')[0]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ScoreBoardTable>
        </ScoreBoardWrapper>
    );
};

export default ScoreBoard;
