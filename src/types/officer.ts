export interface officer {
    readonly _id: string,
    readonly email: string,
    firstName: string,
    lastName: string,
    password: string,
    readonly clientId: string,
    approved: boolean,
}

export interface officersData {
    officers: officer[],
}

export interface officerData {
    data: officer,
}