import { useState } from "react";
import { labels } from "../utils/fields";
import { setError } from "../store/slices/loadingSlice";
import { typedDispatch } from "../store/store";
import { caseForm, logInForm, officerForm, reportForm, signUpForm } from "../store/actionCreators";

const regexp =
/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const useValidation = (variant: string,):
    [(value: string, label: string) => (dispatch: typedDispatch) => void,
    (value: string, label: string) => void,
    string] => {

    const [invalid, setInvalid] = useState<string>('');

    const onBlur = (value: string, label: string) => {
        if (value && label === labels.email && !regexp.test(value)) {
            setInvalid('Введите корректный адрес электронной почты');
        } else if (!value) {
            setInvalid('Все обязательные поля должны быть заполнены!');
        }
    }

    const onChange = (value: string, label: string) => (dispatch: typedDispatch) => {
        setInvalid('');
        dispatch(setError(''))
        switch (variant) {
            case 'report': dispatch(reportForm(value, label));
                break;
            case 'signup': dispatch(signUpForm(value, label));
                break;
            case 'login': dispatch(logInForm(value, label));
                break;
            case 'case': dispatch(caseForm(value, label));
                break;
            case 'officer': dispatch(officerForm(value, label));
                break;
        }
    }
    return [onChange, onBlur, invalid];
}