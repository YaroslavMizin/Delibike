import { logInSuccess, logOut } from './slices/authSlice';
import { setLoading, setError, setSuccess } from './slices/loadingSlice';
import { typedDispatch } from './store';
import Service from '../API/Service';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { labels } from '../utils/fields';
import { setAuthEmail, setAuthPassword, setOfficer, setReportClientID, setReportColor, setReportDate, setReportInfo, setReportLicense, setReportName, setReportType, setSignUpClientId, setSignUpEmail, setSignUpFirstName, setSignUpLastName, setSignUpPassword } from './slices/publicFormSlice';
import { setCaseColor, setCaseDate, setCaseDescription, setCaseLicense, setCaseName, setCaseOfficer, setCaseResolution, setCaseStatus, setCaseType, setOfficerApproved, setOfficerEmail, setOfficerFirstName, setOfficerLastName, setOfficerPassword } from './slices/privateFormSlice';

const token: string = localStorage.getItem('token') as string;

// шаблон для экшн запросов
const request = (
    callback:
        () => Promise<any>,
    action?: ActionCreatorWithPayload<any>,
    success?: boolean,
    auth?: boolean) =>
    async (dispatch: typedDispatch) => {
        try {
            dispatch(setLoading(true));
            const response = await callback();
            action && dispatch(action(response.data));
            !success && dispatch(setSuccess(true));
        } catch (e: any) {
            dispatch(setError(e.response.data.message));
            auth && dispatch(logOut());
            auth && setError('');
            dispatch(setLoading(false));
        } finally {
            dispatch(setLoading(false));
        }
    }

// асинхронные экшены
export const signIn = (data: {}) => request(() =>
    Service.postAuth(data, 'sign_in'), logInSuccess);

export const signUp = (data: {}) => request(() =>
    Service.postAuth(data, '/sign_up'));

export const reportPublic = (data: {}) => request(() =>
    Service.postReport(data, '/public/report', token));

export const reportPrivate = (data: {}) => request(() =>
    Service.postReport(data, '/cases/', token));

export const getAuth = () => request(() =>
    Service.getAuth(token), logInSuccess, true, true);

export const editCase = (data: {}, id: string | undefined) => request(() =>
    Service.putReport(data, '/cases/', id, token), undefined, true);

export const deleteCase = (id: string | undefined) => request(() =>
    Service.deleteReport('/cases/', id, token));

export const updateOfficer = (data: {}, id: string | undefined) => request(() =>
    Service.putOfficer(data, '/officers/', id, token), undefined, true);

export const deleteOfficer = (id: string | undefined) => request(() =>
    Service.deleteOfficer('/officers/', id, token), undefined, true);

export const deleteOfficerSuccess = (id: string | undefined) => request(() =>
    Service.deleteOfficer('/officers/', id, token));

export const createOfficer = (data: {}) => request(() =>
    Service.createOfficer(data, '/officers', token));

// экшены для заполнения форм

// регистрация
export const signUpForm = (value: string, label: string) => (dispatch: typedDispatch) => {
    switch (label) {
        case labels.email: {
            dispatch(setSignUpEmail(value));
        } break;
        case labels.password: {
            dispatch(setSignUpPassword(value));
        } break;
        case labels.name: {
            dispatch(setSignUpFirstName(value));
        } break;
        case labels.surname: {
            dispatch(setSignUpLastName(value));
        } break;
        case labels.clientId: {
            dispatch(setSignUpClientId(value));
        } break;
    }
}

// авторизация
export const logInForm = (value: string, label: string) => (dispatch: typedDispatch) => {
    switch (label) {
        case labels.email: {
            dispatch(setAuthEmail(value));
        } break;
        case labels.password: {
            dispatch(setAuthPassword(value));
        } break;
    }
}

// сообщение
export const reportForm = (value: string, label: string) => (dispatch: typedDispatch) => {
    switch (label) {
        case labels.licenseNumber: {
            dispatch(setReportLicense(value));
        } break;
        case labels.fullname: {
            dispatch(setReportName(value));
        } break;
        case labels.type: {
            dispatch(setReportType(value));
        } break;
        case labels.color: {
            dispatch(setReportColor(value));
        } break;
        case labels.date: {
            dispatch(setReportDate(value));
        } break;
        case labels.info: {
            dispatch(setReportInfo(value));
        } break;
        case labels.clientId: {
            dispatch(setReportClientID(value));
        } break;
        case labels.officer: {
            dispatch(setOfficer(value));
        } break;
    }
}

// редактирование сообщения
export const caseForm = (value: string, label: string) => (dispatch: typedDispatch) => {
    switch (label) {
        case labels.licenseNumber: {
            dispatch(setCaseLicense(value));
        } break;
        case labels.status: {
            dispatch(setCaseStatus(value));
        } break;
        case labels.type: {
            dispatch(setCaseType(value));
        } break;
        case labels.fullname: {
            dispatch(setCaseName(value));
        } break;
        case labels.color: {
            dispatch(setCaseColor(value));
        } break;
        case labels.date: {
            dispatch(setCaseDate(value));
        } break;
        case labels.officer: {
            dispatch(setCaseOfficer(value));
        } break;
        case labels.info: {
            dispatch(setCaseDescription(value));
        } break;
        case labels.resolution: {
            dispatch(setCaseResolution(value));
        } break;
    }
}

// создание и редактирование сотрудника
export const officerForm = (value: string, label: string) => (dispatch: typedDispatch) => {
    switch (label) {
        case labels.email: {
            dispatch(setOfficerEmail(value));
        } break;
        case labels.name: {
            dispatch(setOfficerFirstName(value));
        } break;
        case labels.surname: {
            dispatch(setOfficerLastName(value));
        } break;
        case labels.password: {
            dispatch(setOfficerPassword(value));
        } break;
        case labels.approved: {
            dispatch(setOfficerApproved(value));
        } break;
    }
}