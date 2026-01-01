import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


// -----------------------------
// TYPESCRIPT: State Shape
// -----------------------------

interface CounterState {
    value: number;
    loading: boolean;     // tracks async status
    error: string | null; // stores error messages
}


// -----------------------------
// BOTH: Initial State
// -----------------------------

const initialState: CounterState = {
    value: 0,
    loading: false,
    error: null,
};


// -----------------------------
// REDUX TOOLKIT: Async Thunks
// -----------------------------

// Async action that waits 1 second, then returns a number
export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount; // becomes action.payload
    }
);


// -----------------------------
// REDUX TOOLKIT: Slice
// -----------------------------

export const counterSlice = createSlice({
    name: 'counter',
    initialState,

    // -------------------------
    // SYNC reducers
    // -------------------------
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        reset: (state) => {
            state.value = 0;
        },
    },

    // -------------------------
    // ASYNC reducers
    // -------------------------
    extraReducers: (builder) => {

        // incrementAsync
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.loading = true;
                // console.log("pending");
            })
            .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.loading = false;
                state.value += action.payload;
                // console.log("fulfilled");
            })
            .addCase(incrementAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? null;
                // console.log("error");
            });
    },
});


// -----------------------------
// REDUX: Exports
// -----------------------------

export default counterSlice.reducer;

export const {
    increment,
    decrement,
    incrementByAmount,
    reset,
} = counterSlice.actions;
