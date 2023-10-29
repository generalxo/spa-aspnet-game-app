import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ScoreBoard from './ScoreBoard';
import AuthService from './api-authorization/AuthorizeService';

const HighScoreWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

const ScoreBoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    margin-top: 1rem;
`;

const ScoreBoardLable = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
`;

const HighScorePage = () => {
    const [alltime, setAlltime] = useState([]);
    const [daily, setDaily] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let token = await AuthService.getAccessToken();
                let response = await fetch('api/highscore/', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                let data = await response.json();
                //console.log(data.alltime);
                setAlltime(data.alltime);
                setDaily(data.daily);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <HighScoreWrapper>
            <Title>High Scores</Title>
            <ScoreBoardWrapper>
                <ScoreBoardLable>All Time High Scores</ScoreBoardLable>
                <ScoreBoard scores={alltime} />
            </ScoreBoardWrapper>
            <ScoreBoardWrapper>
                <ScoreBoardLable>Daily High Scores</ScoreBoardLable>
                <ScoreBoard scores={daily} />
            </ScoreBoardWrapper>
        </HighScoreWrapper>
    );
};

export default HighScorePage;
