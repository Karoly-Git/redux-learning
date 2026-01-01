import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import namedayReducer from './nameday/namedaySlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        nameday: namedayReducer,
    },
});
