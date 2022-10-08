import { useState } from "react";
import { labels } from "../utils/fields";
import {
    setReportLicense, setReportName, setReportType, setReportColor, setReportDate, setReportInfo,
    setAuthEmail, setAuthPassword, setSignUpEmail, setSignUpFirstName, setSignUpLastName,
    setSignUpPassword, setSignUpClientId, setReportClientID, setOfficer
} from "../store/slices/formSlice";
import { setError } from "../store/slices/loadingSlice";
import { typedDispatch } from "../store/store";

export const useValidation = (variant: string,):
    [string,
        (value: string, label: string) => void,
        (value: string, label: string) => (dispatch: typedDispatch) => void] => {

    const regexp =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const [invalid, setInvalid] = useState<string>('');

    const onBlur = (value: string, label: string) => {
        if (value && label === labels.email && !regexp.test(value)) {
            setInvalid('Введите корректный адрес электронной почты')
        } else if (!value) {
            setInvalid('Все обязательные поля должны быть заполнены!')
        }
    }

    const onChange = (value: string, label: string) => (dispatch: typedDispatch) => {
        setInvalid('');
        dispatch(setError(''))
        switch (variant) {
            case 'report':
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
                } break;
            case 'signup': {
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
                } break;
            }
            case 'login': {
                switch (label) {
                    case labels.email: {
                        dispatch(setAuthEmail(value));
                    } break;
                    case labels.password: {
                        dispatch(setAuthPassword(value));
                    } break;
                }
            }
        }
    }
    return [invalid, onBlur, onChange];
}