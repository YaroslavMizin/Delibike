export interface report {
    licenseNumber: string,
    ownerFullName: string,
    type: string,
    color: string,
    date: string,
    officer?: string,
    clientId: string,
    description: string,
}

export interface auth {
    email: string,
    password: string,
}

export interface signup {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    clientId: string,
}