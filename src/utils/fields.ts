interface formfield {
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
    select?: boolean;
}

export const signUpFields: formfield[] = [
    {label: 'Адрес электронной почты:', type: 'email', placeholder: 'email', required: true},
    {label: 'Пароль:', type: 'password', placeholder: 'придумайте пароль', required: true},
    {label: 'Имя:', type: 'text', placeholder: 'имя', required: false},
    {label: 'Фамилия:', type: 'text', placeholder: 'фамилия', required: false},
    {label: 'ID клиента:', type: 'text', placeholder: 'ID клиента', required: true},
]

export const logInFields: formfield[] = [
    {label: 'Адрес электронной почты:', type: 'email', placeholder: 'email', required: true},
    {label: 'Пароль:', type: 'password', placeholder: 'введите пароль', required: true},
]

export const reportFields: formfield[] = [
    {label: 'Номер лицензии:', type: 'text', placeholder: 'номер лицензии', required: true},
    {label: 'ФИО:', type: 'text', placeholder: 'введите фамилию и имя', required: true},
    {label: 'Выберите тип велосипеда:', type: 'text', placeholder: 'тип велосипеда', required: true, select: true},
    {label: 'Цвет велосипеда:', type: 'text', placeholder: 'цвет велосипеда', required: false},
    {label: 'Дата кражи:', type: 'date', placeholder: 'Дата кражи', required: false},
    {label: 'Дополнительная информация:', type: 'text', placeholder: 'сообщите то, о чем мы должны знать', required: false},
]

export const bikeTypes: string[] = [
    'Дорожный (городской) велосипед',
    'Шоссейный велосипед',
    'Горный велосипед',
    'Электровелосипед',
    'Фэтбайк'
]