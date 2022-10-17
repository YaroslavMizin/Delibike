import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authData, user } from '../../types/auth';

const token = localStorage.getItem('token');

// слайс для авторизации
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        auth: token? true : false,
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
        },
        setUser(state, action: PayloadAction<user>) {
            state.user = action.payload;
        }
    }
});

export default authSlice.reducer;
export const {logOut, logInSuccess, setUser} = authSlice.actions;