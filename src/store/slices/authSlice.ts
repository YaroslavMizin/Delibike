import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authData, user } from '../../types/auth';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        auth: false,
        token: '',
        user: {} as user,
    },
    reducers: {
        logOut(state) {
            state.auth = false;
            state.user = {} as user;
            state.token = '';
            localStorage.removeItem('token');
        },
        logInSuccess(state, action: PayloadAction<authData>) {
            localStorage.setItem('token', `Bearer ${action.payload.token}`);
            state.token = `Bearer ${action.payload.token}`;
            state.auth = true;
            state.user = action.payload.user;
        }
    }
});

export default authSlice.reducer;
export const {logOut, logInSuccess} = authSlice.actions;