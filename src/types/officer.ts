export interface officer {
        _id: string,
        email: string,
        firstName: string,
        lastName: string,
        password: string,
        clientId: string,
        approved: boolean,
}

export interface officersData {
    officers: officer[],
}