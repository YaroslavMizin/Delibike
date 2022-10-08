import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        loading: false,
        error: '',
        success: false,
    },
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        setSuccess(state, action: PayloadAction<boolean>) {
            state.success = action.payload;
        }
    }
});

export default loadingSlice.reducer;
export const { setLoading, setError, setSuccess } = loadingSlice.actions;