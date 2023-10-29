import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AuthService from './api-authorization/AuthorizeService';
import { Link, Route, Routes } from 'react-router-dom';
import Game from './Game';
import HighScorePage from './HighScorePage';
import ProfilePage from './ProfilePage';

const HomeBanner = styled.div`
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
`;

const Title = styled.h1`
    text-align: center;
    font-weight: bold;
    font-size: 3.5rem;
    color: #030303;
    text-decoration: underline;
`;

const HeroSection = styled.div`
    height: 16rem;
    width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`;

const HeroText = styled.p`
    color: #030303;
    font-size: 1.4rem;
    text-align: start;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

const LinkTo = styled.div`
    background-color: #383838;
    border: none;
    padding: 1rem 1.6rem;
    display: inline-block;
    margin: 0.5rem 0.25rem;
    cursor: pointer;
    border-radius: 5px;

    * {
        text-decoration: none;
        text-align: center;
        font-size: 1.5rem;
        color: white;
    }
`;

const HeroTitle = styled(Title)`
    font-size: 3rem;
    text-decoration: none;
    margin-bottom: 1rem;
`;

const HomeLayout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const CheckAuthenticated = async () => {
            const token = await AuthService.getAccessToken();
            if (token !== null) {
                setIsAuthenticated(true);
            }
        };
        CheckAuthenticated();
    }, []);

    return (
        <>
            <HomeBanner>
                <Title>My Wordle Clone</Title>
            </HomeBanner>
            <HeroSection>
                <HeroTitle>Welcome</HeroTitle>
                <HeroText>
                    This Wordle clone is built using ASP.NET Core for the
                    backend, React.js for the frontend, and styled-components.
                    Authentication and Authorization has been implemented and
                    the application's data is managed by a SQL Server database,
                    created and managed using Entity Framework Core.
                </HeroText>
            </HeroSection>
            {isAuthenticated ? (
                <Container>
                    <LinkTo>
                        <Link to='/game'>Play Game</Link>
                    </LinkTo>
                    <LinkTo>
                        <Link to='/highscorepage'>Highscore</Link>
                    </LinkTo>
                    <LinkTo>
                        <Link to='/profilePage'>Profile</Link>
                    </LinkTo>
                </Container>
            ) : (
                <Container>
                    <LinkTo>
                        <a href='/authentication/login'>Login</a>
                    </LinkTo>
                    <LinkTo>
                        <a href='/authentication/register'>Register</a>
                    </LinkTo>
                </Container>
            )}
            <Routes>
                <Route path='/game' element={<Game />} />
                <Route path='/highscorepage' element={<HighScorePage />} />
                <Route path='/profilePage' element={<ProfilePage />} />
            </Routes>
        </>
    );
};

export default HomeLayout;
