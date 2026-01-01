import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import namedayReducer from './nameday/namedaySlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        nameday: namedayReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;