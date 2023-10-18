import React from 'react';
import styled from 'styled-components';
import Key from './Key';

const KeyboardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const KeyboardRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


const Keyboard = () => {
    const keyboardRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const keyboardRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const keyboardRow3 = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE'];

    return (
        <KeyboardWrapper>
            <KeyboardRow>
                {keyboardRow1.map((letter) => (
                    <Key key={letter} letter={letter} />
                ))}
            </KeyboardRow>
            <KeyboardRow>
                {keyboardRow2.map((letter) => (
                    <Key key={letter} letter={letter} />
                ))}
            </KeyboardRow>
            <KeyboardRow>
                {keyboardRow3.map((letter) => (
                    <Key key={letter} letter={letter} />
                ))}
            </KeyboardRow>
        </KeyboardWrapper>
    );
};

export default Keyboard;
