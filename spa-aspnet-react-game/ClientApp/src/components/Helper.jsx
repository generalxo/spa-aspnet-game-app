import { createContext } from 'react';

export const boardMatrix = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
];

export const GameContext = createContext(); // Context object for sharing state between board and keyboard components
