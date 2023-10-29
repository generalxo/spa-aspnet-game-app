import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AuthService from './api-authorization/AuthorizeService';

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProfileLable = styled.div`
    margin: 0;
    margin-top: 1rem;
    padding: 0;

    h1 {
        font-size: 3.25rem;
        font-weight: bold;
        padding: 0.5rem 1.6rem;
    }
`;

const ProfileDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: Flex-start;
    justify-content: center;

    h3 {
        font-size: 2rem;
        font-weight: bold;
        padding: 0.5rem 1.6rem;
    }

    p {
        font-size: 1.5rem;
        padding: 0.5rem 1.6rem;
    }
`;

const ProfilePage = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let token = await AuthService.getAccessToken();
                let response = await fetch('api/profile', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                let data = await response.json();
                //console.log(data);
                setUserData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <ProfileWrapper>
            <ProfileLable>
                <h1>Hello {userData.nickname}!</h1>
            </ProfileLable>
            <ProfileDataWrapper>
                <h3>Ur Stats</h3>
                <p>Total Games Played: {userData.totalGames}</p>
                <p>Average Score: {userData.averageScore}</p>
                <p>
                    Average time to complete a Wordle: {userData.averageTime}
                    /sec
                </p>
            </ProfileDataWrapper>
        </ProfileWrapper>
    );
};

export default ProfilePage;
