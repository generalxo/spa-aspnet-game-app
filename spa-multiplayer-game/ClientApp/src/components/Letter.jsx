import React, { useContext } from 'react';
import { GameContext } from './Helper';

function Letter(props) {
    const { board } = useContext(GameContext);

    const getBackgroundColor = (letterState) => {
        switch (letterState) {
            case 'default':
                return '#2b2b2b';
            case 'correct':
                return '#00ff00';
            case 'almost':
                return '#ffff00';
            case 'wrong':
                return '#ff0000';
            default:
                return '#2b2b2b';
        }
    };
    //using inline styles beacuse using props in styled components is cousing issues
    const letterStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: getBackgroundColor(props.letterState),
        color: '#f3f3f3',
        margin: '0.3rem',
        padding: 0,
        fontSize: '2.1rem',
        fontWeight: 'bold',
        borderRadius: '5px',
    };

    const letter = board[props.row][props.column].letter;

    return <div style={letterStyle}>{letter}</div>;
}

export default Letter;
