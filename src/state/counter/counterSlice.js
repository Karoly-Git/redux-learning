import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    loading: false,
    error: null,
};

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
);

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        reset: (state) => {
            state.value = 0;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.value += action.payload;
            })
            .addCase(incrementAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || null;
            });
    },
});

export default counterSlice.reducer;

export const {
    increment,
    decrement,
    incrementByAmount,
    reset,
} = counterSlice.actions;
