import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: null,
    loading: false,
    error: null,
};

export const fetchNameday = createAsyncThunk(
    'nameday/fetchNameday',
    async ({ month, day }) => {
        const response = await fetch(
            `https://name-day-backend-0d74dcea0ed2.herokuapp.com/api/v1/namedays/${month}/${day}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch nameday data');
        }

        return response.json();
    }
);

export const namedaySlice = createSlice({
    name: 'nameday',
    initialState,
    reducers: {},
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
                state.error = action.error.message || 'Unknown error';
            });
    },
});

export default namedaySlice.reducer;
