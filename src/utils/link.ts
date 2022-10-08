interface link {
    name: string;
    to: string;
}

interface button {
    name: string;
    to?: string;
}

export const publicLinks: link[] = [
    {name: 'Главная', to: '/'},
    {name: 'Связаться', to: '/contact'},
]

export const privateLinks = [
    {name: 'Все случаи краж', to: '/cases'},
    {name: 'Сотрудники', to: '/officers'}
]

export const privateButtons = [
    {name: 'Профиль', to: '/profile'},
    {name: 'Выйти'}
]

export const publicButtons = [
    {name: 'Регистрация', to: '/signup'},
    {name: 'Войти', to: '/login'}
]