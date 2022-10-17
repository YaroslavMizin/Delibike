interface error {
    errCode: string;
    message: string;
    status: string;
}

export interface errorData {
    status: string;
    data: error;
}