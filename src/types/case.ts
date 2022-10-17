export interface robberyCase {
    _id: string,
    status: string,
    licenseNumber: string,
    type: string,
    ownerFullName: string,
    clientId: string,
    createdAt: string,
    updatedAt: string | null,
    color: string | null,
    date: string | null,
    officer: string,
    description: string | null,
    resolution: string | null,
}

export interface robberyCaseData {
    data: robberyCase;
    status: string;
}

export interface casesData {
    status: string;
    data: robberyCase[];
}

