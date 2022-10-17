import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// слайс загрузки, ошибок и редиректа
const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        loading: false,
        loadingError: '',
        success: false,
    },
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.loadingError = action.payload;
        },
        setSuccess(state, action: PayloadAction<boolean>) {
            state.success = action.payload;
        }
    }
});

export default loadingSlice.reducer;
export const { setLoading, setError, setSuccess } = loadingSlice.actions;