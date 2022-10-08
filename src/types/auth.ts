export interface user {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    approved: boolean;
}

export interface authData {
    token: string;
    user: user;
}