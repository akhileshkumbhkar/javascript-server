export interface IUser {
    traineeEmail: string;
    reviewerEmail: string;
}

type access = {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
};

export interface IPermissions {
    getUsers: access;
}
