import { ElementType } from "react";

export interface formfield {
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
    as: ElementType<any> | undefined;
    select?: boolean;
    disabled?: boolean;
    value?: string;
};

export enum labels {
    email = 'Адрес электронной почты:',
    password = 'Пароль:',
    name = 'Имя:',
    surname = 'Фамилия:',
    fullname = 'ФИО:',
    clientId = 'ID клиента:',
    type = 'Выберите тип велосипеда:',
    color = 'Цвет велосипеда:',
    date = 'Дата кражи:',
    info = 'Дополнительная информация:',
    officer = 'ID сотрудника:',
    licenseNumber = 'Номер лицензии:',
    id = 'ID:',
    status = 'Статус:',
    createdAt = 'Дата сообщения:',
    updatedAt = 'Обновлено:'
}

export const signUpFields: formfield[] = [
    {label: labels.email, type: 'email', placeholder: 'email', required: true, as: 'input'},
    {label: labels.password, type: 'password', placeholder: 'придумайте пароль', required: true, as: 'input'},
    {label: labels.name, type: 'text', placeholder: 'имя', required: false, as: 'input'},
    {label: labels.surname, type: 'text', placeholder: 'фамилия', required: false, as: 'input'},
    {label: labels.clientId, type: 'text', placeholder: 'ID клиента', required: true, as: 'input'},
];

export const logInFields: formfield[] = [
    {label: labels.email, type: 'email', placeholder: 'email', required: true, as: 'input'},
    {label: labels.password, type: 'password', placeholder: 'введите пароль', required: true, as: 'input'},
];

export const reportPublicFields: formfield[] = [
    {label: labels.licenseNumber, type: 'text', placeholder: 'номер лицензии', required: true, as: 'input'},
    {label: labels.fullname, type: 'text', placeholder: 'введите фамилию и имя', required: true, as: 'input'},
    {label: labels.type, type: 'text', placeholder: 'тип велосипеда', required: true, select: true, as: 'input'},
    {label: labels.clientId, type: 'text', placeholder: 'ID клиента', required: true, as: 'input'},
    {label: labels.color, type: 'text', placeholder: 'цвет велосипеда', required: false, as: 'input'},
    {label: labels.date, type: 'date', placeholder: 'Дата кражи', required: false, as: 'input'},
    {label: labels.info, type: 'text', placeholder: 'сообщите то, о чем мы должны знать', required: false, as: 'textarea'},
];

export const reportPrivateFields: formfield[] = [
    {label: labels.licenseNumber, type: 'text', placeholder: 'номер лицензии', required: true, as: 'input'},
    {label: labels.fullname, type: 'text', placeholder: 'введите фамилию и имя', required: true, as: 'input'},
    {label: labels.type, type: 'text', placeholder: 'тип велосипеда', required: true, select: true, as: 'input'},
    {label: labels.color, type: 'text', placeholder: 'цвет велосипеда', required: false, as: 'input'},
    {label: labels.date, type: 'date', placeholder: 'Дата кражи', required: false, as: 'input'},
    {label: labels.officer, type: 'text', placeholder: 'ID сотрудника', required: false, as: 'input'},
    {label: labels.info, type: 'text', placeholder: 'сообщите то, о чем мы должны знать', required: false, as: 'textarea'},
];

export const caseFields: formfield[] = [
    {label: labels.id, type: 'text', placeholder: '', required: false, as: 'input', disabled: true},
    {label: labels.status, type: 'text', placeholder: '', required: false, as: 'input'},
    {label: labels.licenseNumber, type: 'text', placeholder: '', required: false, as: 'input', disabled: true},
    {label: labels.type, type: 'text', placeholder: '', required: false, as: 'input', disabled: true},
    {label: labels.fullname, type: 'text', placeholder: '', required: false, as: 'input'},
    {label: labels.clientId, type: 'text', placeholder: '', required: false, as: 'input'},
    {label: labels.createdAt, type: 'text', placeholder: '', required: false, as: 'input'},
    {label: labels.updatedAt, type: 'text', placeholder: '', required: false, as: 'input'},
]

export const bikeTypes: string[] = [
    'general',
    'sport'
];

// export interface caseForm {
//     id: string,
//     status: string,
//     licenseNumber: string,
//     type: string,
//     ownerFullName: string,
//     clientId: string,
//     createdAt: string,
//     updatedAt: string | null,
//     color: string | null,
//     date: string | null,
//     officer: string | null,
//     description: string | null,
//     resolution: string | null,
// }