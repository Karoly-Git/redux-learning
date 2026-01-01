import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


// -----------------------------
// TYPESCRIPT: API response shape
// -----------------------------
// This matches the backend response exactly:
//
// {
//   "hu": ["Valér"],
//   "pl": ["Celina", "Iga", "Ignacy", "Krystiana", "Nina", "Wolimir", "Żegota"]
// }

export interface NamedayResponse {
    hu: string[];
    pl: string[];
}


// -----------------------------
// TYPESCRIPT: Slice state shape
// -----------------------------

interface NamedayState {
    data: NamedayResponse | null;
    loading: boolean;
    error: string | null;
}


// -----------------------------
// REDUX + TYPESCRIPT: Initial state
// -----------------------------

const initialState: NamedayState = {
    data: null,
    loading: false,
    error: null,
};


// -----------------------------
// REDUX TOOLKIT: Async thunk
// -----------------------------
// Fetches namedays for a given month and day

export const fetchNameday = createAsyncThunk<
    NamedayResponse,                       // returned data type
    { month: string; day: number }         // argument type
>(
    'nameday/fetchNameday',
    async ({ month, day }) => {
        const response = await fetch(
            `http://localhost:8000/api/v1/namedays/${month}/${day}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch nameday data');
        }

        return response.json();
    }
);


// -----------------------------
// REDUX TOOLKIT: Slice
// -----------------------------

export const namedaySlice = createSlice({
    name: 'nameday',
    initialState,

    // No synchronous reducers needed (yet)
    reducers: {},

    // Handle async lifecycle actions
    extraReducers: (builder) => {
        builder
            .addCase(fetchNameday.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNameday.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchNameday.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Unknown error';
            });
    },
});


// -----------------------------
// REDUX: Export reducer
// -----------------------------

export default namedaySlice.reducer;
