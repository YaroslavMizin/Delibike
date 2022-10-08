import { logInSuccess } from './authSlice';
import { setLoading, setError, setSuccess } from './loadingSlice';
import { typedDispatch } from '../store';
import Service from '../../API/Service';

const token: string = localStorage.getItem('token') as string;

export const signIn = (data: {}) => async (dispatch: typedDispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await Service.postAuth(data, 'sign_in');
        dispatch(logInSuccess(response.data));
        dispatch(setSuccess(true));
    } catch (e: any) {
        dispatch(setError(e.response.data.message));
        dispatch(setLoading(false));
    } finally {
        dispatch(setLoading(false));
    }
}

export const signUp = (data: {}) => async (dispatch: typedDispatch) => {
    try {
        dispatch(setLoading(true));
        await Service.postAuth(data, '/sign_up');
        dispatch(setSuccess(true));
    } catch (e: any) {
        dispatch(setError(e.response.data.message));
        dispatch(setLoading(false));
    } finally {
        dispatch(setLoading(false));
    }
}

export const reportPublic = (data: {}) => async (dispatch: typedDispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await Service.postReport(data, '/public/report', token);
        console.log(response.data);
        dispatch(setSuccess(true));
    } catch (e: any) {
        dispatch(setError(e.response.data.message));
    } finally {
        dispatch(setLoading(false));
    }
}

export const reportPrivate = (data: {}) => async (dispatch: typedDispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await Service.postReport(data, '/cases/', token );
        console.log(response.data);
        dispatch(setSuccess(true));
    } catch (e: any) {
        dispatch(setError(e.response.data.message));
        dispatch(setLoading(false));
    } finally {
        dispatch(setLoading(false));
    }
}

export const getAuth = () => async (dispatch: typedDispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await Service.getAuth(token);
        dispatch(logInSuccess(response.data));
    } catch (e: any) {
        dispatch(setError(e.response.data.message));
        dispatch(setLoading(false));
    } finally {
        dispatch(setLoading(false));
    }
}
