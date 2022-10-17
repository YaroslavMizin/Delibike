import { ElementType } from "react";

export interface formfield {
    label: string;
    type: string;
    placeholder?: string;
    required: boolean;
    as: ElementType<any> | undefined;
    select?: boolean;
    disabled?: boolean;
    value?: string;
    autocomplete?: boolean;
};

interface caseFields {
    [key: string]: formfield;
}

interface officerFields {
    [key: string]: formfield;
}

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
    officer = 'Сотрудник:',
    licenseNumber = 'Номер лицензии:',
    id = 'ID:',
    status = 'Статус:',
    createdAt = 'Дата сообщения:',
    updatedAt = 'Обновлено:',
    resolution = 'Решение:',
    approved = 'Одобрен:',
}

export const signUpFields: formfield[] = [
    { label: labels.email, type: 'email', placeholder: 'email', required: true, as: 'input'},
    { label: labels.password, type: 'password', placeholder: 'придумайте пароль', required: true, as: 'input'},
    { label: labels.name, type: 'text', placeholder: 'имя', required: false, as: 'input' },
    { label: labels.surname, type: 'text', placeholder: 'фамилия', required: false, as: 'input' },
    { label: labels.clientId, type: 'text', placeholder: 'ID клиента', required: true, as: 'input' },
];

export const logInFields: formfield[] = [
    { label: labels.email, type: 'email', placeholder: 'email', required: true, as: 'input' },
    { label: labels.password, type: 'password', placeholder: 'введите пароль', required: true, as: 'input', autocomplete: true },
];

export const reportPublicFields: formfield[] = [
    { label: labels.licenseNumber, type: 'text', placeholder: 'номер лицензии', required: true, as: 'input' },
    { label: labels.fullname, type: 'text', placeholder: 'введите фамилию и имя', required: true, as: 'input' },
    { label: labels.type, type: 'text', placeholder: 'тип велосипеда', required: true, select: true, as: 'input' },
    { label: labels.clientId, type: 'text', placeholder: 'ID клиента', required: true, as: 'input' },
    { label: labels.color, type: 'text', placeholder: 'цвет велосипеда', required: false, as: 'input' },
    { label: labels.date, type: 'date', placeholder: 'Дата кражи', required: false, as: 'input' },
    { label: labels.info, type: 'text', placeholder: 'сообщите то, о чем мы должны знать', required: false, as: 'textarea' },
];

export const reportPrivateFields: formfield[] = [
    { label: labels.licenseNumber, type: 'text', placeholder: 'номер лицензии', required: true, as: 'input' },
    { label: labels.fullname, type: 'text', placeholder: 'введите фамилию и имя', required: true, as: 'input' },
    { label: labels.type, type: 'text', placeholder: 'тип велосипеда', required: true, select: true, as: 'input' },
    { label: labels.color, type: 'text', placeholder: 'цвет велосипеда', required: false, as: 'input' },
    { label: labels.date, type: 'date', placeholder: 'Дата кражи', required: false, as: 'input' },
    { label: labels.officer, type: 'text', placeholder: 'ID сотрудника', required: false, as: 'input', select: true },
    { label: labels.info, type: 'text', placeholder: 'сообщите то, о чем мы должны знать', required: false, as: 'textarea' },
];

export const caseFields: caseFields = {
    id: { label: labels.id, type: 'text', placeholder: '', required: true, as: 'input', disabled: true },
    status: { label: labels.status, type: 'text', placeholder: '', required: true, as: 'input' },
    licenseNumber: { label: labels.licenseNumber, type: 'text', placeholder: '', required: false, as: 'input' },
    type: { label: labels.type, type: 'text', placeholder: '', required: false, select: true, as: 'input' },
    fullname: { label: labels.fullname, type: 'text', placeholder: '', required: false, as: 'input' },
    clientId: { label: labels.clientId, type: 'text', placeholder: '', required: true, as: 'input', disabled: true },
    createdAt: { label: labels.createdAt, type: 'text', placeholder: '', required: true, as: 'input', disabled: true },
    updatedAt: { label: labels.updatedAt, type: 'text', placeholder: '', required: true, as: 'input', disabled: true },
    color: { label: labels.color, type: 'text', placeholder: 'цвет велосипеда', required: false, as: 'input' },
    date: { label: labels.date, type: 'date', placeholder: 'Дата кражи', required: false, as: 'input' },
    officer: { label: labels.officer, type: 'text', placeholder: 'ID сотрудника', required: false, select: true, as: 'input' },
    description: { label: labels.info, type: 'text', placeholder: 'сообщите то, о чем мы должны знать', required: false, as: 'textarea' },
    resolution: { label: labels.resolution, type: 'text', placeholder: 'Решение', required: true, as: 'textarea' },
}

export const officerFields: officerFields = {
    email: {label: labels.email, type: 'text', required: true, as: 'input', disabled: true},
    id: {label: labels.id, type: 'text', required: true, as: 'input', disabled: true},
    password: {label: labels.password, type: 'password', required: false, as: 'input', placeholder: 'изменить пароль'},
    firstName: {label: labels.name, type: 'text', required: false, as: 'input'},
    lastName: {label: labels.surname, type: 'text', required: false, as: 'input'},
    approved: {label: labels.approved, type: 'text', required: false, as: 'input', select: true},
}

export const newOfficerFields: formfield[] = [
    {label: labels.email, type: 'text', required: true, as: 'input'},
    {label: labels.password, type: 'password', required: true, as: 'input'},
    {label: labels.name, type: 'text', required: false, as: 'input'},
    {label: labels.surname, type: 'text', required: false, as: 'input'},
    {label: labels.approved, type: 'text', required: true, as: 'input', select: true},
]

export const bikeTypes: string[] = [
    'general',
    'sport'
];

export const approvedTypes: string[] = [
    'Да',
    'Нет'
]

export const statusTypes: string[] = [
    'new',
    'in_progress',
    'done',
]